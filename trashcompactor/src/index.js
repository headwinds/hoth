/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import configureStore from './redux/configureStore';
import App from './App';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);