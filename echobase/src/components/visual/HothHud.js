import React from 'react';
import expandIcon from './expand.svg';
import styles from './hud.css';

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
  const about = base + ' ' + where + ' population 8';
  const temp =  '−60 °C (−76 °F) and wind speeds of 60 meters per second (200 ft/s)'
  const measures = 'measures aerosols, organic and inorganic pollution, ozone and ultraviolet (UV) radiation, ozone depletion and the Antarctic ozone hole';

  const expand = () => {

  }; 

  return ( 
    <div className={styles.hud}>
      <div className={styles.hud_textContainer}>
        <h1 className={styles.hud_title}>{place}</h1>
        <h2 className={styles.hud_subTitle}>{about}</h2>
        <h2 className={styles.hud_subTitle}>{temp} </h2>
        <h2 className={styles.hud_subTitle}>{latlong}</h2>
        <p className={styles.hud_message}>{measures}</p>
      </div>
      <div className={styles.controlsContainer}>
        <button onClick={ expand() }> <img src={expandIcon} alt="expand" /></button>
      </div>
    </div>
  );
}
