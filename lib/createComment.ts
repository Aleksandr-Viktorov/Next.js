import type { CreateCommentDto } from '@/types';
import { db } from './db';

export const createComment = async ({
  slug,
  user,
  message,
}: CreateCommentDto) => {
  return await db.comment.create({
    data: {
      slug,
      user,
      message,
    },
  });
};
