import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import About from './page/About/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h2>404 page not Found</h2>} />
      </Routes>
    </>
  )
}

export default App