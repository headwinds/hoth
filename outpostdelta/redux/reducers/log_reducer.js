/* eslint-disable */
import * as types from "../types/types"; 

const defaultTitle = "Ever wonder what the rebels on Hoth before Vader? Was it all about the Wampas? Like Antartica? sample, study, repeat"; 
const encodedTweetMessage = encodeURIComponent(defaultTitle); 

function logReducer(state = {
    title: defaultTitle                
}, action) {
  switch (action.type) {
    case types.APP_STATUS_CHANGE:
      return Object.assign({}, state, {
        status: "ok"
      });
    case types.LOG_CHANGE:
      return Object.assign({}, state, {
        title: action.title
      });  
    default:
      return state
  }
}

export {logReducer};