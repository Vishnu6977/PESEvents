import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'

const Navbar = () => {
  return (
    <>
    <nav
    className='low:hidden lg:flex z-10 fixed top-0 left-0 w-full flex flex-row items-center justify-between px-20 py-6 transition-colors duration-300 ease-in-out bg-black text-white'>
    <Link to='/' onClick={() => window.scrollTo(0, 0)}> <img src='logo.png' className='h-10' alt='Logo' /> </Link>
    <div className='flex flex-row items-center justify-end gap-16 lg:text-md xl:text-xl font-thin'>
      <Link to='/' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer group transition duration-300'>
        Home
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
      </Link>


      <div
              onClick={() => window.scrollTo(0, 0)}
              className='relative cursor-pointer group transition duration-300'
            >
              Events
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
              
              <div className='absolute left-0 top-[94%] bg-white shadow-lg h-0 lg:group-hover:h-[6rem] xl:group-hover:h-[6.5rem] transition-all duration-300 delay-[250ms] overflow-hidden'>
                <ul className='py-2'>
                  <li>
                    <Link to='/upcoming' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link to='/events' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                      All Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


      <Link to='/clubs' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer group transition duration-300'>
        Clubs
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
      </Link>
      <Link to='/timeline' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer group transition duration-300'>
        Timeline
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
      </Link>
      <Link to='/login' className='navbtn rounded-2xl px-5 py-3 shadow-lg'>
        Get Started
      </Link>
    </div>
  </nav> 
  <div className='lg:hidden'>
    <Drawer />
  </div>
  </>
  )
}

export default Navbar