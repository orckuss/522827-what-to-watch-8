export type Genre = {
  name: GenreName;
  active: boolean;
};

export type GenreName =
  | 'All genres'
  | 'Comedies'
  | 'Crime'
  | 'Documentary'
  | 'Dramas'
  | 'Horror'
  | 'Kids & Family'
  | 'Romance'
  | 'Sci-Fi'
  | 'Thrillers';
