import { useState } from 'react'
import './App.css'

function Greetings({name, age, prof})
{
  return <h1>Hello, world. I am {name}. I am {age}. I am a {prof}</h1>
}
function App() {

  const name = "Mushfiqul Islam";
  const age = 25;
  const prof = "Full Stack Developer";
  return (
    <div>
      <Greetings name={name} age={age} prof={prof}/>
    </div>
  )
}

export default App
