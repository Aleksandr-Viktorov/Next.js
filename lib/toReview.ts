import type { CmsItem, Review } from '../types';

export const toReview = (item: CmsItem): Review => {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: process.env.CMS_URL + attributes.image.data.attributes.url,
  };
};
