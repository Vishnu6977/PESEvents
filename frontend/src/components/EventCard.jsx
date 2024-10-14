import React from 'react'

const EventCard = ({image, title, description}) => {
    return (
      <div className=' rounded-3xl min-h-[35vw] low:w-[35vh] lg:w-[25vw] flex flex-col bg-white shadow-xl overflow-hidden font-thin'>
        <img src={image} alt='event' className='low:h-[20vh] lg:h-[15vw]' />
        <div className='p-6'>
          <h2 className='low:text-2xl lg:text-4xl'>{title}</h2>
          <p className='low:text-lg lg:text-2xl pt-4'>{description}</p>
        </div>
        <div className='flex items-center justify-center mt-8 mb-4'>
          <button className='btn-clr rounded-xl low:w-[30vh] lg:w-[20vw] py-2 text-white font-sans shadow-2xl hover:border border-black'>Learn More</button>
        </div>
      </div>
    )
  }

export default EventCard