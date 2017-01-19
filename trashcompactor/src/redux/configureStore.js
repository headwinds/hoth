/* eslint-disable */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {appReducer} from './reducers/app_reducer';
import {gridReducer} from './reducers/grid_reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  app: appReducer,
  grid: gridReducer,
});

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
