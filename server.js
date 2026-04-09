import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from './src/generated/prisma/index.js'; // Use generated output
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || `file:${path.join(__dirname, 'database', 'uberprep.db')}`
});
const prisma = new PrismaClient({ adapter });

const ALLOWED_MODELS = ['gemini-2.5-flash', 'gemini-2.5-pro'];

const app = express();

app.use(cors());
app.use(express.json());

// API: Get entire study plan with user progress
app.get('/api/data', async (req, res) => {
  try {
    const rawWeeks = await prisma.week.findMany({
      orderBy: { weekNumber: 'asc' },
      include: {
        days: {
          include: {
            problems: true
          }
        }
      }
    });

    const weeks = rawWeeks.map(w => ({ ...w, week: w.weekNumber }));

    const config = await prisma.config.findFirst() || { model: 'gemini-2.5-flash' };
    
    // Never send the API key to the frontend
    res.json({ weeks, config: { model: config.model } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API: Toggle problem completion
app.post('/api/problem/:id/toggle', async (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;
  try {
    const updated = await prisma.problem.update({
      where: { id },
      data: { isCompleted }
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar.' });
  }
});

// API: Save user note
app.post('/api/problem/:id/note', async (req, res) => {
  const { id } = req.params;
  const { note } = req.body;
  try {
    const updated = await prisma.problem.update({
      where: { id },
      data: { userNote: note }
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar nota.' });
  }
});

// API: Save settings (model only, API key is server-side)
app.post('/api/config', async (req, res) => {
  const { model } = req.body;

  if (!ALLOWED_MODELS.includes(model)) {
    return res.status(400).json({ error: 'Unsupported model.' });
  }

  try {
    const updated = await prisma.config.upsert({
      where: { id: 1 },
      update: { model },
      create: { id: 1, model }
    });
    res.json({ model: updated.model });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar configuração.' });
  }
});

// API: Proxy for AI chat (key stays server-side)
app.post('/api/ai/chat', async (req, res) => {
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'AI API key not configured on server.' });
  }

  try {
    const { model, messages } = req.body;
    const config = await prisma.config.findFirst();
    const selectedModel = model || config?.model || 'gemini-2.5-flash';

    if (!ALLOWED_MODELS.includes(selectedModel)) {
      return res.status(400).json({ error: 'Invalid model for chat.' });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: selectedModel,
        messages,
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 0.9,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'AI request failed.' });
    }

    res.json(data);
  } catch (error) {
    console.error('AI proxy error:', error);
    res.status(500).json({ error: 'Erro ao se comunicar com a IA.' });
  }
});

// Serve static React files
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
