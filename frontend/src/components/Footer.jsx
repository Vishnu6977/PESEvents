import React from 'react'

const Footer = () => {
  return (
    <div className='h-[40vh] footerbg flex flex-row justify-between items-center text-white p-16'>
        <div>
            <img src='logo.png' className='lg:h-16 xl:h-24 mb-16'/>
            <p>© PESEvents all rights reserved</p>
        </div>
        <div>
            <h2 className='lg:text-2xl xl:text-3xl'>Quick Links</h2>
            <div className='flex flex-row gap-10 lg:text-lg xl:text-xl pt-4 cursor:pointer'>
                <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>Events</p>
                <p className='cursor-pointer'>Clubs</p>
                <p className='cursor-pointer'>Timeline</p>
                <p className='cursor-pointer'>Log In</p>
                <p className='cursor-pointer'>Sign Up</p>
            </div>
            <h2 className='lg:text-2xl xl:text-3xl pt-10'>Contact Us</h2>
            <div className='flex flex-row gap-10 lg:text-l xl:text-xl pt-4'>
                <p>pesevents@gmail.com</p>
                <p>+91 9632109324</p>
                <p>+91 9632109324</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
            <img src='Github.png' alt='Github' className='lg:h-8 xl:h-11 cursor-pointer'/>
            <img src='LinkedIn.png' alt='LinkedIn' className='lg:h-6 xl:h-7 cursor-pointer'/>
            <img src='Instagram.png' alt='Instagram' className='lg:h-6 xl:h-8 cursor-pointer'/>
            <img src='Twitter.png' alt='Twitter' className='lg:h-6 xl:h-8 cursor-pointer' />
            <img src='Discord.png' alt='Discord' className='lg:h-6 xl:h-8 cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer