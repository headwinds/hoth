/* eslint-disable */
import * as types from "../types/types"; 

function appReducer(state = {
    status: "ok"                   
}, action) {
  switch (action.type) {
    case types.APP_STATUS_CHANGE:
      return Object.assign({}, state, {
        status: "ok"
      });
    default:
      return state
  }
}

export {appReducer};