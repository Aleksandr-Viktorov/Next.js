import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import type { FC } from 'react';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid';
import { getReview, getSlugs } from '@/lib';
import ShareLinkButton from '@/components/ShareLinkButton';
import type { ReviewPageParams, ReviewPageProps } from '@/types';
import Heading from '@/components/Heading';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';
import { TEXT_COMMON } from '@/constants';
import CommentListSkeleton from '@/components/CommentListSkeleton';

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
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
  return { title: review.title };
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
      <section className="border-dashed border-t max-w-screen-sm mt-3 py-3">
        <h2 className="font-bold flex gap-2 items-center text-xl">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          {TEXT_COMMON.COMMENTS}
        </h2>
        <CommentForm title={review.title} slug={slug} />
        <Suspense fallback={<CommentListSkeleton />}>
          <CommentList slug={slug} />
        </Suspense>
      </section>
    </>
  );
};

export default ReviewPage;
