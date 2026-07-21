import { useState } from 'react'
import './App.css'

function Greetings({name, age, prof})
{
  return <h1>Hello, world. I am {name}. I am {age}. I am a {prof}</h1>
}
function Tasks()
{
  const tasks = [
    { id: 1, title: "Coding" },
    { id: 2, title: "Lunch" },
    { id: 4, title: "Prayer" },
  ];
  return (
    <div>
 <h2 className='m-2'>My Tasks</h2>
      <ul className='m-3'>
        {tasks.map((task, index) => {
          return <li key={task.id}>{task.title}</li>
        })}
      </ul>
  </div>)
  
}
function App() {

  const name = "Mushfiqul Islam";
  const age = 25;
  const prof = "Full Stack Developer";
  return (
    <div>
      <Greetings name={name} age={age} prof={prof} />
      
      <Tasks />
    </div>
  )
}

export default App
