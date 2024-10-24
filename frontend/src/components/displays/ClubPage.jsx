import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import clubData2 from '../utils/ClubData2'
import eventData6 from '../utils/EventData6'
import EventCard from '../utils/EventCard'

const ClubPage = () => {

  const { club } = useParams()

  const clubData = clubData2.find((clubData) => clubData.name === club)
  const eventData = eventData6.filter(event => clubData.events.includes(event.title));

  return (
    <div className='bg-white'>
      <Navbar />
      <div className='lg:pt-[12vh]'>
        <div className='absolute bg-white h-[25vh] w-[25vh] rounded-full ml-[15vw] mt-[18vh] z-2'> <img src={clubData.logo} className='h-[24vh] w-[24vh] pl-[1vh] pt-[1vh]' /> </div>
        <img src={clubData.banner}  className='w-screen h-[30vh] -z-2' />
        <p className='text-3xl font-thin absolute text-black right-[10vw] mt-[3vh]'>{clubData.tag}</p>
        <div className='text-black flex flex-col items-start justify-start mt-[20vh] mx-[20vh] text-start'>
          <h1 className='text-6xl font-thin'>About</h1>
          <p className='text-3xl font-thin pt-[5vh]'>{clubData.description}</p>
        </div>
        <div className='text-black flex flex-col items-start justify-start mx-[20vh] my-[10vh] text-start'>
          <h1 className='text-6xl font-thin'>Club Events</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-[5vw] mt-[2rem] gap-[3vw] place-items-center mb-[10vh]'>
          {eventData.map((Event, index) => (
            <EventCard key={index} image={Event.image} title={Event.title} description={Event.description} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ClubPage