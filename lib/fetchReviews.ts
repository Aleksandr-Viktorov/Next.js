import { CACHE_TAG_REVIEWS } from '../constants';
import qs from 'qs';

//TODO add type for parameters
export const fetchReviews = async (params: unknown) => {
  const url =
    `http://localhost:1337/api/reviews?` +
    qs.stringify(params, { encodeValuesOnly: true });

  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_REVIEWS],
    },
  });

  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }

  return await response.json();
};
