import React from 'react';
import './signuplogin.css';
import InputComponent from '../utils/InputComponent';
import { Link } from 'react-router-dom';

const Clublog = () => {
  return (
    <div className = "h-screen max-lg:rounded-sm lg:w-2/4 lg:bg-white flex flex-col items-center lg:items-start">
      
      <div className = "logo-clr font-kara font-medium text-6xl lg:pl-10 pt-7 lg:absolute max-lg:text-white max-lg:flex max-lg:justify-center max-lg:w-screen">
        <Link to='/'>PESEvents</Link>
      </div>
      <div className = "flex flex-row justify-evenly w-[80vw] lg:w-[50vw] max-mm:w-[90vw] rounded-3xl max-lg:bg-white max-lg:mt-[8vh]">
      <div className = "flex flex-col justify-center lg:h-screen lg:mr-32">
        
        <p className = "font-marv text-4xl mt-11 max-md:text-[2rem] max-md:text-center">Log in for Clubs</p>
        <p className = "font-marv text-2xl mb-11 max-md:text-[1.15rem] max-md:text-center">Manage and showcase clubs events easily</p>

        <form>
          <div>
            <InputComponent
              name = "E-mail ID:"
              type = "email"
              imageSrc = "email-field.png"
              placeholder="johndoe@example.com"
              maxLength={50}
            />
          </div>

          <div className="mt-5">
            <InputComponent 
            name = "Password:"
            type = "password"
            imageSrc = "password-field.png"
            placeholder="**********"
            maxLength={100}
            />
          </div>

          <div className = "ml-48 max-md:ml-36 -mt-4">
            <a href = "#" className = "text-gray-500 text-sm hover:underline hover:text-purple-600">Forgot Password?</a>
          </div>

          <div className = "pt-16 max-md:pt-10 flex justify-center">
            <button className = "btn-clr text-white font-marv font-medium text-2xl rounded-full py-2 px-4 w-52">Log in</button>
          </div>
        </form>

        <div className = "mt-5 flex justify-center">
          <a href = "#" className = "text-gray-500 text-sm max-md:text-[0.7rem] max-md:mb-2 hover:underline hover:text-purple-600">Haven't signed up yet? Click here to Sign Up</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Clublog;
