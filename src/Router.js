import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Enterprise from './pages/Enterprise';
import Home from './pages/Home';
import Individuals from './pages/Individuals';
import Teams from './pages/Teams'

const Router = () => {
  return (
    <BrowserRouter>
    <NavBar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/individuals" element={<Individuals/>}/>
  <Route path="/teams" element={<Teams/>}/>
  <Route path="/enterprise" element={<Enterprise/>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default Router;