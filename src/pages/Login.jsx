import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className='bg-gradient-to-r from-[#AA00FF] to-[#7200F5] w-full h-[37rem] p-5 flex justify-center items-center'>
      <div className='bg-white w-[28rem] h-[32rem] rounded-lg text-black flex flex-col items-center justify-center gap-4 p-5 relative'>
        <h1 className='text-5xl absolute top-10 font-bold'>Login</h1>
        <div className='flex gap-2 text-2xl items-center mt-15'>
          <label className='font-semibold'>Email: </label>
          <input type="email" name='uemail' className='outline-2 outline-amber-700 rounded'/>
        </div>
        <div className='flex gap-2 text-2xl items-center mt-5'>
          <label className='font-semibold'>Password: </label>
          <input type="password" name='upassword' className='outline-2 outline-amber-700 rounded'/>
        </div>
        <div className='flex flex-col justify-center items-center-safe gap-2 mt-10'>
          <button className='btn-fill-hollow text-white hover:text-black font-semibold hover:outline-4'>Login</button>
          <p>Don't have an account? Go to <Link className='font-semibold text-blue-800 hover:bg-amber-600 hover:text-white'>SignUp</Link> page.</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Login