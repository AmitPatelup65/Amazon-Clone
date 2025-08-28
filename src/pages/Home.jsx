import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'

function Home({cart,setcart,data,setData}) {  
  const handle = (id) => {
    const updated = data.map(item =>
      item.id === id ? { ...item, count: !item.count } : item )

    setData(updated)
    const crt=data.find((item)=>item.id===id )
    if(crt){
      if(cart.find(item=>item.id===id)){
        setcart(cart.filter(item=>item.id!==id))
      }
      else{
        setcart([...cart,crt])
      }
    }
  }
  const increase=(id)=>{
    const x=data.map(item=>item.id===id?{...item,quantity:item.quantity+1}:item )
    setData(x)
  }
   const decrease=(id)=>{
    const z=data.map(item=>item.id===id && item.quantity > 0?{...item,quantity:item.quantity-1}:item )
    setData(z)
  }

  return (
    <>
      <div className="mt-10">
        <div className="p-5 mt-5 bg-white flex flex-wrap items-center justify-evenly">
          {data.map((elem, idx) => (
            <div
              key={idx}
              className="mb-6 ml-4 rounded-3xl bg-gray-100 p-2 h-[260px] w-[230px] flex flex-col justify-evenly items-center hover:scale-105 duration-500 hover:shadow-gray-900 shadow-md shadow-gray-600"
            >
              <img
                className="h-30 w-35 rounded-full object-contain hover:scale-90 shadow-md hover:shadow-gray-600"
                src={elem.image}
                alt=""
              />
              <h1 className="truncate w-36 text-black font-bold">
                {elem.title}
              </h1>
              <h1 className="text-black">{elem.category}</h1>
              <span className='flex gap-3  '>
                <button onClick={()=>decrease(elem.id)} className='h-5 w-8 border-1 rounded-md  active:scale-90 flex justify-center items-center '>-</button>
                <span className='text-center'>{elem.quantity}</span>
                <button onClick={()=>increase(elem.id)} className=' h-5 w-8 border-1 rounded-md  active:scale-90 flex justify-center items-center'>+</button>
              </span>
              <button
                onClick={() => handle(elem.id)}
                className={`h-7 w-28 rounded-lg active:scale-90 text-white ${
                  elem.count ? 'bg-green-600' : 'bg-yellow-700'
                }`}
              >
                {elem.count ? 'In Cart' : 'Add To Cart'}
              </button>
            </div>
          ))}
        </div>
       
        
         {/* <App cart={cart}></App> */}
      </div>
      
    </>
  )
}

export default Home
