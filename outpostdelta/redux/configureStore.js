/* eslint-disable */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {appReducer} from './reducers/app_reducer';
import {logReducer} from './reducers/log_reducer';
import {gridReducer} from './reducers/grid_reducer';
import {browserHistory} from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux'

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  app: appReducer,
  log: logReducer,
  grid: gridReducer,
  routing: routerReducer
});

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
		routerMiddleware(browserHistory)
    )
  )
}
