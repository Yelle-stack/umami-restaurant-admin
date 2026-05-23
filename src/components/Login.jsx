import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md'>
          <h1 className='text-2xl'>Admin Login</h1>
          <form>
            <div>
              <p>Email Address</p>
               <input type="email" placeholder='Enter email' required/>
            </div>
            <div>
              <p>Password</p>
               <input type="password" placeholder='Enter Password' required/>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
