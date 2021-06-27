const key = 'Movie';

export const CHANGE_MOVIE_LIST_STATE = `${key}_CHANGE_MOVIE_LIST_STATE`;
export const CHANGE_DETAIL_MOVIE = `${key}_CHANGE_DETAIL_MOVIE`;

export interface IMovie {
  Poster?: string;
  Title?: string;
  Type?: string;
  Year?: string;
  imdbID?: string;
}
export interface IMovieList {
  Response?: string;
  Search?: IMovie[];
  totalResults?: string;
  Page?: string;
  loading?: boolean;
}

export interface IRatings {
  Source: string;
  Value: string;
}

export interface IMovieDetail {
  Response: string;
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: IRatings[];
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
