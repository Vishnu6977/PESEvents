import React, { useRef, useState, useEffect } from 'react';
import HomeUnder from './HomeUnder';
import './home.css';
import Navbar from './Navbar';

const Home = () => {
  const homeUnderRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHomeUnder = () => {
    homeUnderRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='h-screen'>
        {scrolled ? (
          <Navbar />
        ) : (
          <nav
            className={`fixed top-0 left-0 w-full flex flex-row items-center justify-end gap-16 text-white font-thin text-xl px-20 py-8 right-0 transition-all duration-500 ease-in-out ${
              scrolled ? 'bg-black/90 text-gray-200 py-6 shadow-lg' : 'bg-transparent text-white'
            }`}
          >
            <div className='cursor-pointer group transition duration-300'>
              Home
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'></span>
            </div>
            <div className='cursor-pointer group transition duration-300'>
              Events
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'></span>
            </div>
            <div className='cursor-pointer group transition duration-300'>
              Clubs
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'></span>
            </div>
            <div className='cursor-pointer group transition duration-300'>
              Timeline
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'></span>
            </div>
            <button className='bg-black rounded-2xl px-5 py-3 shadow-lg hover:bg-white hover:text-black transition duration-300'>
              Get Started
            </button>
          </nav>
        )}

        <div className='flex flex-row items-center justify-between mx-20 pt-[30vh]'>
          <div className='text-white font-thin text-xl max-w-[70vh]'>
            <img src='logo.png' className='h-40 mb-16' alt='logo' />
            <p>
              Whether you're organizing a PES event or attending one, our platform guarantees a smooth, efficient experience. Finding and registering for events has never been easier. We're here to simplify event management for everyone.
            </p>
          </div>
          <div>
            <img src='lorem.png' alt='image' className='w-[70vh]' />
          </div>
        </div>

        <div className='flex flex-row items-center justify-center'>
          <button
            onClick={scrollToHomeUnder}
            className='mt-[20vh] text-white font-thin bob flex flex-row items-center'
          >
            See More
            <img src='downarrow.png' className='h-[0.4rem] pl-2' />
          </button>
        </div>
      </div>

      <div ref={homeUnderRef}>
        <HomeUnder />
      </div>
    </>
  );
};

export default Home;
