import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import checkType from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(checkType, logger));

export default configureStore;