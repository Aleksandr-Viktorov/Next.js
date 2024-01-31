import React from 'react';
import type { FC } from 'react';
import { getReview, getSlugs } from '../../../lib/reviews';
import ShareLinkButton from '../../../components/ShareLinkButton';
import type { ReviewPageProps } from '../../../app/types';
import Heading from '../../../components/Heading';

export const generateStaticParams = async () => {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  return { title: review.title };
};

const ReviewPage: FC<ReviewPageProps> = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  return (
    <>
      <Heading children={review.title} />
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
};

export default ReviewPage;
