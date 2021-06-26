import axios from 'axios';

export const getAllMovies = () => () => {
  axios.get('/').then((res) => {
    console.log(res);
  });
};
