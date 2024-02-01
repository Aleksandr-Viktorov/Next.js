import { marked } from 'marked';
import type { CmsItem, Review } from '../types';
import qs from 'qs';
import { CACHE_TAG_REVIEWS, CMS_URL } from '../constants';

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

export const getReviews = async (pageSize?: number): Promise<Review[]> => {
  const { data } = await fetchReviews({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: pageSize ?? 6 },
  });
  return data.map(toReview);
};

async function fetchReviews(parameters: any) {
  const url =
    `${CMS_URL}/api/reviews?` +
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

export const getSlugs = async () => {
  const { data } = await fetchReviews({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  return data.map(({ attributes }) => attributes.slug);
};

function toReview(item: CmsItem): Review {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
}
