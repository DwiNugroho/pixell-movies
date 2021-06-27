import axios from 'axios';
import { Dispatch } from 'redux';
import {
  CHANGE_DETAIL_MOVIE,
  CHANGE_MOVIE_LIST_STATE,
  IMovieList,
  IMovieDetail,
} from './models';

import { RootState } from '../index';

export const changeMovieListState = (payload: IMovieList) => ({
  type: CHANGE_MOVIE_LIST_STATE,
  payload,
});

export const changeDetailMovie = (payload: IMovieDetail) => ({
  type: CHANGE_DETAIL_MOVIE,
  payload,
});

export const getAllMovies = (keyword: string) => (
  dispatch: Dispatch,
  getState: () => RootState,
) => {
  const { movieList } = getState().movie;

  dispatch(changeMovieListState({ loading: true }));
  return new Promise((resolve, reject) => {
    axios
      .get<IMovieList>(`/?s=${keyword}&&page=${movieList.Page || '1'}`)
      .then((res) => {
        let data = { ...movieList };

        if (res.data.Response === 'True') {
          const Search = [
            ...(movieList.Search || []),
            ...(res.data.Search || []),
          ];

          data = {
            ...movieList,
            ...res.data,
            Search,
          };
        } else {
          data = {
            ...movieList,
            ...res.data,
          };
        }
        dispatch(changeMovieListState(data));
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        dispatch(changeMovieListState({ loading: false }));
      });
  });
};

export const getDetailMovie = (id: string) => (dispatch: Dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get<IMovieDetail>(`/?i=${id}&&plot=full`)
      .then((res) => {
        dispatch(changeDetailMovie(res.data));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
