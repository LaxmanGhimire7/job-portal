import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './NavBar/Navigation'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path='home' element={<Home/>}   />
          <Route path='contact' element={<Contact/>}   />
        </Routes>
    </div>
  )
}

export default App
