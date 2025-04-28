import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// import { initializeApp } from 'firebase/app'
// import { firebaseConfig } from 'firebase/app'
import "./firebase";
import './index.css'
import App from './App.tsx'

// initializeApp(firebaseConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
