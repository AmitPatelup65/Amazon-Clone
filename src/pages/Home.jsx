import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setdata] = useState([])

  const getdata = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/')
    setdata(response.data)
    console.log(data);
  }
  const [first, setfirst] = useState([])
  const handle = (id) => {
    if (first.includes(id)) {
      setfirst(first.filter(itemId => itemId !== id))
    }
    else {
      setfirst([...first, id])
    }
  }
  useEffect(() => {
    getdata()
  }, [])

  return (
    <>
      <div className='mt-15 '>
        <div className=' p-5 mt-5 bg-white flex flex-wrap items-center justify-evenly'>
          {data.map(function (elem, idx) {
            return <div key={idx} className='mb-6 ml-4 rounded-3xl bg-black p-2 justify-evenly items-center flex flex-col  hover:scale-105 duration-500 hover:shadow-gray-500 shadow-md '>
              <img className='h-50 w-60 rounded-full hover:scale-80  hover:shadow-yellow-500 shadow-md' src={elem.image} alt="" />
              <h1 className='truncate w-36 text-white'>{elem.title}</h1>
              <h1 className='text-white'>{elem.category}</h1>
              <button onClick={() => handle(elem.id)} className={`p-3 rounded-lg active:scale-90 font-bold text-white 
                ${first.includes(elem.id) ? 'bg-green-600' : 'bg-blue-900'}`}>{first.includes(elem.id) ? "Added To Cart" : "Add to cart"}</button>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App     
