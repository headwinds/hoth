import React, {Component, PropTypes} from 'react';
//import * as actions from 'redux/actions/actions_projects';
import HothLegend from './legend/HothLegend';
import { connect } from 'react-redux';
/*
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';

import hothMapConfig from './hothMapConfig';

const MapboxClient = require('mapbox');
const client = new MapboxClient(hothMapConfig.token);

mapboxgl.accessToken = hothMapConfig.token;
*/

import './HothMap.css';


class HothMap extends Component {

  constructor(props){
    super(props);
    this.props = props;

  }

  componentWillMount(){

  }

  componentDidMount(){
    const lng =  '-79.406';
    const lat = '43.649';
    const zoom = '14.7';
    const name = 'contact';
    //this.loadMapboxMap(lng,lat,zoom,name)
  }

  componentDidUpdate(){

  }

  componentWillUpdate(){
    
  }
  
  componentWillUnmount() {
    
  }

  componentWillReceiveProps(nextProps) {
  
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.state !== this.props.state; 
  }

  
  loadMapboxMap = (lng, lat, zoom, name) => {
    // http://blog.getstream.io/cabin-react-redux-example-app-mapbox/

    /*

    mapboxgl.accessToken = hothMapConfig.token
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/stream/cinj7vvpfbbbib7mbzpyhkw39',
        center: [lng, lat],
        zoom: zoom,
    })

    map.on('load', function () {
        map.addSource('markers', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [lng, lat]
                    },
                    properties: {
                        title: name,
                        'marker-symbol': 'default_marker'
                    }
                }]
            }
        })

        map.addLayer({
            id: 'markers',
            type: 'symbol',
            source: 'markers',
            layout: {
                'icon-image': 'default_marker',
                'text-field': name,
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.6],
                'text-anchor': 'top'
            }
        })
    })
    */
  }

  render(){

    const mapBox = 'https://api.mapbox.com/styles/v1/headwinds/ciyn1k31l00692sp916zavx1e.html?title=true&access_token=pk.eyJ1IjoiaGVhZHdpbmRzIiwiYSI6ImNpeW4xZDUzeTAwMHIyd3Bnc2VtbHo3bTMifQ.yPjDOHvg9rv2e4-rjX8--g#14.5/43.648439/-79.406619/0';

    return(
      <div>
        <div className="legend">
          <HothLegend />
        </div>        
        <div className="map" id="map">
          <iframe src={mapBox} className="" />
        </div>
      </div>
    )
  }

}

Map.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  boilerplateState: state.boilerplateState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch:dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HothMap);