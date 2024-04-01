import React, { useState } from 'react'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty, IoIosCart } from "react-icons/io";
import Logo from './Logo';

const Header = () => {

  // const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // const handleSearchInput = () => {
  //   setShowSearch(!showSearch)
  // }

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const Items = [
    { Name: 'Home', path: "/" },
    { Name: "Devices", path: "/devices" },
    { Name: "About", path: "/about" },
    { Name: "ContactUs", path: "/contact" }
  ]




  return (
    // Container
    <header className='bg-slate-300 md:p-5 p-2 flex gap-2 md:gap-4 md:h-auto h-24 items-center'>
            {/* Entire Div class */}
      <div className='flex md:gap-12 gap-2 items-center'>
        <div className='flex'>
           {/* Menu Icon */}
      <div className='flex items-center'>
        <button onClick={handleMenu} className='md:hidden'>
          <FiMenu className='text-2xl text-yellow-500' />
        </button>
      </div>
<Logo/>
        </div>

        {/* Desktop View and Mobile view Search bar */}
        <div className='py-2 relative'>
          <input type='text'
            placeholder='Search...'
            className='md:w-80 w-32 md:h-auto h-5 px-2 rounded-md pr-[2.5rem]'
          />
          <button className='p-2 inset-y-0 right-0 absolute'><FiSearch className='md:text-xl' /></button>
        </div>
        {/* Desktop view Header Menu */}
        <div className='pt-2 md:block hidden'>
          <ul className='flex gap-10 font-bold justify-center items-center font-serif text-yellow-600'>
            {Items.map((item, i) => (
              <Link to={item.path}><li key={i} className='cursor-pointer hover:scale-105 duration-75 hover:text-black'>{item.Name}</li></Link>
            ))}
          </ul>
        </div>
        {/* Mobile View */}

        {showMenu && (
          <div className='w-2/3 absolute bg-yellow-500 h-screen top-0 left-0 flex flex-col px-6 py-7 duration-300'>
            <button onClick={handleMenu} className='self-end'>
              <FiX className='text-2xl' />
            </button>
            <ul className='text-white font-serif font-bold'>
              {Items.map((item, i) => (
                <Link to={item.path}><li key={i} className='hover:text-black'>{item.Name}</li></Link>))}
            </ul>
<Link to='/login'><button className='bg-black w-16 font-serif text-white mt-6 hover:bg-white hover:text-black rounded-lg'>Login</button>
</Link>
          </div>
        )}

      </div>
      {/* Wishlist Icon */}
      <div className='items-center md:px-3'>
          <button className='mt-2 hover:scale-105 duration-75'>
            <IoIosHeartEmpty className='text-2xl text-yellow-600 hover:text-black' />
          </button>
        </div>
        {/* Cart Icon */}
      <div className='items-center md:px-2'>
        <button className='mt-2 hover:scale-105 duration-75'>
          <IoIosCart className='text-2xl text-yellow-600 hover:text-black' />
        </button>
      </div>
      {/* Login Button */}
      <div className='flex items-center px-20 mt-1'>
       <Link to='/login'> <button className='bg-yellow-600 w-16 font-serif md:block hidden text-white hover:bg-black rounded-lg'>Login
       </button>
       </Link>
      </div>
    </header>

  )
}

export default Header