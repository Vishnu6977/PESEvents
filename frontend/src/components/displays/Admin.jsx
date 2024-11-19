import React, { useState } from 'react';
import Navbar from '../utils/Navbar';

const Admin = () => {
  const [create, setCreate] = useState(true);
  const [search, setSearch] = useState(false);
  const [update, setUpdate] = useState(false);
  const [del, setDel] = useState(false);
  const [resp, setResp] = useState(null);
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({ name: '', id: '', updateData: '' });

  const changeToCreate = () => {
    setCreate(true);
    setSearch(false);
    setUpdate(false);
    setDel(false);
    setResp(null);
  };

  const changeToSearch = () => {
    setCreate(false);
    setSearch(true);
    setUpdate(false);
    setDel(false);
    setResp(null);
  };

  const changeToUpdate = () => {
    setCreate(false);
    setSearch(false);
    setUpdate(true);
    setDel(false);
    setResp(null);
  };

  const changeToDelete = () => {
    setCreate(false);
    setSearch(false);
    setUpdate(false);
    setDel(true);
    setResp(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = 'https://pesevents.onrender.com/backend/api/events';
  
    try {
      let response;
      let data;
  
      if (create) {
        response = await fetch(baseURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: formData.name }),
        });
      } else if (search) {
        response = await fetch(`https://pesevents.onrender.com/backend/api/search/${formData.name}`, {
          method: 'GET',
        });
      } else if (update) {
        response = await fetch(`${baseURL}/${formData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: formData.updateData }),
        });
      } else if (del) {
        response = await fetch(`${baseURL}/${formData.id}`, {
          method: 'DELETE',
        });
      }
  
      if (response.ok) {
        data = await response.json(); 
        console.log('Response data:', data.data);
        setResp(true);
        if (search) {
          setEvents(data.data[0].title);
        }
      } else {
        const errorMessage = await response.text(); 
        console.error('Error:', errorMessage);
        setResp(false);
      }
    } catch (error) {
      console.error('Network or server error:', error.message);
      setResp(false);
    }
  };
  

  return (
    <div>
      <Navbar />

      <div className="bg-white h-screen flex flex-col items-center">

        <div className="flex justify-center pt-[30vh] pb-[10vh] adminback font-thin text-xl">
          <div className="bg-white h-[7vh] w-[60vw] rounded-2xl flex items-center justify-between overflow-hidden border-[1px] border-black">
            <div onClick={changeToCreate} className={`hover:cursor-pointer w-[15vw] flex items-center justify-center h-[7vh] transition duration-200 ${create ? 'bg-black text-white' : 'hover:text-white hover:bg-black'}`}>Create</div>
            <div onClick={changeToSearch} className={`hover:cursor-pointer w-[15vw] flex items-center justify-center h-[7vh] transition duration-200 ${search ? 'bg-black text-white' : 'hover:text-white hover:bg-black'}`}>Search</div>
            <div onClick={changeToUpdate} className={`hover:cursor-pointer w-[15vw] flex items-center justify-center h-[7vh] transition duration-200 ${update ? 'bg-black text-white' : 'hover:text-white hover:bg-black'}`}>Update</div>
            <div onClick={changeToDelete} className={`hover:cursor-pointer w-[15vw] flex items-center justify-center h-[7vh] transition duration-200 ${del ? 'bg-black text-white' : 'hover:text-white hover:bg-black'}`}>Delete</div>
          </div>
        </div>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            {create && (
              <div className='flex flex-col items-center justify-center gap-12'>
                <input
                  type="text"
                  name="name"
                  autoComplete='off'
                  placeholder='Enter Event Name Here'
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-black px-4 py-2 rounded-xl w-[30vw] focus:outline-none"
                />
                <button className='px-6 py-4 bg-black text-white rounded-2xl border border-white hover:bg-white hover:border-black hover:text-black transition duration-200'>Add Event</button>
                {resp === true ? (<div className='text-black'>Event Created Successfully</div>) : resp === false ? (<div className='text-red-500'>An Error Occured</div>) : null}
              </div>
            )}
            {search && (
              <div className='flex flex-col items-center justify-center gap-12'>
              <input
                type="text"
                name="name"
                autoComplete='off'
                placeholder='Enter Event Name Here'
                value={formData.name}
                onChange={handleInputChange}
                className="border border-black px-4 py-2 rounded-xl w-[30vw] focus:outline-none"
              />
              <button className='px-6 py-4 bg-black text-white rounded-2xl border border-white hover:bg-white hover:border-black hover:text-black transition duration-200'>Search</button>
              {resp === true ? (<div className='text-black'>{events}</div>) : resp === false ? (<div className='text-red-500'>An Error Occured</div>) : null}
            </div>
            )}
            {update && (
              <div className='flex flex-col items-center justify-center gap-12'>
              <input
                type="text"
                name="id"
                autoComplete='off'
                placeholder='Enter Event Name Here'
                value={formData.id}
                onChange={handleInputChange}
                className="border border-black px-4 py-2 rounded-xl w-[30vw] focus:outline-none"
              />
              <input
                type="text"
                name="updateData"
                autoComplete='off'
                placeholder='Enter New Event Name Here'
                value={formData.updateData}
                onChange={handleInputChange}
                className="border border-black px-4 py-2 rounded-xl w-[30vw] focus:outline-none"
              />
              <button className='px-6 py-4 bg-black text-white rounded-2xl border border-white hover:bg-white hover:border-black hover:text-black transition duration-200'>Update</button>
              {resp === true ? (<div className='text-black'>Updated Successfully</div>) : resp === false ? (<div className='text-red-500'>An Error Occured</div>) : null}
            </div>
            )}
            {del && (
              <div className='flex flex-col items-center justify-center gap-12'>
              <input
                type="text"
                name="id"
                autoComplete='off'
                placeholder='Enter Event Name Here'
                value={formData.id}
                onChange={handleInputChange}
                className="border border-black px-4 py-2 rounded-xl w-[30vw] focus:outline-none"
              />
              <button className='px-6 py-4 bg-black text-white rounded-2xl border border-white hover:bg-white hover:border-black hover:text-black transition duration-200'>Delete</button>
              {resp === true ? (<div className='text-black'>Deleted Successfully</div>) : resp === false ? (<div className='text-red-500'>An Error Occured</div>) : null}
            </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
