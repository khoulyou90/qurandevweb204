import React from 'react'
import Header from './Componant/Ahadith'
import Ayate from './Componant/Ayate'
import { Routes,Route } from 'react-router-dom'
export default function Navbar() {
  return (
    <Routes>
    <Route path={"/Header"} element={<Header />}></Route>
    <Route path="/Ayate/:numbre" element={<Ayate />}></Route>
    
</Routes>

  )
}
