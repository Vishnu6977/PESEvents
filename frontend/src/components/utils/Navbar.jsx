import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
    className='low:hidden lg:flex z-10 fixed top-0 left-0 w-full flex flex-row items-center justify-between px-20 py-6 transition-colors duration-300 ease-in-out bg-black text-white'>
    <Link to='/'> <img src='logo.png' className='h-10' alt='Logo' /> </Link>
    <div className='flex flex-row items-center justify-end gap-16 lg:text-md xl:text-xl'>
      <Link to='/' className='cursor-pointer group transition duration-300'>
        Home
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
      </Link>
      <Link to='/upcoming' className='cursor-pointer group transition duration-300'>
        Events
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
      </Link>
      <Link className='cursor-pointer group transition duration-300'>
        Clubs
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
      </Link>
      <Link className='cursor-pointer group transition duration-300'>
        Timeline
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
      </Link>
      <Link to='/login' className='navbtn rounded-2xl px-5 py-3 shadow-lg'>
        Get Started
      </Link>
    </div>
  </nav>
  )
}

export default Navbar