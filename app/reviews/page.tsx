import Link from 'next/link';
import React from 'react';
import Heading from '../../components/Heading';
import { getReviews } from '../../lib/reviews';
import { TEXT_COMMON } from '../../constants';
import Image from 'next/image';

export const revalidate = 30; // seconds

const ReviewsPage = async () => {
  const reviews = await getReviews();
  reviews.map((review) => review.slug).join(', ');
  return (
    <>
      <Heading>{TEXT_COMMON.REVIEWS}</Heading>
      <ul className="flex flex-row gap-3">
        {reviews.map((review, i) => (
          <li
            key={review.slug}
            className="bg-white border w-80 rounded shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
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
