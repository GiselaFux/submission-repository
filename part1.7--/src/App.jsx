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
/*   const [total, setTotal]=useState(0) */


  const handleClickGood = () => {

    setGood(good + 1)
  }

  const handleClickNeutral = () => {

    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {

    setBad(bad + 1)
  }
   
  let total= good + neutral + bad
  console.log(total)

 let average=(good-bad) /total
 let positive= (good * 100) /total
  
console.log(positive)

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
        <div className='count'>
          <p >All= {total} </p>
          <p>Average= {average} </p>
          <p>Positive= {positive}</p>
        </div>
      </div>
    </>
  )
}

export default App
