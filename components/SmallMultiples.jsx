/* eslint-disable react/prop-types */

// import DonutChart from "../components/DonutChart";
import LegendDonut from "../components/LegendDonut";

const chartSpecs = {
  width: 200,
  height: 140,
}

const SmallMultiples = ({ data }) => {
  // console.log('data', data)

  // const groups = data.map(el => el.city);
  // // console.log('groups', groups);

  const legendData = {
    sports:[
      {name: 'mlb', value: 0.25},
      {name: 'nfl', value: 0.25},
      {name: 'nba', value: 0.25},
      {name: 'nhl', value: 0.25},
    ],
    city: 'City',
    winTotal: 1,
  }
  return (
    <div className="chart-grid"
      style={{
        width: 1200,
        // height: 1000,
        display: 'grid',
        gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' 
      }}
    >
      {/* <DonutChart key={0} width={120} height={120} data={legendData} /> */}
      <LegendDonut key={0} width={chartSpecs.width} height={chartSpecs.height} data={legendData} />
      
      {/* { data.map((datum, i) => ( <DonutChart key={i} width={chartSpecs.width} height={chartSpecs.height} data={datum} /> ))} */}
      
      { data.map((datum, i) => ( <LegendDonut key={i} width={chartSpecs.width} height={chartSpecs.height} data={datum} /> ))}
    </div>
  )
}

export default SmallMultiples;
