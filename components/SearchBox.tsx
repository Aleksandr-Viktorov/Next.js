'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { Combobox } from '@headlessui/react';
import { useIsClient } from '../hooks';
import type { SearchableReview } from '../types';
import { REVIEWS_PATH } from '../constants';

const SearchBox = () => {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');
  const [reviews, setReviews] = useState<SearchableReview[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const controller = new AbortController();
      (async () => {
        const url = '/api/search?query=' + encodeURIComponent(debouncedQuery);
        const response = await fetch(url, { signal: controller.signal });
        const reviews = await response.json();
        setReviews(reviews);
      })();
      return () => controller.abort();
    } else {
      setReviews([]);
    }
  }, [debouncedQuery]);

  const handleChange = (review: SearchableReview) => {
    router.push(`${REVIEWS_PATH}/${review.slug}`);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          className="border px-2 py-1 rounded w-full"
        />
        <Combobox.Options className="absolute bg-white py-1 w-full">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    active ? 'bg-orange-100' : ''
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchBox;
