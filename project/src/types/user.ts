import { BaseInfo } from './base-info';

export type AuthRequest = Pick<User, 'email' | 'password'>;

export type AuthResponse = Omit<User, 'password'>;

export type User = BaseInfo & {
  password: string;
  email: string;
  avatarUrl: string;
  token: string;
}
