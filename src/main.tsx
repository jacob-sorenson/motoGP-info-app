import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
// import { initializeApp } from 'firebase/app'
// import { firebaseConfig } from 'firebase/app'
import "./firebase";
import './index.css'
import App from './App.tsx'

// initializeApp(firebaseConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider> 
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
  </StrictMode>,
)
