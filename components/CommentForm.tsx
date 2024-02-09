import { TEXT_COMMON } from '@/constants';
import React from 'react';
import type { FC } from 'react';

interface CommentFormProps {
  title: string;
}

export const CommentForm: FC<CommentFormProps> = ({ title }) => {
  return (
    <form className="border bg-white flex flex-col gap-2 mt-3 px-3 py-3 rounded">
      <p className="pb-1">
        {TEXT_COMMON.FORM_QUESION.replace('{{title}}', title)}
      </p>
      <div className="flex">
        <label htmlFor="userField" className="shrink-0 w-32">
          {TEXT_COMMON.FORM_NAME}
        </label>
        <input id="userField" className="border px-2 py-1 rounded w-48" />
      </div>
      <div className="flex">
        <label htmlFor="messageField" className="shrink-0 w-32">
          {TEXT_COMMON.FORM_FEEDBACK}
        </label>
        <textarea
          id="messageField"
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-800 rounded px-2 py-1 self-center
                   text-slate-50 w-32 hover:bg-orange-700"
      >
        {TEXT_COMMON.SUBMIT}
      </button>
    </form>
  );
};

export default CommentForm;
