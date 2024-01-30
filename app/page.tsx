import React from 'react';
import Heading from '@/components/Heading';
import Link from 'next/link';
import { getFeaturedReview } from '@/lib/reviews';

export const metadata = {
  title: 'Indie Gamer',
};

const HomePage = async () => {
  const reviews = await getFeaturedReview();

  return (
    <>
      <Heading children={'Indie Gamer'} />
      <p className="pb-3">Only thhe best indie games, ewviewed for you.</p>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${reviews.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={reviews.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2s">
            {reviews.title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
