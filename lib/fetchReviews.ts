import { CACHE_TAG_REVIEWS, REVIEWS_PATH } from '../constants';
import qs from 'qs';

//TODO add type for parameters
export async function fetchReviews(parameters: any) {
  const url =
    `${process.env.CMS_URL}/api${REVIEWS_PATH}?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_REVIEWS],
    },
  });

  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }

  return await response.json();
}
