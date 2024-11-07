/* eslint-disable react/prop-types */

// import { useState } from 'react'

import './App.css'

// import DonutChart from "../components/DonutChart";
import SmallMultiples from "../components/SmallMultiples";

import data from "../data/data.json";

function App() {
  
  const workingData = data.map(el => ({
    city: el.city,
    state: el.state,
    winTotal: el.wins,
    sports: [
      { name: 'mlb', value: el.MLB },
      { name: 'nfl', value: el.NFL },
      { name: 'nba', value: el.NBA },
      { name: 'nhl', value: el.NHL },
    ]
  }))
  console.log('workingData', workingData.length)

  return (
    <>
      {/* <DonutChart width={200} height={200} data={workingData[0]} /> */}
      <SmallMultiples data={workingData} />
    </>
  )
}

export default App
