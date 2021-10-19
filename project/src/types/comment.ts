import { BaseInfo } from './base-info';

export type Comment = {
  id: number;
  user: BaseInfo,
  rating: number;
  comment: string;
  date: string;
};
