import { db } from './db';

export const getComments = async (slug: string) => {
  return await db.comment.findMany({
    where: { slug },
    orderBy: { postedAt: 'desc' },
  });
};
