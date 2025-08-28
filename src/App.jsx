import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './Component/Navbar'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
const [cart, setcart] = useState([])
 

  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      const updatedData = response.data.map(item => ({ ...item, quantity: 0 })) 
 
   console.log(updatedData);
   
    setData(updatedData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    
    <div>
    
  
     <BrowserRouter>
       <Navbar ></Navbar> 
    <Routes>
       <Route path='/'element={<Home cart={cart} data={data} setcart={setcart} setData={setData} />}/>
       <Route path='/home'element={<Home cart={cart} data={data} setcart={setcart} setData={setData}/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/signin'element={<SignIn/>}/>
      <Route path='/cart'element={<Cart cart={cart} />}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App