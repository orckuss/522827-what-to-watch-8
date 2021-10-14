export type Movie = {
  readonly id: number;
  readonly name: string;
  readonly previewImage: string;
  readonly posterImage: string;
  readonly backgroundImage: string;
  readonly backgroundColor: string;
  readonly videoLink: string;
  readonly previewVideoLink: string;
  readonly description: string;
  readonly rating: number;
  readonly scoresCount: number;
  readonly director: string;
  readonly starring: Array<string>;
  readonly runTime: number;
  readonly genre: string;
  readonly released: number;
  readonly isFavorite: boolean;
};
