import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '../src/generated/prisma/index.js';
/* global process */
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || `file:${path.join(__dirname, '../database', 'uberprep.db')}`
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting seed...");
  
  const dataPath = path.join(__dirname, '../src/infrastructure/data/data_out.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  
  for (const weekData of data) {
    const createdWeek = await prisma.week.upsert({
      where: { weekNumber: weekData.week },
      update: {
        title: weekData.title,
        subtitle: weekData.subtitle,
        totalHours: weekData.totalHours,
      },
      create: {
        weekNumber: weekData.week,
        title: weekData.title,
        subtitle: weekData.subtitle,
        totalHours: weekData.totalHours,
      }
    });
    
    for (const day of weekData.days) {
      await prisma.day.upsert({
        where: { id: day.id },
        update: {
          label: day.label,
          dayName: day.dayName,
          topic: day.topic,
          time: day.time,
          review: day.review,
          note: day.note,
          weekId: createdWeek.id
        },
        create: {
          id: day.id,
          label: day.label,
          dayName: day.dayName,
          topic: day.topic,
          time: day.time,
          review: day.review,
          note: day.note,
          weekId: createdWeek.id
        }
      });
      
      for (const prob of day.problems) {
        await prisma.problem.upsert({
          where: { id: prob.id },
          update: {
            name: prob.name,
            freq: prob.freq,
            lc: prob.lc,
            dayId: day.id
          },
          create: {
            id: prob.id,
            name: prob.name,
            freq: prob.freq,
            lc: prob.lc,
            dayId: day.id
          }
        });
      }
    }
  }

  // Study resources logic can be added later or via UI.
  console.log("Seed done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
