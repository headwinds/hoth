/* eslint-disable */
import fetch from 'isomorphic-fetch';
import * as types from '../types/types';
/import * as social from './config/social';


export const requestRows = () => {
  return {
    type: types.GRID_ROWS_REQUEST,
  };
}

export const receiveRowsSuccess = (rows) => {
  return {
    type: types.GRID_ROWS_RECEIVE_SUCCESS,
    rows
  };
}


export const fetchTweetsByLocation = () => {
  return dispatch => {
    dispatch(requestRows())
    return fetch(`https://api.twitter.com/1.1/geo/reverse_geocode.json?lat=37.76893497&long=-122.42284884`)
      .then(response => response.json() )
      .then(json => dispatch(receiveRowsSuccess(json)))
  }
}

export const getTweets = () => {
  return dispatch => {
    /*
    var Twitter =  require('twitter-node-client').Twitter;
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };
    var config = social.twitter;

    var twitter = new Twitter(config);
    twitter.getSearch({'q':'#haiku','count': 10}, error, success);
    */
  }
}
