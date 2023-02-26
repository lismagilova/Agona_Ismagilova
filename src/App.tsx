import React from 'react'
import './App.module.sass'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/header/navbar'
import { Main } from './components/main/main'
import { Info } from './components/footer/info'


function App() {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path='/ecomarket' element={<Main/>}/>
          </Routes>
          <Info />
      </>
  )
}

export default App;