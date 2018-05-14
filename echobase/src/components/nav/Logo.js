/* eslint-disable */
import React from 'react';
import headwinds from './headwinds.svg';

const Logo = props => {
  console.log(props);
  return (
    <div className="">
      <div className="">
        <a href={props.identity.link} rel="home">
          {' '}
          <img src={headwinds} width="100" />
        </a>
      </div>
      <div className="">
        <h1 className="">{props.identity.name}</h1>
        <h2 className="">{props.identity.slogan}</h2>
      </div>
    </div>
  );
};

export default Logo;
