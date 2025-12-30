import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import Home from './layout/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Home />
    <Footer />

  </StrictMode>,
)
