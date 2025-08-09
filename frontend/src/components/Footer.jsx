// import React from 'react'
// import logo1 from '../assets/logo3.png'
// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
// <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-10 text-sm'>
// {/*------ Left Section -----*/}
// <div>
//     <img src={logo1} alt=""/>
// <p>Welcome to My website, your trusted platform for seamless and hassle-free doctor appointments. Our system is designed to connect patients with healthcare professionals efficiently, ensuring that you receive the medical attention you need without long waiting times or complicated booking processes.</p>
// </div>
//    {/*---- Center Section -------*/}
//    <div>
//     <p className='text-xl font-medium mb-5'>COMPANY</p>
// <ul className='flex flex-col gap-2 text-gray-600'>
//     <li>Home</li>
//     <li>About Us</li>
//     <li>Contact Us</li>
//     <li>Privacy policy</li>
    
// </ul>
//    </div>
   
//    {/*----- Right section -----*/}
//    <div>
//     <p className='text-xl font-medium mb-5'>Get In Touch</p>
//     <ul className='flex flex-col gap-2 text-gray-600'>
//         <li>+90-8954307008</li>
//         <li>rathorehritik022@gmail.com</li>
//     </ul>
//    </div> 
// </div>
// {/*------- Copyright -----*/}
// <div>
// <hr/>
// <p className='py-5 text-sm text-center'>Copyright 2025@ MYPROJECT - ALL Right Reserved..</p>
//     </div>
// </div>
    
//   )
// }

// export default Footer
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    // In a real app, you would send this to your backend
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-50 text-gray-800 pt-10 pb-4">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">VS</span>
              </div>
              <h2 className="text-xl font-bold ml-2">VITALSYNC</h2>
            </div>
            <p className="text-gray-600">
              Your trusted platform for seamless and hassle-free doctor appointments. Our system connects patients with healthcare professionals efficiently, ensuring you receive medical attention without long waiting times.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/hritik-rathore-123390287/" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="D:\java\web\Project1\vite-project\src\pages\Home.jsx" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">›</span> Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">›</span> About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">›</span> Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">›</span> Doctors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">›</span> Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">›</span> Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="text-blue-600 mr-3" />
                <span className="text-gray-600">+90-8954307008</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-600 mr-3" />
                <span className="text-gray-600">rathorehritik022@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-600 mr-3 mt-1" />
                <span className="text-gray-600">123 Health Street Bhopal, MP</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-200 pb-2">Newsletter</h3>
            <p className="text-gray-600">Subscribe for updates and special offers</p>
            {isSubmitted ? (
              <div className="bg-green-100 text-green-800 p-3 rounded">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-2">
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <p className="text-sm text-gray-600 text-center md:text-left">
            Copyright © {new Date().getFullYear()} MYPROJECT - All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ArrowUp size={16} className="mr-1" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;