'use server';

import { createComment } from '@/lib/createComment';
import type { ActionError } from '@/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { validate } from './validate';

export const createCommentAction = async (
  formData: FormData
): Promise<undefined | ActionError> => {
  if (!formData.get('user')) {
    return { isError: true, message: 'Name field id required!' };
  }

  const data = {
    slug: formData.get('slug') as string,
    user: formData.get('user') as string,
    message: formData.get('message') as string,
  };

  const error = validate(data);

  if (error) {
    return { isError: true, message: error };
  }

  await createComment(data);

  revalidatePath(`/reviews/${data.slug}`);
  redirect(`/reviews/${data.slug}`);
};
