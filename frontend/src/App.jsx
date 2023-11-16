import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Nav from './components/Nav';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


function App() {

  return (
    <div className=''>
    {/* <div className='flex justify-center items-center'> */}
    {/* <h1 classN ame='text-lg'>Hello</h1> */}
    {/* <Nav/> */}

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={ <Home/>} />
      <Route path='/dashboard' element={ <Dashboard/>} />
      <Route path='/register' element={ <Register/>} />
    </Routes>
    

   
    </div>
  )
}

export default App
