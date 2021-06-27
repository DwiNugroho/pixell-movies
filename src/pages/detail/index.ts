import { connect } from 'react-redux';
import Component from './component';
import { getDetailMovie } from '@/store/movie/actions';

import { RootState } from '@/store';

const mapStateToProps = (state: RootState) => ({
  ...state.movie,
});

const mapDispatchToProps = {
  getDetailMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
