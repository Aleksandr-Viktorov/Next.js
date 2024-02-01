import React from 'react';
import type { Metadata } from 'next';
import type { FC } from 'react';
import { getReview, getSlugs } from '../../../lib/reviews';
import ShareLinkButton from '../../../components/ShareLinkButton';
import type { ReviewPageProps } from '../../../types';
import Heading from '../../../components/Heading';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
}

const ReviewPage: FC<ReviewPageProps> = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
        priority={false}
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body ?? '' }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
};

export default ReviewPage;
