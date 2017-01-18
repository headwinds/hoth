import React from 'react';

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

  return ( 
    <div className="hud">
      <h1>{place}</h1>
      <h2>{latlong} </h2>
      <h2>{about}</h2>
    </div>
  );
}
