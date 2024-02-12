import React from 'react';
import { UserCircleIcon } from '@heroicons/react/20/solid';

const mockData = [1, 2, 3];

const CommentListSkeleton = () => {
  return (
    <ul className="border mt-3 rounded animate-pulse">
      {mockData.map((i) => (
        <li
          key={i}
          className="border-b px-3 py-2 last:border-none odd:bg-orange-100"
        >
          <div className="flex gap-3 pb-1 text-slate-300 items-center">
            <UserCircleIcon className="h-6 w-6" />
            <div className="bg-slate-300 rounded h-3 w-24" />
          </div>
          <p className="italic py-1">
            <div className="bg-slate-300 rounded h-3 w-2/3" />
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CommentListSkeleton;
