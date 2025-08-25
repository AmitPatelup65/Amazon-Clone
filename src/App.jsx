import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './Component/Navbar'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'

function App() {
  return (
    
    <div>
    
  
     <BrowserRouter>
       <Navbar></Navbar> 
    <Routes>
       <Route path='/'element={<Home/>}/>
       <Route path='/home'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/signin'element={<SignIn/>}/>
      <Route path='/cart'element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}

export default App