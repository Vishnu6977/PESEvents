import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed right-0 w-full bg-black h-[12vh] flex flex-row items-center justify-between'>
        <img src='logo.png' className='h-10 px-20' />
        <div className='flex flex-row items-center justify-end gap-16 text-white font-thin text-xl px-20 py-6'>
            <div className='cursor-pointer group transition duration-300 hover:cursor-pointer text-white'>
              Home
              <span className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
            </div>
            <div className='cursor-pointer group transition duration-300 hover:cursor-pointer text-white'>
              Events
              <span className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
            </div>
            <div className='cursor-pointer group transition duration-300 hover:cursor-pointer text-white'>
              Clubs
              <span className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
            </div>
            <div className='cursor-pointer group transition duration-300 hover:cursor-pointer text-white'>
              Timeline
              <span className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white`}></span>
            </div>
            <button className='bg-white rounded-2xl px-5 py-3 text-black'>
              Get Started
            </button>
          </div>
    </nav>
  )
}

export default Navbar