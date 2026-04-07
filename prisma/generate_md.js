import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbUrl = process.env.DATABASE_URL || `file:${path.join(__dirname, '../database', 'uberprep.db')}`;
const adapter = new PrismaBetterSqlite3({ url: dbUrl });
const prisma = new PrismaClient({ adapter });

async function main() {
  const weeks = await prisma.week.findMany({
    include: {
      days: {
        include: {
          problems: true
        },
        orderBy: {
          id: 'asc'
        }
      }
    },
    orderBy: {
      weekNumber: 'asc'
    }
  });

  let mdContent = '# Problemas Planejados - UberPrepDash\n\n';

  for (const week of weeks) {
    mdContent += `## Semana ${week.weekNumber}: ${week.title}\n`;
    if (week.subtitle) {
      mdContent += `*${week.subtitle}*\n\n`;
    }

    for (const day of week.days) {
      if (day.problems && day.problems.length > 0) {
        mdContent += `### ${day.label} - ${day.dayName}\n`;
        mdContent += `**Tópico:** ${day.topic}\n\n`;
        mdContent += `| ID | Nome do Problema | Frequência | Link LeetCode | Concluído |\n`;
        mdContent += `|---|---|---|---|---|\n`;
        
        for (const prob of day.problems) {
          const lcLink = prob.lc ? `[Link](${prob.lc})` : '-';
          const completed = prob.isCompleted ? '✅' : '❌';
          mdContent += `| ${prob.id} | ${prob.name} | ${prob.freq} | ${lcLink} | ${completed} |\n`;
        }
        mdContent += '\n';
      }
    }
  }

  const outputPath = path.join(__dirname, '../problemas_planejados.md');
  fs.writeFileSync(outputPath, mdContent);
  console.log(`Gerado com sucesso em: ${outputPath}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
