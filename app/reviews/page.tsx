import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../../components/Heading';
import { getReviews } from '../../lib';
import { MAX_PAGE_SIZE, REVIEWS_PATH, TEXT_COMMON } from '../../constants';
import { parsePageParam } from './utils/parsePageParam';
import PaginationBar from '../../components/PaginationBar';

export const revalidate = 30; // seconds

const ReviewsPage = async ({ searchParams }) => {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(MAX_PAGE_SIZE, page);
  reviews.map((review) => review.slug).join(', ');
  return (
    <>
      <Heading>{TEXT_COMMON.REVIEWS}</Heading>
      <PaginationBar page={page} href={REVIEWS_PATH} pageCount={pageCount} />
      <ul className="flex flex-wrap gap-3">
        {reviews.map((review, i) => (
          <li
            key={review.slug}
            className="bg-white border w-80 rounded shadow hover:shadow-xl"
          >
            <Link href={`${REVIEWS_PATH}/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t mb-2"
                priority={i === 0}
              />
              <h2 className="font-semibold font-orbitron py-1 text-center">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;
