import React from 'react'
import Footer from './Footer'
import './home.css'

const EventCard = ({image, title, description}) => {
  return (
    <div className=' rounded-3xl min-h-[35vw] w-[30vw] flex flex-col bg-white shadow-xl overflow-hidden font-marv'>
      <img src={image} alt='event' className='h-[15vw]' />
      <div className='p-6'>
        <h2 className='text-4xl'>{title}</h2>
        <p className='text-2xl pt-4'>{description}</p>
      </div>
      <div className='flex items-center justify-center mt-8 mb-4'>
        <button className='btn-clr rounded-xl w-[25vw] py-2 text-white font-sans shadow-2xl hover:border border-black'>Learn More</button>
      </div>
    </div>
  )
}

const HomeUnder = () => {

  const eventData = [
    {
      image: './chords.jpg',
      title: 'Chords’24',
      description: 'Ninaada invites you to Chords’24, taking place on 30th October.'
    },
    {
      image: './chords.jpg',
      title: 'Chords’24',
      description: 'Ninaada invites you to Chords’24, taking place on 30th October.'
    },
    {
      image: './chords.jpg',
      title: 'Chords’24',
      description: 'Ninaada invites you to Chords’24, taking place on 30th October.'
    },

  ]

  return (
    <div className='bg-[#E5E5E5] h-full'>

      <div className='flex flex-col items-center lg:pt-[19vh] xl:pt-[17vh] pb-16'>
        <h1 className='font-kara text-6xl pb-12'>What We Offer</h1>  
        <div className='flex flex-row items-start justify-between gap-4 font-marv text-3xl'>
          <div className='max-w-[70vh]'>
            <h2>For Students</h2>
            <div className='border border-black rounded-xl px-4 py-4 mt-4 h-[25vh] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Easier registration process and Event Awareness</p>
              <p className='text-xl'>PESEvents is your centralized platform for all PES events. Stay informed about upcoming events, ensuring you never miss an opportunity to participate.</p>
            </div>
            <div className='border border-black rounded-xl px-4 py-4 mt-4 h-[25vh] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Learn about any PES Event or Club, also see a history of Events</p>
              <p className='text-xl'>Access comprehensive information about any PES event or club, including their history, gallery, and much more, all in one place.</p>
            </div>
          </div>
          <div className='max-w-[70vh]'>
          <h2>For Clubs</h2>
            <div className='border border-black rounded-xl px-4 py-4 mt-4 h-[25vh] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Streamlined Registrations and Statistics</p>
              <p className='text-xl'>Our easy registration process handles the complexities for you. We also provide feedback and statistics on interest levels and general opinions about the club.</p>
            </div>
            <div className='border border-black rounded-xl px-4 py-4 mt-4 h-[25vh] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Easier Marketing/PR and a recorded History of the Club </p>
              <p className='text-xl'>Provides a user-friendly way for individuals to learn about the club and its activities, fostering a deeper understanding of what the club does and its benefits.</p>
            </div>
          </div>
        </div>
      </div>
        

      <div className='flex flex-col items-center pb-24'>
        <h1 className='font-kara text-6xl pb-20'>Featured Events</h1>
        <div className='flex flex-row gap-10'>
          {eventData.map((Event, index) => (
            <EventCard key={index} image={Event.image} title={Event.title} description={Event.description} />
          ))}
        </div>
      </div>

      
      <div className='flex flex-col items-center justify-center orgteambg h-[60vh] mb-24'>
          <h1 className='font-lale text-white text-6xl'>Part of an Organising Team?</h1>
          <p className='text-white text-xl font-thin pt-6'>Get your Event/Club onto our site today!</p>
          <button className='btn-clr-2 rounded-xl py-4 px-6 text-white font-sans mt-12 shadow-2xl hover:border'>Get Started</button>
      </div>

        
      <div className='flex flex-col items-center pb-24'>
        <h1 className='font-kara text-6xl pb-20 '>Gallery</h1>
      </div>

      <Footer />

    </div>
  )
}

export default HomeUnder