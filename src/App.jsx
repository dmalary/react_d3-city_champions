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
        <h1>What city has won the most sports championships?</h1>
        <p>Using data from <a href="https://www.britannica.com/topic/Professional-Sports-Championships-by-City-2228259">Encyclopedia Britannica</a>, I built a small multiples donut chart, to evaluate what North American City has won the most champpionships, within the four major sports (baseball, football, basketball, hockey).</p>
        <p>Please note, this counts all championships (eg: Cleveland won 9 football championships before the SuperBowl Era).</p>
      </div>
      <SmallMultiples data={workingData} />
    </>
  )
}

export default App
