import { Comment } from '../types/comment';

export const COMMENTS: Array<Comment> = [
  {
    id: 1,
    user: {
      id: 13,
      name: 'Zak',
    },
    rating: 2.1,
    comment: `I personally found this movie to be boring.
    Definitely one of the most boring movies I've ever seen.`,
    date: '2021-09-27T15:08:29.950Z',
  },
  {
    id: 2,
    user: {
      id: 11,
      name: 'Jack',
    },
    rating: 6.1,
    comment: 'A movie that will take you to another world full of emotions.',
    date: '2021-10-20T15:08:29.951Z',
  },
  {
    id: 3,
    user: {
      id: 11,
      name: 'Jack',
    },
    rating: 5.8,
    comment: 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.',
    date: '2021-10-06T15:08:29.951Z',
  },
];
