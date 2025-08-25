import React from 'react'

function SignIn() {
  return (
    <div>
      <div className=' flex h-screen justify-center flex-col items-center'>
        <img className='h-40' src="https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc" alt="photo" />
        <h1 className='font-bold text-blue-600'>Sign In</h1>
        <input className='w-25 px-1 py-1 my-3 border-2 rounded-md' type="text" placeholder='Username' />
        <input className='w-25 px-1 py-1 border-2 rounded-md' type="password" placeholder='Password' />
      </div>
    </div>
  )
}

export default SignIn