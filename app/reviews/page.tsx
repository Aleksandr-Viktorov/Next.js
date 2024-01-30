import Link from 'next/link';
import React from 'react';
import Heading from '../../components/Heading';
import Image from 'next/image';
import { getReviews } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews',
};

const ReviewsPage = async () => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row gap-3">
        {reviews.map((review) => (
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
