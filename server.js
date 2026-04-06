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

const app = express();

app.use(cors());
app.use(express.json());

// API: Get entire study plan with user progress
app.get('/api/data', async (req, res) => {
  try {
    const weeks = await prisma.week.findMany({
      orderBy: { weekNumber: 'asc' },
      include: {
        days: {
          include: {
            problems: true
          }
        }
      }
    });

    const resources = await prisma.resource.findMany();
    const config = await prisma.config.findFirst() || { apiKey: '', model: 'gemini-2.5-flash' };
    
    res.json({ weeks, resources, config });
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

// API: Save settings
app.post('/api/config', async (req, res) => {
  const { apiKey, model } = req.body;
  try {
    const updated = await prisma.config.upsert({
      where: { id: 1 },
      update: { apiKey, model },
      create: { id: 1, apiKey, model }
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar configuração.' });
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
