import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { Review } from '@/app/types';

export const getFeaturedReview = async () => {
  const review = await getReviews();

  return review[0];
};

export const getReview = async (slug: string): Promise<Review> => {
  const fileContent = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, date, image },
  } = matter(fileContent);
  const body = marked(content);

  return { title, date, image, body, slug };
};

export const getReviews = async () => {
  const slugs = await getSlugs();
  const reviews: Review[] = [];

  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  reviews.sort((a, b) => b.date.localeCompare(a.date));
  return reviews;
};

export const getSlugs = async () => {
  const files = await readdir('./content/reviews');
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
};
