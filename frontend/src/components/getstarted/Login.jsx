import React from 'react'
import './mad.css'
import Navbar from '../utils/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className='flex flex-col items-center pt-[8vh]'>

        <Navbar />

        <Link to='/' > <img src='logo.png' alt='logo' className='lg:hidden low:h-[5vh] lg:h-[7vh]' /> </Link>
        <div className='h-[70vh] w-[80vw] bg-white rounded-[2rem] low:mt-[5vh] lg:mt-[15vh] flex lg:flex-row items-center justify-evenly'>
            <div className='hidden lg:flex flex-col items-center justify-center lg:text-3xl xl:text-[2.5rem] font-marv w-[42vw]'>
                <h1>Use PESEvents without Logging In</h1>
                <Link to='/upcoming' className='text-white lg:text-xl xl:text-2xl btn-clr rounded-3xl px-6 py-2 mt-[2vh] xl:mt-[4vh] border border-white hover:border-black'>Start Browsing</Link>
                <h1 className='pt-[5vh] xl:pt-[7vh]'>Organising an Event?</h1>
                <p className='lg:text-lg xl:text-xl pt-[1vh] text-gray-500'>This is only for Club/Event Organising Teams.</p>
                <button className='text-white lg:text-xl xl:text-2xl btn-clr rounded-3xl px-8 py-2 mt-[2vh] xl:mt-[4vh] border border-white hover:border-black'>Get Started</button>
            </div>
            <div className='hidden lg:flex flex-col items-center justify-center'>
                <div className='bg-black w-[1.5px] h-[23vh]'></div>
                <h1 className='font-marv text-[5vh] py-[3vh]'>OR</h1>
                <div className='bg-black w-[1.5px] h-[23vh]'></div>
            </div>
            <div className='hidden lg:flex flex-col items-center justify-center text-4xl font-marv w-[38vw]'>
                <h1 className='lg:text-3xl xl:text-4xl pb-[3vh]'>Login</h1>
                <form>
                    <label className='text-2xl'>Username:</label><br/>
                    <div className='flex flex-row'>
                        <input type='text' placeholder='Enter Username' className='border border-b-black border-t-white border-l-white border-r-white outline-none lg:text-xl xl:text-2xl w-[23vw] mb-[5vh]'/><br/>
                    </div>

                    <label className='text-2xl'>Password:</label><br/>
                    <div className='flex flex-row'>
                        <input type='text' placeholder='Enter Password' className='border border-b-black border-t-white border-l-white border-r-white outline-none lg:text-xl xl:text-2xl w-[23vw]'/><br/>
                    </div>
                    <p className='text-lg pl-[15vw] pt-2 text-gray-500'>Forgot Password?</p>

                    <center><button className='text-white lg:text-xl xl:text-2xl btn-clr rounded-3xl px-12 py-2 lg:mt-[3vh] xl:mt-[5vh] border border-white hover:border-black'>Login</button></center>
                </form>
                <p className='lg:text-lg xl:text-xl text-gray-500 mt-[5vh]'>Haven't signed up yet? Click here to sign up</p>
            </div>
            <div className='flex lg:hidden flex-col items-center justify-center text-2xl font-marv'>
                <h1 className=' pb-[3vh] text-3xl'>Login</h1>
                <form>
                    <label className='text-xl'>Username:</label><br/>
                    <div className='flex flex-row'>
                        <input type='text' placeholder='Enter Username' className='text-xl border border-b-black border-t-white border-l-white border-r-white outline-none mb-[5vh]'/><br/>
                    </div>

                    <label className='text-xl'>Password:</label><br/>
                    <div className='flex flex-row'>
                        <input type='text' placeholder='Enter Password' className='text-xl border border-b-black border-t-white border-l-white border-r-white outline-none'/><br/>
                    </div>
                    <p className='text-[1rem] pt-2 text-gray-500'>Forgot Password?</p>

                    <center><button className='text-xl text-white btn-clr rounded-3xl px-12 py-1 mt-[5vh] border border-white hover:border-black'>Login</button></center>
                </form>
                <p className='text-gray-500 mt-[5vh] text-[1rem]'>Haven't signed up yet? Click here to sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Login