

// export default Doctors
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    // Default rating if not provided
    const doctorRating = rating || Math.floor(Math.random() * 2) + 4; // Random rating between 4-5 for demo
    
    for (let i = 1; i <= 5; i++) {
      if (i <= doctorRating) {
        // Full star
        stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>);
      } else if (i - doctorRating < 1 && i - doctorRating > 0) {
        // Half star for partial ratings
        stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>);
      } else {
        // Empty star
        stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>);
      }
    }
    return stars;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Specialists</h1>
      <p className='text-gray-600 mb-8'>Browse through the doctors specialist.</p>
      
      <div className='flex flex-col lg:flex-row items-start gap-8 mt-5'>
        {/* Specialties Sidebar */}
        <div className='flex flex-col gap-3 w-full lg:w-64 sticky top-4 self-start'>
          <h2 className="font-semibold text-gray-700 mb-2">Specialties</h2>
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="space-y-2">
              {[
                'General physician', 
                'Gynecologist', 
                'Dermatologist', 
                'Pediatricians', 
                'Neurologist', 
                'Gastroenterologist'
              ].map((spec) => (
                <div 
                  key={spec}
                  onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
                  className={`px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 flex items-center ${speciality === spec ? "bg-blue-100 text-blue-800 font-medium shadow-sm" : "text-gray-600 hover:text-blue-600"}`}
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Doctors Grid */}
        <div className='w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filterDoc.map((item, index) => (
              <div 
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full'
              >
                {/* Doctor Image with gradient overlay */}
                <div className="relative overflow-hidden h-52">
                  <img 
                    className='w-full h-full object-cover object-center' 
                    src={item.image} 
                    alt={item.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className='p-5 flex flex-col flex-grow'>
                  {/* Availability Badge */}
                  <div className='inline-flex items-center gap-2 text-xs font-medium bg-green-100 text-green-600 px-3 py-1 rounded-full mb-3 self-start'>
                    <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                    <span>Available</span>
                  </div>
                  
                  {/* Doctor Info */}
                  <h3 className='text-gray-900 text-lg font-semibold mb-1'>{item.name}</h3>
                  <p className='text-gray-600 text-sm mb-3'>{item.speciality}</p>
                  
                  {/* Rating Section */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      {renderStars(item.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {item.rating || (Math.floor(Math.random() * 11) + 40) / 10} • {item.reviewCount || Math.floor(Math.random() * 100) + 20} reviews
                    </span>
                  </div>
                  
                  {/* Book Now Button */}
                  <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filterDoc.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-700 mb-2">No doctors found</h3>
              <p className="text-gray-500 max-w-md">
                We couldn't find any doctors matching your criteria. Please try selecting a different specialty.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors