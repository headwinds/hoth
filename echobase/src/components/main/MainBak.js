import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="map">
          <h1>Toronto vs Northern Life</h1>
          <h2>March 17/2018</h2>
          <p>
            This is me openly planning to do a new signature piece to showcase
            how I would approach a big data visualization. I just need to find
            the time to execute it. So, for now, I thought I would post my
            process on how I would begin as something is better than nothing
            right?!
          </p>
          <p>
            I{`'`}m currently a frontend developer at{' '}
            <a
              href="https://qochealth.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#999',
                color: 'white',
                padding: '0px 5px'
              }}
            >
              QoC Health
            </a>. I primarily write React/Redux against a Spring Java/MS SQL
            backend but, on my last project, I was able to do some fullstack
            work using Firebase to store the behavioral analytics for
            <a
              href="https://mythoughtspot.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#999',
                color: 'white',
                padding: '0px 5px'
              }}
            >
              Thoughtspot
            </a>, a responsive (desktop & mobile) app for CAMH.
          </p>
          <p>
            Previously, I worked at 24-7 INC on analytics app,{' '}
            <a
              href="https://www.youtube.com/watch?v=5KZofZX3XaY"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#999',
                color: 'white',
                padding: '0px 5px'
              }}
            >
              Voices
            </a>, that tracked customer insights and trends.
          </p>
          <p>
            Now back to this personal project. While rearching public data sets,
            I stumbled across the{' '}
            <a
              href="https://en.wikipedia.org/wiki/Northern_Ontario_Ring_of_Fire"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#999',
                color: 'white',
                padding: '0px 5px'
              }}
            >
              Ring of Fire
            </a>
            which simply sounds cool (Johnny Cash and Tolkien). It is a mining
            area in our far North. Since I am a fan of{' '}
            <a
              href="https://www..com/tv-shows/gold-rush/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#999',
                color: 'white',
                padding: '0px 5px'
              }}
            >
              Discovery's Gold Rush,
            </a>{' '}
            I thought I would like data involving mining closer to home but it
            still rather remote.
          </p>
          <p>
            While our beloved Raptors fans proudly chant 'We the North' to our
            American neighbors, Toronto is actually quite southern compared to
            Thunder Bay or Kenora. I would like to explorate the similarities
            and differences through a large data set to better understand the
            Canadian landscape.
          </p>
          <p>
            In the meantime, you can follow me on{' '}
            <a
              href="https://twitter.com/headwinds"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#999',
                color: 'white',
                padding: '0px 5px'
              }}
            >
              Twitter
            </a>{' '}
            or checkout my{' '}
            <a
              href="https://github.com/headwinds"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#999',
                color: 'white',
                padding: '0px 5px'
              }}
            >
              Github
            </a>{' '}
            or better yet...
          </p>
          <h2>Champions of Data Visualization</h2>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.visualcinnamon.com/tron.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#999',
                    color: 'white',
                    padding: '0px 5px'
                  }}
                >
                  Nadieh Bremer
                </a>{' '}
              </li>
              <li>
                <a
                  href="http://rachelbinx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#999',
                    color: 'white',
                    padding: '0px 5px'
                  }}
                >
                  Rachel Binx
                </a>{' '}
              </li>
              <li>
                <a
                  href="https://beta.observablehq.com/collection/visualization"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#999',
                    color: 'white',
                    padding: '0px 5px'
                  }}
                >
                  Mike Bostock
                </a>{' '}
              </li>

              <li>
                <a
                  href="https://www.ted.com/talks/jer_thorp_make_data_more_human"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#999',
                    color: 'white',
                    padding: '0px 5px'
                  }}
                >
                  Jer Thorp
                </a>{' '}
              </li>
              <li>
                <a
                  href="https://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#999',
                    color: 'white',
                    padding: '0px 5px'
                  }}
                >
                  David McCandless
                </a>{' '}
              </li>
              <li>
                <a
                  href="http://feltron.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#999',
                    color: 'white',
                    padding: '0px 5px'
                  }}
                >
                  Nick Felton
                </a>{' '}
              </li>
            </ul>
          </div>

          <h2>Design Goals</h2>
          <ul>
            <li>
              lead with a strong data visualization mining at least a 100,000
              data points
            </li>
            <li>Play with color, icons, and cartography</li>
            <li>Explore how Machine Learning and NLP could help classify</li>
          </ul>
          <h2>Dev Goals</h2>
          <ul>
            <li>architect a few routes and sub routes</li>
            <li>try out css in jsx</li>
            <li>talk to python and classify data to show insights</li>
            <li>no eslint warnings</li>
            <li>experiment with server side rendering</li>
            <li>get better at e2e testing</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
  location: ownProps.location
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
