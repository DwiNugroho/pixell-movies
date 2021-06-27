import { connect } from 'react-redux';
import Component from './component';
import { getAllMovies, changeMovieListState } from '@/store/movie/actions';

import { RootState } from '@/store';

const mapStateToProps = (state: RootState) => ({
  ...state.movie,
});

const mapDispatchToProps = {
  getAllMovies,
  changeMovieListState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
