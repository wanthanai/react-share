import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

export default () => ( 
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} />  
    </Routes>
)