import React from 'react'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import Services from './Pages/Services'
import Footer from './Components/Footer'


function App() {

  return (
  <>
    <Router>
       
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path='/about'  element={<About/>}/>
        
      </Routes>
      <Footer/>
    </Router>
   </>
  
  )
}

export default App
