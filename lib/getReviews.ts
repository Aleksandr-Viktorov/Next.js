import type { ReviewResponseDto } from '../types';
import { fetchReviews } from './fetchReviews';
import { toReview } from './toReview';

export const getReviews = async (
  pageSize: number,
  page?: number
): Promise<ReviewResponseDto> => {
  const { data, meta } = await fetchReviews({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize, page },
  });
  return {
    pageCount: meta.pagination.pageCount,
    reviews: data.map(toReview),
  };
};
