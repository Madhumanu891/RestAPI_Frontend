import React from 'react'
import Nav from './components/Nav'
import Login from './components/Login'
import Register from './components/Register'
import Allprofiles from './components/Allprofiles'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='mx-auto flex flex-col'>
     <Nav />
     <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/register' element={<Register />} />
       <Route path='/profile' element={<Allprofiles />} />
     </Routes>
    </div>
  )
}

export default App