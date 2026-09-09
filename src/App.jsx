import { useContext, useState } from 'react'
import './App.css'
import SignUpForm from './SignUpForm';
import { Link, Routes, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';


function Greetings({ name, age, prof }) {
  return <h1>Hello, world. I am {name}. I am {age}. I am a {prof}</h1>
}
function Tasks() {
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
    const {user} = useContext(AuthContext);

  return (
    <div>
      <h1>About page</h1>
      <h1>{user.name}</h1>
    </div>
  );
}
function LoginPage() {
  const [name, setName] = useState("");
    const {user, login} = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    login(name);
    console.log(name);
  }
  return (
    <div>
      <h1 className='my-4'>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function App() {

  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name)
  {
    setUser({ name: name, isAuth: true });
  }

  const name = "Mushfiqul Islam";
  const age = 25;
  const prof = "Full Stack Developer";
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <nav className='flex gap-5 mb-2 text-blue-950 border-b-2'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
      <AuthContext.Provider value={{ user, login }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
