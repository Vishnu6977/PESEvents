import React from 'react'
import './mad.css'

const Authenticate = () => {
  return (
    <div className='flex flex-col items-center pt-[8vh]'>
        <img src='logo.png' className='h-[7vh]' />
        <div className='h-[70vh] w-[80vw] bg-white rounded-[2rem] mt-[5vh] flex flex-row items-center justify-evenly'>
            <div className='flex flex-col items-center justify-center text-[2.5rem] font-marv w-[42vw]'>
                <h1>Use PESEvents without Logging In</h1>
                <button className='text-white text-2xl btn-clr rounded-3xl px-6 py-2 mt-[2vh] border border-white hover:border-black'>Start Browsing</button>
                <h1 className='pt-[5vh]'>Organising an Event?</h1>
                <p className='text-xl pt-[1vh] text-gray-500'>This is only for Club/Event Organising Teams.</p>
                <button className='text-white text-2xl btn-clr rounded-3xl px-8 py-2 mt-[2vh] border border-white hover:border-black'>Get Started</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-black w-[1.5px] h-[23vh]'></div>
                <h1 className='font-marv text-[5vh] py-[3vh]'>OR</h1>
                <div className='bg-black w-[1.5px] h-[23vh]'></div>
            </div>
            <div className='flex flex-col items-center justify-center text-4xl font-marv w-[38vw]'>
                <h1 className='text-4xl pb-[8vh]'>Login</h1>
                <form>
                    <label className='text-2xl'>Username:</label><br/>
                    <div className='flex flex-row'>
                        <input type='text' placeholder='Enter Username' className='border border-b-black border-t-white border-l-white border-r-white outline-none text-2xl w-[23vw] mb-[5vh]'/><br/>
                    </div>

                    <label className='text-2xl'>Password:</label><br/>
                    <div className='flex flex-row'>
                        <input type='text' placeholder='Enter Password' className='border border-b-black border-t-white border-l-white border-r-white outline-none text-2xl w-[23vw]'/><br/>
                    </div>
                    <p className='text-lg pl-[15vw] pt-2 text-gray-500'>Forgot Password?</p>

                    <center><button className='text-white text-2xl btn-clr rounded-3xl px-12 py-2 mt-[5vh] border border-white hover:border-black'>Login</button></center>
                </form>
                <p className='text-xl text-gray-500 mt-[5vh]'>Haven't signed up yet? Click here to sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Authenticate