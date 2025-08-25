import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='bg-emerald-800 py-4 flex justify-between items-center text-white fixed w-full top-0 left-0 z-50'>
         <Link to='/' className='ml-10 font-bold text-lg'>
        Amazon

      </Link>
      <input className='border-2 rounded-md' type="text" placeholder='Search Here' />
        <div className='space-x-12 mr-10'>
        <Link className='underline font-bold' to='/home'>Home</Link>
        <Link className='underline font-bold ' to='/about'>AboutUs</Link>
        <Link className='underline font-bold ' to='/contact'>ContactUs</Link>
        <Link className='underline font-bold ' to='/signin'>SignIn</Link>
        <Link className='underline font-bold ' to='/cart'>🛒 Cart</Link>
        </div>
    </div>

    </>
  )
}

export default Navbar