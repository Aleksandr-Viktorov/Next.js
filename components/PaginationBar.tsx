import React, { FC } from 'react';
import { TEXT_COMMON } from '../constants';
import PaginationLink from './PaginationLink';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface PaginationBarProps {
  page: number;
  pageCount: number;
  href: string;
}

const PaginationBar: FC<PaginationBarProps> = ({ page, href, pageCount }) => {
  return (
    <div className="flex gap-2 items-centers">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">{TEXT_COMMON.PREVIOUS_PAGE}</span>
      </PaginationLink>
      <span>{`${TEXT_COMMON.PAGE} ${page} of ${pageCount}`}</span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">{TEXT_COMMON.NEXT_PAGE}</span>
      </PaginationLink>
    </div>
  );
};

export default PaginationBar;
