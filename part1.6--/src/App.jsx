import { useState } from 'react'
import './App.css'
const Buttons = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  )
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


  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <div className='boton'>
          <Buttons onClick={handleClickGood} text='Good' />
          <Buttons onClick={handleClickNeutral} text='Neutral' />
          <Buttons onClick={handleClickBad} text='Bad' />
        </div>
        <div className='count'>
          <p>Good =  {good}</p>
          <p>Neutral =  {neutral}</p>
          <p>Bad =  {bad}</p>
        </div>
      </div>
    </>
  )
}

export default App
