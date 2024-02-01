import { revalidateTag } from 'next/cache';
import { CACHE_TAG_REVIEWS } from '../../../constants';

export const POST = async (req) => {
  const payload = await req.json();
  if (payload.model === 'review') {
    revalidateTag(CACHE_TAG_REVIEWS);
  }
  return new Response(null, { status: 204 });
};
