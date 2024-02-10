import React from 'react';
import type { FC } from 'react';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import { getComments } from '@/lib/getComments';
import { Comment } from '@/types';
import { TEXT_COMMON } from '@/constants';

interface CommentListProps {
  slug: string;
}

const CommentList: FC<CommentListProps> = async ({ slug }) => {
  const comments: Comment[] = await getComments(slug);

  if (!comments.length) {
    return <p className="italic mt-3">{TEXT_COMMON.NO_COMMENTS}</p>;
  }

  return (
    <ul className="border mt-3 rounded">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="border-b px-3 py-2 last:border-none odd:bg-orange-100"
        >
          <div className="flex gap-3 pb-1 text-slate-500">
            <UserCircleIcon className="h-6 w-6" />
            {comment.user}
          </div>
          <p className="italic">{comment.message}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
