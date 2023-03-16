import { useState } from 'react'

const Button = ({handler, text}) => {
  return (<button onClick={handler}>{text}</button>)
}

const StatisticLine = ({text, score}) => {
  return (
    <tr>
      <td>{text} {score}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, clicked}) => {
  if (!clicked) return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
  const all = good+bad+neutral
  const average = (good-bad)/all
  const positive = good/all*100+ '%'
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>        
          <StatisticLine text='good' score={good}/>
          <StatisticLine text='neutral' score={neutral}/>
          <StatisticLine text='bad' score={bad}/>
          <StatisticLine text='all' score={all}/>
          <StatisticLine text='average' score={average}/>
          <StatisticLine text='positive' score={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicked, setClicked] = useState(false)

  const handler = (setStat, stat) => () => {
    setClicked(true)
    setStat(stat+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handler={handler(setGood, good)}/>
      <Button text='neutral' handler={handler(setNeutral, neutral)}/>
      <Button text='bad' handler={handler(setBad, bad)}/>
      <Statistics good={good} bad={bad} neutral={neutral} clicked={clicked}/>
    </div>
  )
}

export default App