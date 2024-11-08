/* eslint-disable react/prop-types */

import { useMemo } from 'react';

import * as d3 from 'd3';

const specs = {
  margin: {
    global: 20,
    x: 15,
    y: 5,
  },
  padding: 5,
};

const colorScale = d3.scaleOrdinal()
  // .domain(['mlb', 'nfl', 'nba', 'nhl'])
  .domain([0, 1, 2, 3])
  .range(['#ffd147', '#ff58ba', '#39aaff', '#0a0527'])

const LegendDonut = ({ keyProp, width, height, data }) => {
  // console.log('data', data)

  const radius = Math.min(width, height) / 2.4 - specs.margin.global;
  // console.log('radius', radius)

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    
    return pieGenerator(data.sports)
  }, [data]);
  // console.log('pie', pie)

  const arcPathGenerator = d3.arc();

  const shapes = pie.map((p, i) => {
    // console.log('p.value', p.value);

    const sliceInfo = {
      innerRadius: 15,
      outerRadius: radius,
      startAngle: p.startAngle,
      endAngle: p.endAngle
    };

    const centroid = arcPathGenerator.centroid(sliceInfo);
    // console.log('centroid', centroid)
    const slicePath = arcPathGenerator(sliceInfo);
    // console.log('slicePath', slicePath)

    const legendInfo = {
      innerRadius: radius + specs.padding,
      outerRadius: radius + specs.padding,
      startAngle: p.startAngle,
      endAngle: p.endAngle
    };

    const legendPoint = arcPathGenerator.centroid(legendInfo);
    // console.log('legendPoint', legendPoint)

    const isRightLabel = legendPoint[0] > 0;
    const labelX = legendPoint[0] + 3 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = `${p.data.name}-${(Math.round(p.data.value * 100)).toFixed(0)}%`;

    return (
      <g key={i}>
        <path d={slicePath} fill={colorScale(i)}/>
        {p.data.value !== 0 &&
          <circle cx={centroid[0]} cy={centroid[1]} r={1} />
        }
        {p.data.value !== 0 &&
        <line 
          x1={centroid[0]} 
          y1={centroid[1]} 
          x2={legendPoint[0]} 
          y2={legendPoint[1]} 
          stroke={'#000'} 
          fill={'#000'}
        />
        }
        {p.data.value !== 0 &&
        <line 
          x1={legendPoint[0]} 
          y1={legendPoint[1]} 
          x2={labelX} 
          y2={legendPoint[1]} 
          stroke={'#000'} 
          fill={'#000'}
        />
        }
        {p.data.value !== 0 &&
        <text 
          x={labelX + (isRightLabel ? 2 : -2)}
          y={legendPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline={'middle'}
          fontSize={9}
        >
          {label}
        </text>
        }
      </g>
    );

  }, [radius, pie]);
  // console.log('arcs', arcs)

  return (
    <svg key={keyProp} width={width} height={height} style={{display: "inline-block"}}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {shapes}
      </g>
      <text
        x={width / 3.2 + ((data.city).length / 2)}
        y={height - 3}
        fontSize={13}
        fontWeight={600}
      >
        {data.city} ({data.winTotal})
      </text>
    </svg>
  )
}
export default LegendDonut;