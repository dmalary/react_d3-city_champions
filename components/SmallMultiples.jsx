/* eslint-disable react/prop-types */

import DonutChart from "../components/DonutChart";


const SmallMultiples = ({ data }) => {
  
  console.log('data', data)

  const groups = data.map(el => el.city);
  console.log('groups', groups);

  return (
    <div 
      style={{
        width: 1100,
        height: 800,
        display: 'grid',
        gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' 
      }}
    >
      { data.map((datum, i) => ( <DonutChart key={i} width={120} height={120} data={datum} /> ))}
    </div>
  )
}

export default SmallMultiples;
