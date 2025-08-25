import React from 'react'

function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">About Amazon</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Amazon is a global technology company that focuses on e-commerce, cloud computing, 
          digital streaming, and artificial intelligence. Founded in 1994 by Jeff Bezos, 
          Amazon started as an online bookstore and has now become one of the largest 
          marketplaces in the world.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our mission is to be Earth’s most customer-centric company, where people can find 
          and discover anything they might want to buy online, at the lowest possible prices. 
          We are committed to delivering convenience, quality, and innovation.
        </p>

        <div className="flex justify-center">
          <img
            src="https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc"
            alt="Amazon Office"
            className="rounded-lg shadow-md w-[500px]"
          />
        </div>
      </div>
    </div>
  )
}

export default About
