import { createComment } from '@/lib/createComment';
import type { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const data = { slug: '', user: '', message: '' };
  createComment(data);
};
