import React, {Component} from 'react';
import DragonDropship from './DragonDropship'; 
import { Link, browserHistory } from 'react-router';

// https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4
// https://bl.ocks.org/vijithassar/722f44dc4e5f892b33d5074f1a5bd99a

class LinkItem extends Component {
  
  constructor(props) {
    super(props)

    this.viewport = null;
    this.svg = null;
    this.link = null; 

    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
   
    this.draw();                    
  }

  draw(){
    this.link = new DragonDropship(this.viewport);     
  }

  render() {

    return (<div>
              <Link to={this.props.data.link}>{this.props.data.name}</Link>
              <div ref={ div => { this.viewport = div} }></div>
            </div>)
  }
}

export default LinkItem