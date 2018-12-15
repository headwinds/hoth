/* eslint-disable */
import fetch from 'isomorphic-fetch';
import * as types from '../types/types';

export const requestAnswer = () => {
  return {
    type: types.GAME_ANSWER_REQUEST,
  };
}

export const receiveAnswerSuccess = (response) => {
  return {
    type: types.GAME_ANSWER_RECEIVED_SUCCESS,
    response
  };
}


export const submitAnswer = () => {
  return dispatch => {
    dispatch(requestAnswer())
    /*
    return fetch(`https://api.twitter.com/1.1/geo/reverse_geocode.json?lat=37.76893497&long=-122.42284884`)
      .then(response => response.json() )
      .then(json => dispatch(receiveAnswerSuccess(json)))
      */
  }
}
