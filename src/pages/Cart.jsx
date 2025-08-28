import React from 'react'

function Cart({ cart }) {
  console.log("Cart data:", cart)

  return (
    <div className="bg-gray-900 flex flex-wrap justify-center items-center gap-10">
      { cart.map((item, index) => (
        <div
          key={index}
          className="h-auto w-44 bg-black rounded-2xl shadow-lg m-4 mb-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:cursor-pointer hover:shadow-gray-500 flex flex-col items-center hover:-translate-y-2"
        >
          <img
            className="object-cover overflow-hidden h-48 rounded-2xl w-full object-top"
            src={item.image}
            alt={item.title}
          />
          <h1 className="text-center text-lg font-semibold text-white">
            {item.title}
          </h1>
          <h1 className="text-center text-xs text-white">
            {item.description?.split(" ").slice(0, 10).join(" ")}...
          </h1>
          <span className="text-center text-white font-semibold">
            Quantity: {item.quantity}
          </span>
          <button
            className="bg-red-900 text-white px-2 py-0 rounded-lg my-1 hover:bg-red-950"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart
