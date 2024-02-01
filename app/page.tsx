import React from 'react';
import Heading from '../components/Heading';
import Link from 'next/link';
import { getReviews } from '../lib/reviews';
import { TEXT_COMMON } from '../constants';
import Image from 'next/image';

export const revalidate = 30; // seconds

const HomePage = async () => {
  const reviews = await getReviews(3);
  reviews.map((review) => review.slug).join(', ');
  return (
    <>
      <Heading>{TEXT_COMMON.INDIE}</Heading>
      <p className="pb-3">{TEXT_COMMON.REVIEW_TITLE}</p>
      <ul className="flex flex-col gap-3">
        {reviews.map((review, i) => {
          return (
            <li
              key={i}
              className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"
            >
              <Link
                href={`/reviews/${review.slug}`}
                className="flex flex-col sm:flex-row"
              >
                <Image
                  src={review.image}
                  alt=""
                  width="320"
                  height="180"
                  className="rounded-t sm:rounded-l sm:rounded-r-none"
                  priority={i === 0}
                />
                <div className="px-2 py-1 text-center sm:text-left">
                  <h2 className="font-orbitron font-semibold">
                    {review.title}
                  </h2>
                  <p className="hidden pt-2 sm:block">{review.subtitle}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomePage;
