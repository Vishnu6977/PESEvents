import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({image, name, tag, description}) => {

    const title = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return (
      <div className='border border-[#C5C5C5] rounded-2xl min-h-[25vw] low:w-[35vh] sm:w-[35vw] lg:w-[30vw] xl:w-[28vw] flex flex-col bg-white shadow-xl overflow-hidden font-thin'>
        <img src={image} alt='event' className='low:h-[20vh] lg:h-[10vw] w-full object-cover ' />
        <div className='p-6'>
          <h2 className='low:text-2xl lg:text-4xl'>{title}</h2>
          <p className='low:text-lg lg:text-2xl pt-2'>{tag}</p>
          <p className='low:text-lg lg:text-2xl pt-1'>{description}</p>
        </div>
        <div className='flex items-center justify-center mt-2 mb-4'>
          <Link to={`/clubs/${name}`} onClick={() => window.scrollTo(0, 0)} className='btn-clr rounded-xl low:w-[30vh] lg:w-[22vw] py-2 text-white font-sans shadow-2xl border border-white hover:border-black text-center'>Learn More</Link>
        </div>
      </div>
    )
  }

export default EventCard