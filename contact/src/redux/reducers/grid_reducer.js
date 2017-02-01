/* eslint-disable */
import * as types from "../types/types"; 

const getRows = function(numRows){
    var _rows = [];
    for (var i = 1; i < numRows; i++) {
      _rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * numRows,
      });
    }
    return _rows;
}

const getColumns = function(){
    return [
    {
      key: 'id',
      name: 'ID'
    },
    {
      key: 'title',
      name: 'Title'
    },
    {
      key: 'count',
      name: 'Count'
    }
    ]
}

function gridReducer(state = {
    status: "ok",
    isFetching: false,
    isScrolling: false,
    rows: getRows(1000),
    columns: getColumns()                   
}, action) {
  switch (action.type) {
    case types.GRID_STATUS_CHANGE:
      return Object.assign({}, state, {
        status: "ok"
      });
    case types.GRID_ROWS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });    
    case types.GRID_ROWS_RECEIVE_SUCCESS:
      return Object.assign({}, state, {
        rows: action.rows,
        isFetching: false
      });    
    default:
      return state
  }
}

export {gridReducer};
