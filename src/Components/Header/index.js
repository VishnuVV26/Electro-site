import React, { useState } from 'react'
import Logo from './Logo'
import { IoIosHeartEmpty, IoIosCart } from 'react-icons/io'
import { FiSearch, FiX } from 'react-icons/fi'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Items = [
    { Name: 'Home', path: "/" },
    { Name: "Shop", path: "/devices" },
    { Name: "Products", path: "/about" },
    { Name: "ContactUs", path: "/contact" }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    // Whole Header Container
    <header className="bg-slate-300 flex flex-col">
      {/* Top Header */}
      <div className='bg-slate-200 p-3 flex justify-between'>
        {/* Top left */}
        <div className='flex md:flex-row flex-col md:gap-8'>
          <p className='md:text-sm text-[8px] font-medium '>Phone :<span>+01 234 56 789</span></p>
          <p className='md:text-sm text-[8px] font-medium'>Email :<span>electrocity123@gmail.com</span></p>
        </div>
        {/* Top right */}
        <div className='flex gap-5'>
          <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
            alt='' className='w-6 h-6 cursor-pointer' />
          <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
            alt='' className='w-6 h-6 cursor-pointer' />
          <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
            alt='' className='w-6 h-6 cursor-pointer' />
        </div>
      </div>
      {/* Main Header */}
      <div className='flex items-center justify-between gap-5 p-5'>
        {/* Menu icon in mobile view */}
        <div className='md:hidden block'>
          <button onClick={toggleMenu}>
            <HiMenu className='text-2xl' />
          </button>
        </div>
        {/* Logo */}
        <div className=''>
          <Logo />
        </div>
        {/* Menu view in desktop */}
        <div className='md:flex gap-10 list-none text-md font-semibold hidden'>
          {Items.map((item, index) =>
            <Link to={item.path}><li key={index} className='hover:text-yellow-500 cursor-pointer'>{item.Name}</li>
            </Link>
          )}
        </div>
        {/* Menu in the Mobile view */}

        {isMenuOpen && (
          <div className='w-1/2 bg-slate-500 top-28 left-0 h-screen absolute p-7'>
            <ul className='text-md font-medium text-white'>
              {Items.map((item, index) => (
               <Link to={item.path} ><li key={index} className='hover:text-black'>{item.Name}</li></Link>
              ))}
            </ul>
          </div>
        )}

        {/* Search Bar */}
        <div className='relative hidden md:flex'>
          <input type='text'
            placeholder='Search...'
            className='md:w-80 w-32 md:h-auto h-5 px-2 rounded-md pr-[2.5rem]'
          />
          <button className='p-2 -inset-y-2 right-0 absolute'><FiSearch className='md:text-xl' /></button>

        </div>
        {/* icons cart,login and wishlist */}
        <div className='flex gap-5'>
         <Link to={'/wishlist'}>
          <button className='mt-2 hover:scale-105 duration-75'>
            <IoIosHeartEmpty className='text-2xl text-black hover:text-yellow-500' />
          </button></Link> 
          <Link to={'/cart'}>
          <button className='mt-2 hover:scale-105 duration-75'>
            <IoIosCart className='text-2xl text-black hover:text-yellow-500' />
          </button>
          </Link>
         <Link to={'/login'}>
         <button className='mt-2 hover:scale-105 duration-75'>
            <FaUser className='text-xl text-black hover:text-yellow-500' />
          </button>
          </Link> 
        </div>
      </div>

    </header>
  )
}

export default Header






































































