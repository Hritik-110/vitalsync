import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <ToastContainer/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/doctors' element={<Doctors />}/>
            <Route path='/doctors/:speciality' element={<Doctors />}/>
           
            <Route path='/login' element={<Login />}/>          
            <Route path='/about' element={<About />}/>  
            <Route path='/contact' element={<Contact/>}/>  
            <Route path='/my-profile' element={<MyProfile />}/>
            <Route path='/my-appointments' element={<MyAppointments />}/>
            <Route path='/appointment/:docId' element={<Appointment />}/>   
            <Route path="/verify" element={<Verify />} />           
          </Routes>
          <Footer/> 
    </div>
  )
}
export default App