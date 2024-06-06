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
   
  let total=  good + neutral + bad
  console.log(total)

 let average= (good- bad) / total
console.log(average)

 let positive= (good * 100) /total
  


 const Statistics = ({text,data}) => {
  
return(
<>
<p>{text}={data}</p>
</>
)

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
        
        <h2>Statistics</h2>
        <div className='count'>
          <Statistics text= 'Average' data={average}/>
          <Statistics text='total' data={total}/>
          <Statistics text='positive 'data={positive}/>
        </div>
      </div>
    </>
  )
}
export default App