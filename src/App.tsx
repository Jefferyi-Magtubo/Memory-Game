import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import './App.css'
import Menu from './pages/Menu'
import Game from './pages/Game'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='/game' element={<Game />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
