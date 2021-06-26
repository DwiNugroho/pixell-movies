import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import movie from './movie';

const combine = combineReducers({
  movie,
});

let middleware = [thunk, logger];

if (process.env.NODE_ENV === 'development') {
  middleware = [thunk];
}

const store = createStore(combine, applyMiddleware(...middleware));

export default store;
