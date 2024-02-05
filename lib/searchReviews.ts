import type { SearchableReview } from '../types';
import { fetchReviews } from './fetchReviews';

export const searchReviews = async (
  query: string | null
): Promise<SearchableReview[]> => {
  const { data } = await fetchReviews({
    filters: { title: { $containsi: query } },
    fields: ['slug', 'title'],
    sort: ['title'],
    pagination: { pageSize: 5 },
  });
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
  }));
};
