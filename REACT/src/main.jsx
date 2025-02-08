import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Lancamento from './pages/Lancamento'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/lancamentos' element={<Lancamento />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
)
