'use server';

import { createComment } from '@/lib/createComment';
import type { ActionError, CreateCommentDto } from '@/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { validate } from './validate';
import { VALIDATE_MESSAGE } from '@/constants';

export const createCommentAction = async (
  formData: FormData
): Promise<undefined | ActionError> => {
  if (!formData.get('user')) {
    return {
      isError: true,
      message: VALIDATE_MESSAGE.NAME_IS_REQUIRED,
      loading: false,
    };
  }

  const data = {
    slug: formData.get('slug'),
    user: formData.get('user'),
    message: formData.get('message'),
  } as CreateCommentDto;

  const error: string = validate(data);

  if (error) {
    return { isError: true, message: error, loading: false };
  }

  await createComment(data);

  revalidatePath(`/reviews/${data.slug}`);
  redirect(`/reviews/${data.slug}`);
};
