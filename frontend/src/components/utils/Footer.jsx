import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='low:h-full lg:h-[40vh] footerbg flex low:flex-col lg:flex-row justify-between items-center text-white p-16'>
        <div>
            <img src='/logo.png' alt='logo' className='low:h-16 xl:h-20 low:mb-4 lg:mb-16'/>
            <p className='low:text-md max-lg:hidden'>© PESEvents all rights reserved</p>
        </div>
        <div>
            <div className='low:hidden lg:flex lg:text-xl'> 
                Quick Links
            </div>
            <div className='low:hidden lg:flex flex-row gap-10 lg:text-lg pt-4 cursor:pointer'>
                <Link to='/' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer'>Home</Link>
                <Link to='/upcoming' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer'>Events</Link>
                <Link to='/clubs' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer'>Clubs</Link>
                <Link to='/timeline' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer'>Timeline</Link>
                <Link to='/login' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer'>Log In</Link>
                <Link to='/login' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer'>Sign Up</Link>
            </div>
            <div className='low:text-xl pt-10 flex'>
                <p className='mr-2 -mt-[0.1rem] lg:hidden'>|</p>
                Contact Us
            </div>
            <div className='text-center flex low:flex-col items-start lg:flex-row low:gap-4 lg:gap-10 lg:text-lg pt-4 low:pb-12 lg:pb-0'>
                <p>pesevents@gmail.com</p>
                <p>+91 9632109324</p>
                <p>+91 9632109324</p>
            </div>
        </div>
        <div className='flex low:flex-row lg:flex-col items-center justify-center gap-6'>
            <img src='/Github.png' alt='Github' className='low:h-8 xl:h-11 cursor-pointer'/>
            <img src='/LinkedIn.png' alt='LinkedIn' className='low:h-6 xl:h-7 cursor-pointer rounded'/>
            <img src='/Instagram.png' alt='Instagram' className='low:h-6 xl:h-8 cursor-pointer'/>
            <img src='/Discord.png' alt='Discord' className='low:h-6 xl:h-8 cursor-pointer' />
        </div>
        <p className='low:text-sm lg:hidden pt-10 text-center'>© PESEvents all rights reserved</p>
    </div>
  )
}

export default Footer