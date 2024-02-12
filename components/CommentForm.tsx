'use client';

import React from 'react';
import type { FC } from 'react';
import { TEXT_COMMON } from '@/constants';
import { createCommentAction } from '@/app/reviews/[slug]/action';
import { useFormState } from '@/hooks';

interface CommentFormProps {
  title: string;
  slug: string;
}

export const CommentForm: FC<CommentFormProps> = ({ title, slug }) => {
  const { state, handleSubmit } = useFormState(createCommentAction);

  return (
    <form
      onSubmit={handleSubmit}
      className="border bg-white flex flex-col gap-2 mt-3 px-3 py-3 rounded"
    >
      <p className="pb-1">
        {TEXT_COMMON.FORM_QUESION.replace('{{title}}', title)}
      </p>
      <input type="hidden" name="slug" value={slug} />
      <div className="flex">
        <label htmlFor="userField" className="shrink-0 w-32">
          {TEXT_COMMON.FORM_NAME}
        </label>
        <input
          id="userField"
          name="user"
          className="border px-2 py-1 rounded w-48"
        />
      </div>
      <div className="flex">
        <label htmlFor="messageField" className="shrink-0 w-32">
          {TEXT_COMMON.FORM_FEEDBACK}
        </label>
        <textarea
          id="messageField"
          name="message"
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      {state.isError && <p className="text-red-700">{state.message}</p>}
      <button
        disabled={state.loading}
        type="submit"
        className="bg-orange-800 rounded px-2 py-1 self-center
                   text-slate-50 w-32 hover:bg-orange-700
                   disabled:bg-slate-500 disabled:cursor-not-allowed"
      >
        {TEXT_COMMON.SUBMIT}
      </button>
    </form>
  );
};

export default CommentForm;
