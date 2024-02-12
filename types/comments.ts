export interface Comment {
  id: string;
  slug: string;
  user: string;
  message: string;
  postedAt: Date;
}

export type CreateCommentDto = Omit<Comment, 'postedAt' | 'id'>;

export type Action = (formData: FormData) => Promise<undefined | ActionError>;

export interface ActionError {
  isError: boolean;
  loading: boolean;
  message: string;
}
