import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { searchReviews } from '../../../lib';

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams.get('query');
  const reviews = await searchReviews(query);
  return NextResponse.json(reviews);
};
