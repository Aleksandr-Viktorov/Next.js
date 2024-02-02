import { marked } from 'marked';
import type { Review } from '../types';
import { fetchReviews } from './fetchReviews';
import { toReview } from './toReview';

export const getReview = async (slug: string): Promise<Review | null> => {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body),
  };
};
