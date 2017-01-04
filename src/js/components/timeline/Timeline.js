/* eslint-disable */
/* to do: lint this file */

import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import * as grid_actions from '../redux/actions/grid_actions';
import Moment from 'moment';
import { connect } from 'react-redux';

class Timeline extends Component {

  constructor(props,context){
    super(props,context);
    this.state = this.props.grid;
    this.rowGetter = this.rowGetter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Timeline componentWillReceiveProps nextProps: ", nextProps);
  }

  getToday(){
    const dateTime= '2016-05-02T00:00:00'
    Moment.locale('tr') //For Turkey
    const formattedDT = Moment(dateTime).format('d MMM') //2 May
    return(<div> {formattedDT} </div>)
  }

  componentDidMount(){
    

  componentDidUpdate(){

  }

  componentWillUpdate(){
    
  }

  componentWillMount(){

  }

  componentWillUnmount(){

  }

  render(){
    //A rowGetter function is required by the grid to retrieve a row for a given index
    return(
       { this.getToday() }
    )
  }

}

Timeline.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  grid: state.grid,
});


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);