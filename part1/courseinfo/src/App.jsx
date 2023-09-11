 const Header = (props) => {
  return (
  <h1>{props.course}</h1> )
 }



 const Part = (props) => {
  return (
       <p>
        {props.part} {props.exercises}
      </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return  (
    <p>Number of exercises {props.sum1 + props.sum2 + props.sum3}</p>
  )
}





const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <div>
        <Content 
        part1= {part1.name} exercises1 = {part1.exercises} 
        part2= {part2.name} exercises2 = {part2.exercises} 
        part3= {part3.name} exercises3 = {part3.exercises} 
        />

      </div>

      <Total sum1={exercises1} sum2={exercises2} sum3={exercises3} />
    </div>
  )
}

export default App