import { fetchReviews } from './fetchReviews';

export const getSlugs = async () => {
  const { data } = await fetchReviews({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  return data.map(({ attributes }) => attributes.slug);
};
