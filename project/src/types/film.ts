// ToDO: Supplement the type at the stage of integration with the server
export type Film = {
  readonly id: number;
  readonly name: string;
  readonly previewImage: string;
  readonly posterImage: string;
  readonly backgroundImage: string;
  readonly genre: string,
  readonly released: number,
};
