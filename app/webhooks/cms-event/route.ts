import { revalidateTag } from 'next/cache';
import { CACHE_TAG_REVIEWS, TEXT_COMMON } from '@/constants';
import type { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const payload = await req.json();

  if (payload.model === TEXT_COMMON.REVIEW) {
    revalidateTag(CACHE_TAG_REVIEWS);
  }

  return new Response(null, { status: 204 });
};
