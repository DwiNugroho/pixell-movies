import { connect } from 'react-redux';
import Component from './components';
import { getAllMovies } from '@/store/movie/actions';

// import { RootState } from '@/store';

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = {
  getAllMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
