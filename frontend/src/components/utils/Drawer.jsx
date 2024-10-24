import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="p-2 bg-black rounded-full h-12 w-12 lg:hidden" onClick={toggleDrawer}>
        <img src='/hamb.png' className=''/> 
      </button>

      <div
        className={`z-20 fixed top-0 right-0 w-64 h-full bg-gray-900 text-white p-5 transition-transform duration-300 ${
            isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}  
      >
        <Link to='/'> <img src='/logo.png' className='mt-6 h-8 mb-8' /> </Link>
        <button className='absolute top-[5vh] right-[5vw] h-12 w-12' onClick={toggleDrawer}>
            <img src='/x.png' className='h-4 ml-4'/>
        </button>
        <div className='flex flex-col items-start justify-end gap-4 lg:text-md xl:text-xl font-thin'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer group transition duration-300'>
              Home
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
            </Link>
            
            <Link
              to='/upcoming'
              onClick={() => window.scrollTo(0, 0)}
              className='relative cursor-pointer group transition duration-300'
            >
              Events
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
              
            </Link>

            <Link to='/clubs' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer group transition duration-300'>
              Clubs
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
            </Link>
            <Link to='/timeline' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer group transition duration-300'>
              Timeline
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
            </Link>
            <Link to='/login' onClick={() => window.scrollTo(0, 0)} className='navbtn rounded-2xl px-5 py-3 shadow-lg'>
              Get Started
            </Link>
          </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default Drawer;
