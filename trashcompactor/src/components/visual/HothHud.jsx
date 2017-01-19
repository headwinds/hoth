import React from 'react';
import expand from './expand.svg';

require('./hud.scss');

export default function HothHud() {
  
  /*
  var [ hours, minutes, seconds ] = [
    props.hours,
    props.minutes,
    props.seconds
  ].map(num => num < 10 ? '0' + num : num);
  <h1>{ hours } : { minutes } : { seconds }</h1>
  */

  const place = 'Antartica'.toUpperCase();

  const latlong = '72°00′43.5″S 2°31′56″E';
  const where = 'Queen Maud Land'.toUpperCase();
  const base = 'Troll Station'.toUpperCase();
  const about = base + " " + where;
  const temp =  '−60 °C (−76 °F) and wind speeds of 60 meters per second (200 ft/s)'
  const pop = 8;
  const measures = 'measures aerosols, organic and inorganic pollution, ozone and ultraviolet (UV) radiation ozone depletion and the Antarctic ozone hole.[6]';

  const expand = () => {

  }; 

  return ( 
    <div className="hud">
      <div className="textContainer">
      <h1>{place}</h1>
      <h2>{latlong} </h2>
      <h2>{about}</h2>
      </div>
      <div className="controlsContainer">
        <button onClick={ expand() }> <img src={expand} className="App-logo" alt="logo" /></button>
      </div>
    </div>
  );
}
