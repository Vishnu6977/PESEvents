import React, { useRef, useState, useEffect } from 'react';
import HomeUnder from './HomeUnder';
import './home.css';
import { Link } from 'react-router-dom';
import Drawer from '../utils/Drawer';

const Home = () => {
  const homeUnderRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
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
        <Drawer />
        <nav
          className={`low:hidden lg:flex z-10 fixed top-0 left-0 w-full flex flex-row items-center justify-between px-20 py-6 transition-colors duration-300 ease-in-out ${scrolled ? 'bg-black text-white' : 'bg-transparent text-white'
            }`}
        >
          {scrolled ? <Link to='/' onClick={() => window.scrollTo(0, 0)}> <img src='logo.png' className='h-10' alt='Logo' /> </Link> : <><h2></h2></>}
          <div className='flex flex-row items-center justify-end gap-16 lg:text-md xl:text-xl font-thin'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)} className='cursor-pointer group transition duration-300'>
              Home
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
            </Link>
            
            <div
              className='relative cursor-pointer group transition duration-300'
            >
              Events
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
              
              <div className='absolute left-0 top-[94%] bg-white shadow-lg h-0 lg:group-hover:h-[6rem] xl:group-hover:h-[6.5rem] transition-all duration-300 delay-[250ms] overflow-hidden'>
                <ul className='py-2'>
                  <li>
                    <Link to='/upcoming' onClick={() => window.scrollTo(0, 0)} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link to='/events' onClick={() => window.scrollTo(0, 0)} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
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
            <Link to='/login' onClick={() => window.scrollTo(0, 0)} className='navbtn rounded-2xl px-5 py-3 shadow-lg'>
              Get Started
            </Link>
          </div>
        </nav>


        <div className='flex flex-row items-center low:justify-center lg:justify-between mx-20 low:pt-[35vh] lg:pt-[30vh]'>
          <div className='text-white font-thin lg:text-lg xl:text-xl max-w-[70vh]'>
            <img src='logo.png' className='sm:h-28 lg:h-32 xl:h-40 low:mb-8 lg:mb-16' alt='logo' />
            <p className='low:hidden lg:flex text-left'>
              Whether you're organizing a PES event or attending one, our platform guarantees a smooth, efficient experience. Finding and registering for events has never been easier. We're here to simplify event management for everyone.
            </p>
            <div className='flex flex-col lg:hidden items-center justify-center'>
              <p className='text-center'>
                Events of PES
              </p>
              {/* <Link to='/getstarted' className='navbtn rounded-2xl px-8 py-3 shadow-lg mt-[10vh]'>
                Get Started
              </Link> */}
            </div>
          </div>
          <div className='low:hidden lg:flex'>
            <img src='lorem.png' alt='image' className='lg:w-[55vh] xl:w-[70vh]' />
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 flex flex-row items-center justify-center p-4'>
          <button onClick={scrollToHomeUnder} className='text-white font-thin bob flex flex-row items-center'>
            See More
            <img src='downarrow.png' alt='downarrow' className='h-[0.4rem] pl-2' />
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
