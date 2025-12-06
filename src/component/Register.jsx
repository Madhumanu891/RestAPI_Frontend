import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] =useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase()]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URI}/register`, formData)
      .then(response => {
        if (response.data.message) {
          navigate("/");
        }
        console.log('Registration successful:', response.data);
      })
      .catch(error => {
        console.error('There was an error registering!', error);
      });
      setFormData({
        name: '',
        email: '',
        password: ''
      });
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-semibold mb-4'>Register</h2>
      <form onSubmit={handleSubmit} className='w-1/3 flex flex-col border p-6 rounded shadow-lg'>
        <input onChange={handleChange}  type='text' placeholder='name' className='mb-4 p-2 border border-gray-300 rounded' />
        <input onChange={handleChange}  type='email' placeholder='email' className='mb-4 p-2 border border-gray-300 rounded' />
        <input onChange={handleChange}  type='password' placeholder='password' className='mb-4 p-2 border border-gray-300 rounded' />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Register</button>
        <p className='text-sm text-gray-400'>Already have an account? <button onClick={()=>navigate('/')} className='text-blue-500'>Login </button></p>
      </form>
    </div>
  )
}


export default Register

