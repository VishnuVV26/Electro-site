import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='md:flex md:justify-center md:items-center md:mt-10'>
    <div className='bg-yellow-500 w-72 md:w-96 md:h-[600px] h-80 m-10 rounded-md shadow-md shadow-slate-600'>
<form className='font-serif'>
<div className='flex justify-center items-center'>
    <h2 className='text-2xl font-serif font-medium mt-3'>SignUp</h2>
</div>
<div className='flex flex-col gap-3 p-5'>
<label>FirstName</label>
    <input 
    type='text'
    placeholder='FirstName'
    className='h-8 p-2 rounded-md'
    />
    <label>LastName</label>
    <input 
    type='text'
    placeholder='LastName'
    className='h-8 p-2 rounded-md'
    />
     <label>Email</label>
    <input 
    type='text'
    placeholder='Email'
    className='h-8 p-2 rounded-md'
    />
     <label>Mobile</label>
    <input 
    type='text'
    placeholder='Mobile Number'
    className='h-8 p-2 rounded-md'
    />
    <label>Password</label>
    <input 
    type='password'
    placeholder='Password'
    className='h-8 p-2 rounded-md'
    />
    <p className='font-sans'>Already have an account?<Link to='/login'><span className='text-red-500 hover:underline cursor-pointer hover:text-blue-600'>Login</span></Link> </p>
</div>
<div className='flex justify-center'>
    <button className='bg-slate-400 md:w-20 md:h-8 w-14 h-7 font-semibold rounded-sm cursor-pointer hover:bg-white'>SignUp</button>
</div>
</form>
    </div>
    </div>
  )
}

export default SignUp