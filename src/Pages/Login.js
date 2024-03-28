import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

const[email,setEmail]=useState("")
const[password,setPassword]=useState('')


  return (
    <div className='md:flex md:justify-center md:items-center md:mt-10'>
    <div className='bg-yellow-500 w-72 md:w-96 md:h-96 h-80 m-10 rounded-md shadow-md shadow-slate-600'>
<form className='font-serif'>
<div className='flex justify-center items-center'>
    <h2 className='text-2xl font-serif font-medium mt-3'>Login</h2>
</div>
<div className='flex flex-col gap-3 p-5'>
<label>Email</label>
    <input 
    type='text'
    placeholder='Email'
    className='h-8 p-2 rounded-md'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <label>Password</label>
    <input 
    type='password'
    placeholder='Password'
    className='h-8 p-2 rounded-md'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <p className='font-sans'>Don't have an account?<Link to='/signup'><span className='text-red-500 hover:underline cursor-pointer hover:text-blue-600'>SignUp</span></Link> </p>
</div>
<div className='flex justify-center'>
    <button className='bg-slate-400 md:w-20 md:h-8 w-14 h-7 font-semibold rounded-sm cursor-pointer hover:bg-white'>Login</button>
</div>
</form>
    </div>
    </div>
  )
}

export default Login