import { Routes, Route, } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login/_Login'
import { SignUp } from './pages/SignUp/_SignUp'

// remove eventually
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {


  return (
    <>
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<h2>Welcome to MotoGP Info</h2>} />
        <Route path="/riders" element={<h2>Riders</h2>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      </div>
    </>
  )
}

export default App
