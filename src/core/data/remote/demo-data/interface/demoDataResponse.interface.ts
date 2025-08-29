export interface IDemoDataResponse {
  title: string;
  description: string;
  movies: IDemoDataResponseMovies[];
}

export interface IDemoDataResponseMovies {
  id: string;
  title: string;
  releaseYear: string;
}
