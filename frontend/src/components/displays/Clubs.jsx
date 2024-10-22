import React from 'react'
import './displays.css'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import ClubCard from '../utils/ClubCard'
import clubData2 from '../utils/ClubData2'
import { Link } from 'react-router-dom'

const Clubs = () => {

    const clubData = clubData2

  return (
    <div>
        <Navbar />
        <div className='groundoftheback'>
            <div className='flex flex-row items-center justify-between text-white font-kara pt-[20vh] text-[3rem] lg:text-[5rem] mx-[5vw]'>
                <h1 className='max-lg:-mt-[30vh] max-lg:ml-4'>Clubs</h1>
                <div className='h-[6vh] w-[6vh] lg:h-[8vh] lg:w-[8vh] bg-black bg-opacity-40 rounded-2xl mt-2 lg:mt-6 hover:cursor-pointer'> 
                
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-[5vw] mt-[2rem] gap-[3vw] place-items-center'>
                {clubData.map((Event, index) => (
                    <ClubCard key={index} image={Event.logo} title={Event.name} description={Event.about} />
                ))}
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-[5vw] py-[15vh]'>
                <Link to='/upcoming' onClick={() => window.scrollTo(0, 0)} className='text-white lg:text-xl xl:text-2xl btn-clr rounded-xl px-10 py-2 mt-[2vh] xl:mt-[4vh] border hover:border-black font-thin'>Browse upcoming Events</Link>
                <Link to='/events' onClick={() => window.scrollTo(0, 0)} className='text-white lg:text-xl xl:text-2xl btn-clr rounded-xl px-14 py-2 mt-[2vh] xl:mt-[4vh] border hover:border-black font-thin'>Browse all Events</Link>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Clubs