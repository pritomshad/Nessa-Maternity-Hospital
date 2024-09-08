import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import NavBar from './NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <NavBar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
