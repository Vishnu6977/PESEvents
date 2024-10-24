import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import clubData2 from '../utils/ClubData2.js'
import eventData6 from '../utils/EventData6.js'
import EventCard from '../utils/EventCard'
import clubTags from '../utils/ClubTags.js'

const ClubPage = () => {

  const { club } = useParams()
  
  const clubData = clubData2.find((clubData) => clubData.name === club)
  const eventData = eventData6.filter(event => clubData.events.includes(event.title));

  return (
    <div className='bg-white'>
      <Navbar />
      <div className='lg:pt-[12vh]'>
        <div className='absolute bg-white h-[25vh] w-[25vh] rounded-full ml-[10vw] mt-[18vh] z-2 hidden lg:flex items-center justify-center'> <img src={clubData.logo} alt='club logo' className='h-[93%] w-[93%] bg-black rounded-full object-cover' /> </div>
        <div className='w-screen h-[30vh] -z-2 flex items-center justify-center'> <img src={clubData.banner} alt='club banner'  className='h-[30vh] w-full object-cover' /> </div>
        <div className='text-xl lg:text-3xl lg:font-thin lg:absolute text-black mt-[4vh] lg:right-[10vw] flex flex-col justify-center items-center'>
          <div className='bg-white h-[15vh] w-[15vh] rounded-full hidden max-lg:flex items-center justify-center mb-4'> <img src={clubData.logo} alt='club logo' className='h-[93%] w-[93%] bg-black rounded-full object-cover' /> </div>
          {clubData.tagline}
        </div>
        <div className='flex low:flex-col lg:flex-row mt-[10vh] lg:mt-[20vh] justify-between mb-[10vh] items-stretch'>

          <h1 className='text-4xl xl:text-5xl lg:font-thin text-center lg:hidden'>About</h1>
          <p className='text-xl xl:text-2xl lg:font-thin pt-[5vh] text-center lg:hidden mb-[10vh]'>{clubData.description}</p>

          <div className='lg:max-w-[70vw] lg:ml-[10vh] xl:ml-[16vh]'>
            <div className='text-black flex flex-col items-center lg:items-start lg:justify-start mb-[8vh]'>
              <h1 className='text-4xl xl:text-5xl lg:font-thin max-lg:pt-8'>Club Events</h1>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:mr-[6vw] xl:mr-[10vw] sm:gap-x-[10vw] gap-y-[5vh] place-items-center mb-[10vh] ${eventData && eventData.length === 0 ? 'w-[47vw]' : ''}`}>
              {eventData.map((Event, index) => (
                <EventCard key={index} image={Event.image} title={Event.title} description={Event.description} />
              ))}
            </div>
          </div>

          <div className='w-[0.1rem] bg-black rounded-full'></div>

          <div className='lg:max-w-[25vw] text-black flex flex-col items-center lg:items-start lg:justify-start mr-[10vh] ml-[5vh] text-start px-6 py-6'>
            <h1 className='text-4xl xl:text-5xl lg:font-thin max-lg:hidden'>About</h1>
            <p className='text-xl xl:text-2xl lg:font-thin pt-[5vh] max-lg:hidden'>{clubData.description}</p>
            <h2 className='text-4xl xl:text-5xl lg:font-thin py-[5vh]'>Tags</h2>

            <div className="flex flex-wrap gap-2">
              {clubData.tags.map((tag, index) => {
                const tagInfo = clubTags.find((clubTag) => clubTag.title === tag);

                return (
                  <Link to='/clubs'
                    onClick={() => window.scrollTo(0, 0)}
                    key={index} 
                    className={`px-4 py-2 rounded-full text-white ${tagInfo ? tagInfo.color : 'bg-gray-400'}`}
                  >
                    {tag}
                  </Link>
                );
              })}
            </div>

            <h1 className='text-4xl xl:text-5xl lg:font-thin mt-[6vh] mb-[4vh]'>Contact</h1>
            <div className="flex flex-wrap flex-col gap-2">
              {clubData.contact.map((contact, index) => (
                <span key={index}>
                  {contact}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ClubPage