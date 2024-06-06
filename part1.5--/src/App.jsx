

function App() {

  const Header=({course})=>{
    console.log(course.name)
    return(
      <div>
        <h1>{course.name}</h1>
      </div>
    )  
  }
   const Part = ({ name, exercises }) => <p>{name} {exercises}</p> 

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => {
        return  <Part key={part.name} name={part.name} exercises={part.exercises} />
      })}
    </div>
  )
}

const Total = ({ course }) => {
  const suma = course.parts.reduce((prev, curr) => prev + curr.exercises, 0)
  return <p>Number of exercises {suma}</p>
}


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
     <Header course={course}/>
     <Content course={course}/>
     <Total course={course} />
    </div>
  )
}

export default App
