/* eslint-disable react/prop-types */

import DonutChart from "../components/DonutChart";
import LegendDonut from "../components/LegendDonut";


const SmallMultiples = ({ data }) => {
  
  console.log('data', data)

  const groups = data.map(el => el.city);
  console.log('groups', groups);


  const legendData = {
    sports:[
      {name: 'mlb', value: 0.25},
      {name: 'nfl', value: 0.25},
      {name: 'nba', value: 0.25},
      {name: 'nhl', value: 0.25},
    ]
  }
  return (
    <div 
      style={{
        width: 1100,
        height: 800,
        display: 'grid',
        gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' 
      }}
    >
      {/* <DonutChart key={0} width={120} height={120} data={legendData} /> */}
      <LegendDonut key={0} width={120} height={120} data={legendData} />
      
      { data.map((datum, i) => ( <DonutChart key={i} width={120} height={120} data={datum} /> ))}
      
      {/* { data.map((datum, i) => ( <LegendDonut key={i} width={120} height={120} data={datum} /> ))} */}
    </div>
  )
}

export default SmallMultiples;
