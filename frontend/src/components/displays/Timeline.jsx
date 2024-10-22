import React from 'react';
import './displays.css';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';

const Timeline = () => {
  return (
    <>
    
      <div className="flex flex-col vp:items-center groundoftheback">
        
        <Navbar />

        <div className="flex-grow text-white">
          <div className="vp:text-center max-vp:pt-[5vh] max-vp:pl-6 pt-[20vh] pb-32">
            <p className="text-5xl md:text-8xl font-kara">The Events Timeline</p>
          </div>
          <Timelinedate Date="October, 2024" />
          <Righttimelinecomp 
            eventname="Chords' 24" 
            clubname="Ninaada" 
            description="Ninaada invites you to Chords'24, taking place on 30th October." 
          />
          <Lefttimelinecomp 
            eventname="Harmony Fest" 
            clubname="Music Club" 
            description="Join us for a musical journey at Harmony Fest on 10th November." 
          />
          <Timelinedate Date="October, 2024" />

          <div className="max-w-11 max-h-11 mx-auto max-lg:hidden">
            <div className="bg-white w-10 h-10 rounded-full mx-auto" style={{marginTop: '-1rem'}}></div>
          </div>
          <div className="bg-white w-8 h-8 rounded-full ml-[10vw] lg:hidden" style={{marginTop: '-1rem'}}></div>

        </div>

        <div className="py-16 pt-24 text-center text-white">
          <p>Contact Us for any changes/queries.</p>
        </div>

      </div>

      <Footer />

    </>
  );
}

function Righttimelinecomp({ eventname, clubname, description }) {
  return (
    <>
      <div className='max-lg:hidden'>
        <div className="low:flex lg:flex flex-auto relative justify-center md:ml-96 space-x-16">
          <div className="max-h-11 max-w-11">
            <div className="bg-white w-10 h-10 rounded-full mx-auto" style={{marginTop: '-1rem'}}></div>
          </div>
          <Timelinecard eventname={eventname} clubname={clubname} description={description} />
        </div>
        <div className="max-w-2 min-h-64 mx-auto">
          <div className="bg-white h-64 w-2 mt-0 mx-auto" style={{marginTop: '-10rem'}}></div>
        </div>
      </div>
      <div className='flex flex-row lg:hidden'>
          <div className='flex flex-col ml-[10vw]'>
            <div className='bg-white w-8 h-8 rounded-full -mb-1 -mt-1'></div>
            <div className='bg-white h-48 w-2 mt-0 ml-[0.775rem]'></div>
          </div>
          <div className='text-white font-bold ml-[8vw] -mt-3'>
            <Timelinecard eventname={eventname} clubname={clubname} description={description} />
          </div>
      </div>
    </>
  );
}

function Lefttimelinecomp({ eventname, clubname, description }) {
  return (
    <>
      <div className='max-lg:hidden'>
        <div className="flex flex-auto justify-center relative space-x-16" style={{marginLeft: '-385px'}}>
          <Timelinecard eventname={eventname} clubname={clubname} description={description} />
          <div className="max-h-11 max-w-11">
            <div className="bg-white w-10 h-10 rounded-full" style={{marginTop: '-1rem'}}></div>
          </div>
        </div>
        <div className="max-w-2 min-h-64 mx-auto">
          <div className="bg-white h-64 w-2 mt-0 mx-auto" style={{marginTop: '-10rem'}}></div>
        </div>
      </div>
      <div className='flex flex-row lg:hidden'>
          <div className='flex flex-col ml-[10vw]'>
            <div className='bg-white w-8 h-8 rounded-full -mb-1 -mt-1'></div>
            <div className='bg-white h-48 w-2 mt-0 ml-[0.775rem]'></div>
          </div>
          <div className='text-white font-bold ml-[8vw] -mt-3'>
            <Timelinecard eventname={eventname} clubname={clubname} description={description} />
          </div>
      </div>
    </>
  );
}


const Timelinecard = ({ eventname, clubname, description }) => {
  return (
    <>
      <div className="rounded-2xl bg-white overflow-hidden hidden lg:flex flex-col min-h-44 max-w-80 w-full p-4 shadow-lg">
        <div className="text-black flex justify-between mb-2">
          <div className="text-left">
            <p className="font-semibold">{eventname}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{clubname}</p>
          </div>
        </div>
        <div className="text-left">
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex items-center justify-center mt-auto">
          <button className="btn-clr rounded-xl w-full lg:w-[28vw] py-2 text-white font-sans shadow-2xl transition-all hover:border border-black">
            Learn More
          </button>
        </div>
      </div>
      <div className='flex flex-row lg:hidden mt-8'>
          <div className='text-black bg-white rounded-2xl px-4 py-4 font-bold -mt-3 flex flex-col max-vp:min-w-[69vw] vp:w-[18rem] h-40'>
              <div className="flex flex-col vp:flex-row vp:items-center justify-between">
                <p className="font-semibold text-xl">{eventname}</p>
                <p className="font-semibol text-xl">{clubname}</p>
              </div>
              <p className="text-gray-600 text-sm max-vp:hidden pt-2">{description}</p>
              <button className="btn-clr rounded-xl w-full lg:w-[28vw] py-2 mt-6 vp:mt-4 text-white font-sans shadow-2xl transition-all hover:border border-black">
                Learn More
              </button>
          </div>
      </div>
    </>
  );
}

const Timelinedate = ({Date}) => {
  return(
    <div>
      <div className="flex flex-auto relative justify-center space-x-16 md:ml-96 max-lg:hidden">
        <div className="-mt-1" style={{marginLeft:'-25px'}}>
          <div className="bg-white w-10 h-10 rounded-full mx-auto" style={{marginTop: '-1rem'}}></div>
        </div>
        <div className='text-white font-bold min-h-44 max-w-80 -mt-8'>
          <p className='text-4xl md:text-7xl font-kara'>{Date}</p>
        </div>
      </div>
      <div className="max-w-2 min-h-64 mx-auto max-lg:hidden">
        <div className="bg-white h-72 w-2 mt-0 mx-auto" style={{marginTop: '-10rem'}}></div>
      </div>
      <div className='flex flex-row lg:hidden'>
          <div className='flex flex-col ml-[10vw]'>
            <div className='bg-white w-8 h-8 rounded-full -mb-1 -mt-1'></div>
            <div className='bg-white h-32 w-2 mt-0 ml-[0.775rem]'></div>
          </div>
          <div className='text-white font-bold ml-[8vw] -mt-3'>
            <p className='text-[2.7rem] font-kara'>October 2024</p>
          </div>
      </div>
    </div>
  )
}

export default Timeline;