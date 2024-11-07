/* eslint-disable react/prop-types */

import { useMemo } from 'react';

import * as d3 from 'd3';

const specs = {
  margin: {
    top: 20,
    bottom: 20,
    left: 50,
    right: 25,
    global: 20
  },  
};

const colorScale = d3.scaleOrdinal()
  // .domain(['mlb', 'nfl', 'nba', 'nhl'])
  // .range(['#26547C', '#EF476F', '#FFD166', '#06D6A0'])
  .domain([0, 1, 2, 3])
  .range(['#ffd147', '#ff58ba', '#39aaff', '#0a0527'])

const DonutChart = ({ key, width, height, data }) => {

  const radius = Math.min(width, height) / 2 - specs.margin.global;
  // console.log('radius', radius)

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    
    return pieGenerator(data.sports)
  }, [data]);
  // console.log('pie', pie)

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();

    return pie.map((p) => 
      arcPathGenerator({
        innerRadius: 20,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle
      })
    );
  }, [radius, pie]);
  // console.log('arcs', arcs)

  return (
    <svg key={key} width={width} height={height} style={{display: "inline-block"}}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          return <path key={i} d={arc} fill={colorScale(i)}/>
        })}
      </g>
    </svg>
  )
}
export default DonutChart;