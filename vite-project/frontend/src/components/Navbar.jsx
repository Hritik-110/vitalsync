// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import logo1 from '../assets/logo3.png'

// const Navbar = () => {

//   const navigate = useNavigate()

//   const [showMenu, setShowMenu] = useState(false)
//   const { token, setToken, userData } = useContext(AppContext)

//   const logout = () => {
//     localStorage.removeItem('token')
//     setToken(false)
//     navigate('/login')
//   }

//   const handleNavigate = ()=>{
//      navigate('/login');
//   }

//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
//       <img onClick={() => navigate('/')} className='h-12.5 w-60 cursor-pointer' src={logo1}  alt="" />
//       <ul className='md:flex items-start gap-5 font-medium hidden'>
//         <NavLink to='/' >
//           <li className='py-1'>HOME</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/doctors' >
//           <li className='py-1'>ALL DOCTORS</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/about' >
//           <li className='py-1'>ABOUT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/contact' >
//           <li className='py-1'>CONTACT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//       </ul>

//       <div className='flex items-center gap-4 '>
//         {
//           token 
//             ? ( <div className='flex items-center gap-2 cursor-pointer group relative'>
//               <img className='w-8 rounded-full' src={userData.image} alt="" />
//               <img className='w-2.5' src={assets.dropdown_icon} alt="" />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                 <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
//                   <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                   <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                   <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//               </div>
//             </div>)
//             : (<button onClick={ handleNavigate} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>)
//         }
//         <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

//         {/* ---- Mobile Menu ---- */}
//         <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//           <div className='flex items-center justify-between px-5 py-6'>
//             <img src={assets.logo1} className='w-36' alt="" />
//             <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
//           </div>
//           <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
//             <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import logo1 from '../assets/logo3.png'
import logo2 from '../assets/profile_pic.png'
const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // You can add additional logic here to apply dark mode to your app
    // For example, adding/removing a class to the document body or html element
    document.documentElement.classList.toggle('dark-mode')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='h-12.5 w-60 cursor-pointer' src={logo1} alt="" />
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {/* Toggle Button */}
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="relative inline-flex h-6 w-11 items-center rounded-full border border-gray-300 focus:outline-none"
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={userData.image || logo2 } alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={handleNavigate} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        )}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo1 || logo1} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
            
            {/* Toggle Button in Mobile Menu */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm">Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className="relative inline-flex h-6 w-11 items-center rounded-full border border-gray-300 focus:outline-none"
              >
                <span className="sr-only">Toggle Dark Mode</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
