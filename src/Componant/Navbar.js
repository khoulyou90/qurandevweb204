import React from 'react'
import Ayate from './Componant/Ayate';
import { Routes,Route } from 'react-router-dom'
import Header from './Componant/Header';
export default function Navbar() {
  return (
    <Routes>
    <Route path="/Ayate/:nb" element={<Ayate />}></Route>
    <Route path="/" element={<Header />}></Route>

</Routes>

  )
}
