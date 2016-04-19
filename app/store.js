import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  return createStore(reducers, initialState, applyMiddleware(
    thunkMiddleware,
    createLogger()
  ));
}
