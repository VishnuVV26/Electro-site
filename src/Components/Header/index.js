import React, { useState } from 'react'
import {FiSearch,FiX} from 'react-icons/fi'
const Header = () => {

const[showSearch,setShowSearch]=useState(false);

const handleSearchInput=()=>{
  setShowSearch(!showSearch)
}

  return (
    // Container
    <header className='bg-slate-300 p-5'>
      {/* Entire Div class */}
       <div className='flex md:gap-20 gap-9'>
<div>
  <h1 className='md:text-3xl text-xl text-yellow-500 font-serif font-bold'>E<span className='text-black'>lectro</span>City</h1>
</div>

{/* Desktop View */}
<div className='py-2 relative md:block hidden'>
  <input type='text'
  placeholder='Search...'
  className='w-80 px-2 rounded-sm pr-[2.5rem]'
  />
  <button className='p-2 inset-y-0 right-0 absolute'><FiSearch className='text-xl'/></button>
</div>

{/* Mobile view */}
<div className='md:hidden p-1'>
        {/* Show search icon if search input field is not visible */}
        {!showSearch && (
          <button onClick={handleSearchInput} className=''>
            <FiSearch className='text-xl' />
          </button>
        )}

        {/* Show close icon and input field if search input field is visible */}
        {showSearch && (
          <div className="flex">
            <input
              type='text'
              placeholder='Search...'
              className='w-44 px-2 rounded-sm pr-[2.5rem]'
            />
            <button onClick={handleSearchInput} className="ml-2">
              <FiX className='text-xl' />
            </button>
          </div>
        )}
      </div>

</div>
    </header>
   
  )
}

export default Header