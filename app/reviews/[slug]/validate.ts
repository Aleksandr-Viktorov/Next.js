import type { CreateCommentDto } from '@/types';

export const validate = (data: CreateCommentDto): string | undefined => {
  if (!data.user) {
    return 'Name field is required';
  }
  if (data.user.length > 50) {
    return 'Name field cannot be longer than 50 characters';
  }
  if (!data.message) {
    return 'Comment field is required';
  }
  if (data.message.length > 500) {
    return 'Comment field cannot be longer than 500 characters';
  }
};
