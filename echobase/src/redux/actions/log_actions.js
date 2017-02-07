/* eslint-disable */
import fetch from 'isomorphic-fetch';
import * as types from '../types/types';

export const changeLog = () => {
  return {
    type: types.LOG_CHANGE,
  };
}
