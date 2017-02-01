/* eslint-disable */
import fetch from 'isomorphic-fetch';
import * as types from '../types/types';


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

/*
twitter: {
        clientID: "GX6Zh0AyFv4OVXg5jncCkLkg9",
        clientSecret: "YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
*/

export const getTweets = () => {
  return dispatch => {
    //var Twitter = require('twitter');
    /*
    var Twit = require('twit')

    var client = new Twit({
      consumer_key: 'Sbrkfm4VFG8YhS4QriGrQD5aR',
      consumer_secret: '  m31nnfIIm8ppvI44hcAgn4YBQQXM7APBmd359kl4lsxcb3XIBk',
      access_token_key: '688493-lEARjkGiDzwIBZH5Zh93Jjp6gGMzgohBZRrKzNEyrtz',
      access_token_secret: 'bbN24JHDniKxOOpsRffnRHygj2uGo7ndUc5MKNBdqnfqS'
    });

    client.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
      
       if (!err) {
        console.log(data);
        dispatch(receiveRowsSuccess(data))
      }
    })
    */

    var Twitter =  require('twitter-node-client').Twitter;
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };
    var config = {
        "consumerKey": "GX6Zh0AyFv4OVXg5jncCkLkg9",
        "consumerSecret": "YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl",
        "accessToken": '688493-Mb0JmJXdme1EEValKvh4MXqlkr2J2XdTOzRwrUAXkBu',
        "accessTokenSecret": 'xls7yK9nk3fEkAYDgnFh9eQg5lT1PQ2H1T2iXxHJ9j1MH'   
    };
    var twitter = new Twitter(config);
    //twitter.getUserTimeline({user_id: 'headwinds',count: '1'}, error,success);
    twitter.getSearch({'q':'#haiku','count': 10}, error, success);
  }
}
