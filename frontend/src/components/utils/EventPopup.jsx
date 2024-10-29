import React, { useState } from 'react';

const Popup = (prop) => {
  const [isOpen, setIsOpen] = useState(false);

  const event = prop.event;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className='btn-clr rounded-xl low:w-[30vh] lg:w-[22vw] py-2 text-white font-sans shadow-2xl border border-white hover:border-black'
      >
        Learn More
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 p-[5vh]">
          <div className="bg-white max-w-[95vw] max-h-[98vh] overflow-y-auto rounded-lg shadow-lg relative p-[3rem]">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-4xl pr-4"
            >
              &times;
            </button>
            <div className="flex flex-row justify-between pt-2 xl:pt-6">
              <div className="lg:text-xl xl:text-2xl">
                <h2 className="text-3xl xl:text-4xl font-bold mb-4">{event.title}</h2>
                <p>{event.description}</p>
                <div className="flex flex-row items-center pt-8 justify-start gap-2">
                  <img src="/time.png" className="h-6" /> 
                  <p>{event.timeFrom} - {event.timeTo}</p>
                </div>
                <div className="flex flex-row items-center pt-2 justify-start gap-2">
                  <img src="/location.png" className="h-6" /> 
                  <p>{event.location}</p>
                </div>
                <div className="flex flex-row items-center pt-2 justify-start gap-2">
                  <img src="/cost.png" className="h-6" /> 
                  <p>{event.cost}</p>
                </div>
                <button className="bg-black py-2 px-6 rounded-xl text-white w-[50vw] md:w-[40vw] mt-6">Register</button>
              </div>
              <div>
                <img src={event.image} className="rounded-2xl h-[40vh] w-[40vw] max-xl:hidden" />
              </div>
            </div>
            <div className="pt-[5vh] xl:pt-[10vh] max-md:hidden">
              <h1 className="font-thin text-3xl xl:text-4xl">Overview</h1>
              <p className="lg:text-xl xl:text-2xl pt-4">{event.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
