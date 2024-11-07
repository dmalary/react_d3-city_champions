import './App.css'

import SmallMultiples from "../components/SmallMultiples";

import data from "../data/data.json";

function App() {
  
  const workingData = data.map(el => ({
    city: el.city,
    state: el.state,
    winTotal: el.wins,
    // sports: [
    //   { name: 'mlb', value: el.MLB },
    //   { name: 'nfl', value: el.NFL },
    //   { name: 'nba', value: el.NBA },
    //   { name: 'nhl', value: el.NHL },
    // ]
    sports: [
      { name: 'mlb', value: el.MLB / el.wins },
      { name: 'nfl', value: el.NFL / el.wins },
      { name: 'nba', value: el.NBA / el.wins },
      { name: 'nhl', value: el.NHL / el.wins },
    ]
  }))
  // console.log('workingData', workingData.length)

  return (
    <>
      <div className='annotation-layer'>
        <h1>Title</h1>
        <p>summary</p>
      </div>
      <SmallMultiples data={workingData} />
    </>
  )
}

export default App
