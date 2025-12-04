import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-24 bg-white border-b border-gray-300 shadow-lg flex items-center justify-between px-4'>
        <h1 className='text-3xl font-bold text-gray-800'>MyApp</h1>
        <div>
            <button className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                <Link to="/">Login</Link></button>
            <button className='mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
                <Link to="/register">Register</Link></button>
            <button className='mx-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'>
                <Link to="/profile">Profiles</Link></button>
        </div>

    </div>
  )
}

export default Nav