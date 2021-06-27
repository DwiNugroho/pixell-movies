import axios from 'axios';
import { Dispatch } from 'redux';
import {
  CHANGE_DETAIL_MOVIE,
  CHANGE_MOVIE_LIST_STATE,
  IMovieList,
  IMovieDetail,
} from './models';

export const changeMovieListState = (payload: IMovieList) => ({
  type: CHANGE_MOVIE_LIST_STATE,
  payload,
});

export const changeDetailMovie = (payload: IMovieDetail) => ({
  type: CHANGE_DETAIL_MOVIE,
  payload,
});

export const getAllMovies = (keyword: string) => (dispatch: Dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get<IMovieList>(`/?s=${keyword}`)
      .then((res) => {
        dispatch(changeMovieListState(res.data));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getDetailMovie = (id: string) => (dispatch: Dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get<IMovieDetail>(`/?i=${id}`)
      .then((res) => {
        dispatch(changeDetailMovie(res.data));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
