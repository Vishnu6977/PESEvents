import React from 'react'
import EventPopup from './EventPopup'

const EventCard = (prop) => {
    
    const event = prop.event

    return (
      <div className='border border-[#c5c5c598] rounded-2xl min-h-[35vw] low:w-[35vh] sm:w-[35vw] lg:w-[28vw] xl:w-[26vw] flex flex-col bg-white shadow-xl overflow-hidden vp:font-thin'>
        <img src={event.image} alt='event' className='low:h-[20vh] lg:h-[15vw]' />
        <div className='p-6'>
          <h2 className='low:text-2xl lg:text-4xl'>{event.title}</h2>
          <p className='low:text-lg lg:text-2xl pt-4'>{event.description}</p>
        </div>
        <div className='flex items-center justify-center mt-8 mb-4'>
          <EventPopup event={event}/>
        </div>
      </div>
    )
  }

export default EventCard