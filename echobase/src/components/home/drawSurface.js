import * as d3 from 'd3';
import { interpolateHsvLong, hsv } from 'd3-hsv';
import { contours } from 'd3-contour';
import data from './volcano.json';

export function drawSurface(target, width, height, isMobile) {
  const getMars = () => {
    // Mars
    const i0 = interpolateHsvLong(hsv(21, 1, 0.65), hsv(24, 1, 0.9));
    const i1 = interpolateHsvLong(hsv(25, 1, 0.9), hsv(40, 1, 0.95));

    const interpolateTerrain = function(t) {
      return t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2);
    };
    const color = d3.scaleSequential(interpolateTerrain).domain([90, 190]);

    return color;
  };

  // Hoth
  const getHoth = () => {
    // i0 set
    const lightIceH = 179;
    const lightIceS = 0.18;
    const lightIceL = 1;

    const darkIceH = 188;
    const darkIceS = 0.18;
    const darkIceL = 0.9;

    // il set
    const darkerIceH = 196;
    const darkerIceS = 0.05;
    const darkerIceL = 0.95;

    const darkestIceH = 165;
    const darkestIceS = 0.09;
    const darkestIceL = 0.78;

    const i0 = interpolateHsvLong(
      hsv(lightIceH, lightIceS, lightIceL),
      hsv(darkIceH, darkIceS, darkIceL)
    );
    const i1 = interpolateHsvLong(
      hsv(darkestIceH, darkestIceS, darkestIceL),
      hsv(darkerIceH, darkerIceS, darkerIceL)
    );

    const interpolateTerrain = function(t) {
      return t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2);
    };
    const color = d3.scaleSequential(interpolateTerrain).domain([90, 190]);

    return color;
  };

  const terrain = data;

  const drawPlanet = (planet, terrain) => {
    const color = planet === 'mars' ? getMars() : getHoth();

    target
      .append('g')
      .attr('id', 'surface')
      .selectAll('path')
      .data(
        contours()
          .size([terrain.width, terrain.height])
          .thresholds(d3.range(90, 195, 5))(terrain.values)
      )
      .enter()
      .append('path')
      .attr('d', d3.geoPath(d3.geoIdentity().scale(width / terrain.width)))
      .attr('fill', d => {
        return color(d.value);
      });

    const y = isMobile ? 0 : -800;

    d3
      .select('#surface')
      .attr('transform', 'translate(0,' + y + ') scale(3,3)');
  };

  drawPlanet('hoth', terrain);

  /*
  d3.json(data).then(
    response => {
      const terrain = response;

      const drawPlanet = (planet, terrain) => {
        const color = planet === 'mars' ? getMars() : getHoth();

        target
          .selectAll('path')
          .data(
            contours()
              .size([terrain.width, terrain.height])
              .thresholds(d3.range(90, 195, 5))(terrain.values)
          )
          .enter()
          .append('path')
          .attr('d', d3.geoPath(d3.geoIdentity().scale(width / terrain.width)))
          .attr('fill', d => {
            return color(d.value);
          });
      };

      drawPlanet('hoth', terrain);
    },
    error => {
      if (error) throw error;
    }
  );
  */
}
