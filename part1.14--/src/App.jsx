import { useState } from 'react'
import './App.css'

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(anecdotes.map(() => 0))
  const [mostVoted,setMostVoted]=useState(0)

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleClickVote = () => {
    let newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)

    if(newVote[selected]> vote[mostVoted]){
      setMostVoted(selected)
    }
  }


  return (
    <div className='contenedor'>
      <div className='textos'>
        {anecdotes[selected]}
        <h3>This anecdote has: {vote[selected]}</h3>
      </div>
      <div className='botones'>
        <Button onClick={handleClick} text='next Anecdote' />
        <Button onClick={handleClickVote} text='Vote' />
      </div>
      <div className='mostVote'>
        <h3>Anecdote with most votes</h3>
        {anecdotes[mostVoted]}
        <h3>This anecdote has: {vote[mostVoted]}</h3>
      </div>
    </div>
  )
}

export default App
