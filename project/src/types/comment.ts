import { BaseInfo } from './base-info';

export type SendComment = Pick<Comment, 'comment' | 'rating'>

export type Comment = {
  id: number;
  user: BaseInfo,
  rating: number;
  comment: string;
  date: string;
};
