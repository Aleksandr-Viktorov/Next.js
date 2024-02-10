import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({
  log: [{ emit: 'stdout', level: 'query' }],
});

const comment = await db.comment.create({
  data: {
    slug: 'fall-guys',
    user: 'Tom',
    message: 'Greate game',
  },
});

const comments = await db.comment.findMany({ where: [{ slug: 'fall-guys' }] });
