import { Routes, Route, } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login/_Login'
// import { SignUp } from './pages/SignUp/_SignUp'
import { RaceEntryPage } from './pages/DataEntry/RaceEntryPage'
import { MotoGPTable } from './components/MotoGPTable'

function App() {


  return (
    <>
      <div>
        <Navbar />

        <div className='pt-16'>
          <Routes>
            <Route path="/" element={<h2>Welcome to MotoGP Info</h2>} />
            <Route path="/riders" element={<h2>Riders</h2>} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Signup" element={<SignUp />} /> */}
            <Route path="/enter-results" element={<RaceEntryPage />} />
          </Routes>
          <div>
            <div className="min-h-screen bg-gray-50">
              <header className="bg-white shadow p-4 mb-6">
                <h1 className="text-2xl font-bold">MotoGP Results</h1>
              </header>
              <main className="container mx-auto px-4">
              {/* Pass the season you want to display */}
                <MotoGPTable season="2025" />
              </main>
            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default App
