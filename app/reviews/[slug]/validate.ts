import { VALIDATE_MESSAGE } from '@/constants';
import type { CreateCommentDto } from '@/types';

export const validate = ({
  user,
  message,
}: CreateCommentDto): string | undefined => {
  if (!user) {
    return VALIDATE_MESSAGE.NAME_IS_REQUIRED;
  }
  if (user.length > 50) {
    return VALIDATE_MESSAGE.NAME_MAX_LENGTH;
  }
  if (!message) {
    return VALIDATE_MESSAGE.COMMENT_REQUIRED;
  }
  if (message.length > 500) {
    return VALIDATE_MESSAGE.COMMENT_MAX_LENGTH;
  }
};
