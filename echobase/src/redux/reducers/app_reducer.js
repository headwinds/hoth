/* eslint-disable */
import * as types from '../types/types';
import { mobileDetect } from '../../utils/MobileDetect';

const isMobile = mobileDetect();

function appReducer(
  state = {
    status: 'ok',
    isMobile
  },
  action
) {
  switch (action.type) {
    case types.APP_STATUS_CHANGE:
      return Object.assign({}, state, {
        status: 'ok'
      });
    default:
      return state;
  }
}

export { appReducer };
