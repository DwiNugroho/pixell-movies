import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import movie from './movie';

const combine = combineReducers({
  movie,
});

const middleware = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middleware = [thunk];
// }

const store = createStore(combine, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
