/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {gridReducer} from '../redux/reducers/grid_reducer';
import BasicReactDataGrid from '../components/BasicReactDataGrid.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

describe('BasicReactDataGrid', () => {

  const mockStore = {
    grid: {
      status: "ok",
      isScrolling: false       
    }
  };

  const store = createStore(gridReducer, mockStore, applyMiddleware(
      thunkMiddleware
    ));

  const renderer = TestUtils.renderIntoDocument(
    <Provider store={store} key="provider">
      <BasicReactDataGrid/>
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('renders correctly', () => {
    expect(dom).toBeDefined();
  });

});
