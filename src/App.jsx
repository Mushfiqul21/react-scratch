import { useState } from 'react'
import './App.css'
import SignUpForm from './SignUpForm';
import { Link, Routes, Route } from 'react-router-dom';


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
function HomePage() {
  return (
    <h1>Homepage</h1>
  );
}
function AboutPage() {
  return (
    <h1>About page</h1>
  );
}
function App() {

  const name = "Mushfiqul Islam";
  const age = 25;
  const prof = "Full Stack Developer";
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <nav className='flex gap-3 mb-2 text-blue-950'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
