import { Action, Reducer } from 'redux';
import { CHANGE_MOVIE_LIST_STATE, CHANGE_DETAIL_MOVIE, IMovie } from './models';

export const defaultState = () => ({
  movieList: {
    s: '',
    Page: '1',
    Search: [] as IMovie[],
    Response: 'True',
    totalResults: '',
    loading: true,
  },
  movieDetail: {
    Response: 'True',
    Actors: '',
    Awards: '',
    BoxOffice: '',
    Country: '',
    DVD: '',
    Director: '',
    Genre: '',
    Language: '',
    Metascore: '',
    Plot: '',
    Poster: '',
    Production: '',
    Rated: '',
    Ratings: [],
    Released: '',
    Runtime: '',
    Title: '',
    Type: '',
    Website: '',
    Writer: '',
    Year: '',
    imdbID: '',
    imdbRating: '',
    imdbVotes: '',
  },
});

export type StateType = ReturnType<typeof defaultState>;

export const movieReducer: Reducer<StateType, Action> = (
  state: StateType = defaultState(),
  action: any,
) => {
  switch (action.type) {
    case CHANGE_MOVIE_LIST_STATE:
      return {
        ...state,
        movieList: {
          ...state.movieList,
          ...action.payload,
        },
      };
    case CHANGE_DETAIL_MOVIE:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
