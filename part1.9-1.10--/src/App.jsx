import { useState } from 'react'
import './App.css'
const Buttons = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  )
}

const Statistics = ({ text, data }) => {
  return (
    <>
      <p>{text}={data}</p>
    </>
  )
}

const Total = ({ good, neutral, bad }) => {
  const total = good + bad + neutral
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div className='compTotal'>
      <div className='count'>
        <Statistics text='good' data={good} />
        <Statistics text='neutral' data={neutral} />
        <Statistics text='bad' data={bad} />
      </div>
      <div className='count1'>
        <Statistics text='positive' data={(good * 100) / total} />
        <Statistics text='Average' data={(good - bad) / total} />
        <Statistics text='total' data={total} />
      </div>
    </div>)
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleClickGood = () => {

    setGood(good + 1)
  }

  const handleClickNeutral = () => {

    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {

    setBad(bad + 1)
  }

  let total = good + neutral + bad
  console.log(total)


  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <div className='boton'>
          <Buttons onClick={handleClickGood} text='Good' />
          <Buttons onClick={handleClickNeutral} text='Neutral' />
          <Buttons onClick={handleClickBad} text='Bad' />
        </div>

        <h2>Statistics</h2>
        <div className='count'>
          <Total good={good} neutral={neutral} bad={bad} />
        </div>
      </div>
    </>
  )
}
export default App