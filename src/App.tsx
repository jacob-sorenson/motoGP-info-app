import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/_Login'
import Drawer from './components/Drawer'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <div>
      
      <div className="banner">
        <button className="hamburger-menu" onClick={()=>setIsMenuOpen(true)} >☰</button>
        <h1 className="banner-heading">MotoGP Info</h1>
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
      </div>

      <div> 
        <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <ul className="p-4 space-y-2">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/riders" onClick={() => setIsMenuOpen(false)}>Riders</Link>
            </li>
            <li>
              <Link to="/teams" onClick={() => setIsMenuOpen(false)}>Teams</Link>
            </li>
            <li>
              <Link to="/circuits" onClick={() => setIsMenuOpen(false)}>Circuits</Link>
            </li>
          </ul>
        </Drawer>
      </div>

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
    </>
  )
}

export default App
