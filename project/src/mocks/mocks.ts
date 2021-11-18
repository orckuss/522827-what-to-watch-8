import { name, lorem, datatype, internet, image } from 'faker';
import { Comment } from 'src/types/comment';
import { Film } from 'src/types/film';
import { UserInfo } from 'src/types/user';

export const makeFakeUser = (token = ''): UserInfo => ({
  id: datatype.number(),
  avatarUrl: internet.avatar(),
  name: name.firstName(),
  email: internet.email(),
  token,
});

export const makeFakeFilm = (): Film => ({
  id: datatype.number(),
  name: name.title(),
  backgroundColor: internet.color(),
  backgroundImage: image.imageUrl(),
  description: lorem.paragraph(),
  director: name.firstName(),
  genre: datatype.string(),
  isFavorite: datatype.boolean(),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  videoLink: internet.url(),
  rating: datatype.number({min: 0, max: 10, precision: 2}),
  released: datatype.datetime().getFullYear(),
  runTime: datatype.number(),
  scoresCount: datatype.number(),
  starring: datatype.array(),
} as Film);

export const makeFakeComment = (): Comment => ({
  id: datatype.number(),
  comment: lorem.paragraph(),
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
