
import React, { useState } from 'react'
import lo from '../assets/po.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 transform transition duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold">
            CONTACT <span className="text-gray-700">US</span>
          </h2>
          <div className="h-1 w-24 bg-gray-700 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and contact info */}
          <div className="space-y-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                className="w-full transition-all duration-700 hover:scale-110" 
                src={lo} 
                alt="Office location" 
              />
            </div>
            
            <div className="space-y-6">
              <div className="transform transition duration-500 hover:-translate-y-1">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">OUR OFFICE</h3>
                <p className="text-gray-500">
                  462003 <br /> 
                  MANIT BHOPAL MP INDIA
                </p>
              </div>
              
              <div className="transform transition duration-500 hover:-translate-y-1">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">CONTACT INFO</h3>
                <p className="text-gray-500">
                  Tel: (+91) 8954307008 <br /> 
                  Email: rathorehritik022@gmail.com
                </p>
              </div>
              
              <div className="transform transition duration-500 hover:-translate-y-1">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">CAREERS AT VITALSYNC</h3>
                <p className="text-gray-500 mb-4">
                  Learn more about our teams and job openings.
                </p>
                <button className="border-2 border-gray-800 px-8 py-3 font-medium 
                                  hover:bg-gray-800 hover:text-white transition-all duration-300
                                  focus:outline-none focus:ring-2 focus:ring-gray-400">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:shadow-xl">
            <h3 className="font-semibold text-xl text-gray-700 mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-lg font-medium text-gray-700">Thank you for your message!</p>
                <p className="text-gray-500">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gray-800 text-white font-medium py-3 rounded-md
                          hover:bg-gray-900 transition-all duration-300
                          focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;