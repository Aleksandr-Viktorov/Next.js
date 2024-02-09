import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { searchReviews } from '@/lib';
import type { SearchableReview } from '@/types';

export const GET = async ({ nextUrl }: NextRequest) => {
  const query = nextUrl.searchParams.get('query');
  const reviews: SearchableReview[] = await searchReviews(query);
  return NextResponse.json(reviews);
};
