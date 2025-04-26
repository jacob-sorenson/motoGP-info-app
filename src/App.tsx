import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/_login'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <div className="banner">
        <button className="hamburger-menu">☰</button>
        <h1 className="banner-heading">MotoGP Info</h1>
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/riders">Riders</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/circuits">Circuits</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<h2>Welcome to MotoGP Info</h2>} />
        <Route path="/riders" element={<h2>Riders</h2>} />
        <Route path="/login" element={<Login />} />
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
