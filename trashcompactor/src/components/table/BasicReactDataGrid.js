/* eslint-disable */
/* to do: lint this file */

import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import * as grid_actions from '../../redux/actions/grid_actions';
import { connect } from 'react-redux';

class BasicReactDataGrid extends Component {

  constructor(props,context){
    super(props,context);
    this.state = this.props.grid;
    this.rowGetter = this.rowGetter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("BasicReactDataGrid componentWillReceiveProps nextProps: ", nextProps);
    
  }

  componentDidMount(){
    
  }

  componentDidUpdate(){

  }

  componentWillUpdate(){
    
  }

  componentWillMount(){

  }

  componentWillUnmount(){

  }

  rowGetter(i){
      return this.state.rows[i];
  };

  render(){
    //A rowGetter function is required by the grid to retrieve a row for a given index
    return(
        <ReactDataGrid
            columns={this.state.columns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            minHeight={200} />
    )
  }

}

BasicReactDataGrid.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  grid: state.grid,
});


const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweetsByLocation: () => {
      dispatch(grid_actions.fetchTweetsByLocation())
    },
    getTweets: () => {
      dispatch(grid_actions.getTweets())
    },    
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicReactDataGrid);