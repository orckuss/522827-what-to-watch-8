import { name, lorem, datatype, internet } from 'faker';
import { Comment } from 'src/types/comment';
import { Film } from 'src/types/film';
import { UserInfo } from 'src/types/user';

export const makeFakeUser = (): UserInfo => ({
  id: datatype.number(),
  avatarUrl: internet.avatar(),
  name: name.firstName(),
  email: internet.email(),
  token: datatype.string(),
});

export const makeFakeFilm = (): Film => ({
  id: datatype.number(),
  name: name.title(),
} as Film);

export const makeFakeComment = (): Comment => ({
  id: datatype.number(),
  comment: lorem.text(),
  rating: datatype.number(),
  date: datatype.datetime().toISOString(),
  user: {
    id: datatype.number(),
    name: name.firstName(),
  },
});

export const makeFakeCommentList = (count: number): Array<Comment> =>
  new Array(count).fill(null).map(() => makeFakeComment());

export const makeFakeFilmList = (count: number): Array<Film> =>
  new Array(count).fill(null).map(() => makeFakeFilm());
