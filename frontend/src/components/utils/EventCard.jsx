import React from 'react'

const EventCard = ({image, title, description}) => {
    return (
      <div className='border border-[#c5c5c598] rounded-2xl min-h-[35vw] low:w-[35vh] sm:w-[35vw] lg:w-[28vw] xl:w-[26vw] flex flex-col bg-white shadow-xl overflow-hidden vp:font-thin'>
        <img src={image} alt='event' className='low:h-[20vh] lg:h-[15vw]' />
        <div className='p-6'>
          <h2 className='low:text-2xl lg:text-4xl'>{title}</h2>
          <p className='low:text-lg lg:text-2xl pt-4'>{description}</p>
        </div>
        <div className='flex items-center justify-center mt-8 mb-4'>
          <button className='btn-clr rounded-xl low:w-[30vh] lg:w-[22vw] py-2 text-white font-sans shadow-2xl border border-white hover:border-black'>Learn More</button>
        </div>
      </div>
    )
  }

export default EventCard