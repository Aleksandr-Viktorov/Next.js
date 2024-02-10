export interface Comment {
  id: string;
  slug: string;
  user: string;
  message: string;
  postedAt: Date;
}

export type CreateCommentDto = Omit<Comment, 'postedAt' | 'id'>;

export interface ActionError {
  isError: boolean;
  message: string;
}

export interface ActionState {
  isError: boolean;
  loading: boolean;
}
