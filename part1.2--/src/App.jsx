
const Header = (props) => {
  return(
    <>
<h1>{props.course}</h1>
</>)
}

const Part = ({ title, exercises }) => <p>{title} {exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => {
        return <Part key={part.title} title={part.title} exercises={part.exercises}/>
      })}
    </div>
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce((prev, curr) => prev + curr.exercises, 0)
  return <p>Number of exercises {sum}</p>
}

const App = () => {
  const course =  'Half Stack Application Development',
     parts= [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      }
    ]
  

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App