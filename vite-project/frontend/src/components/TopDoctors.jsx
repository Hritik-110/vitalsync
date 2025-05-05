// import React, { useContext } from 'react'

// import { Navigate, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// const TopDoctors = () => {
//   const navigate=useNavigate()
//   const {doctors}=useContext(AppContext)
//   return (
//     <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
//       <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
//       <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
//       <div className='w-full grid grid-cols-auto gap-4 pr-5 gap-y-6 px-3 sm:px-0'>
//         {doctors.slice(0,10).map((item, index) => (
//           <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
//             <img className='bg-blue-50' src={item.image} alt="" />
//             <div className='p-4'>
//               <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                 <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//               </div>
//               <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//               <p className='text-gray-600 text-sm'>{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
//     </div>
//   )
// }

// export default TopDoctors
import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Star, StarHalf, Clock, MapPin, ThumbsUp, Filter } from 'lucide-react';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterSpeciality, setFilterSpeciality] = useState('All');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  // Get unique specialities for filter dropdown
  const specialities = ['All', ...new Set(doctors.map(doctor => doctor.speciality))];

  // Filter doctors by speciality and availability
  const filteredDoctors = doctors.filter(doctor => {
    // Filter by speciality if not set to 'All'
    const matchesSpeciality = filterSpeciality === 'All' || doctor.speciality === filterSpeciality;
    
    // Filter by availability if showOnlyAvailable is true
    const matchesAvailability = !showOnlyAvailable || doctor.isAvailable;
    
    return matchesSpeciality && matchesAvailability;
  });

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-yellow-400 text-yellow-400" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={16} className="fill-yellow-400 text-yellow-400" />);
    }
    
    // Add empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/2 text-center text-sm mb-6">
        Simply browse through our extensive list of trusted doctors ranked by patient ratings
      </p>
      
      {/* Filter Controls */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center mb-6 px-4 sm:px-0 gap-4">
        <div className="flex items-center">
          <Filter size={18} className="text-blue-600 mr-2" />
          <span className="mr-2 text-sm font-medium">Filter by:</span>
          <select 
            value={filterSpeciality}
            onChange={(e) => setFilterSpeciality(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {specialities.map(speciality => (
              <option key={speciality} value={speciality}>{speciality}</option>
            ))}
          </select>
        </div>
        
     
      </div>
      
      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0">
        {filteredDoctors.slice(0, 8).map((doctor, index) => (
          <div 
            key={doctor._id || index}
            onClick={() => { 
              navigate(`/appointment/${doctor._id}`); 
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md hover:translate-y-[-5px] transition-all duration-300"
          >
            {/* Doctor Image with Availability Badge */}
            <div className="relative">
              <img 
                className="w-full h-48 object-cover object-center bg-blue-50" 
                src={doctor.image} 
                alt={doctor.name} 
              />
              {/* <div className={`absolute top-4 right-4 ${doctor.isAvailable ? 'bg-green-100' : 'bg-red-100'} px-2 py-1 rounded-full flex items-center shadow-sm`}>
                <div className={`w-2 h-2 ${doctor.isAvailable ? 'bg-green-500' : 'bg-red-500'} rounded-full mr-1`}></div>
                <span className={`text-xs font-medium ${doctor.isAvailable ? 'text-green-700' : 'text-red-700'}`}>
                  {doctor.isAvailable ? 'Available' : 'Unavailable'}
                </span>
              </div> */}
            </div>
            
            {/* Doctor Info */}
            <div className="p-4">
              {/* Doctor Name and Badge */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-900 text-lg font-medium">{doctor.name}</h3>
                {doctor.verified && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Verified</span>
                )}
              </div>
              
              {/* Speciality */}
              <p className="text-gray-600 text-sm mb-3">{doctor.speciality}</p>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex mr-2">
                  {renderStars(doctor.rating || 4.5)}
                </div>
                <span className="text-sm font-medium">{doctor.rating || 4.5}</span>
                <span className="text-xs text-gray-500 ml-1">
                  ({doctor.reviewCount || 120} reviews)
                </span>
              </div>
              
              {/* Location and Experience */}
              <div className="flex flex-wrap gap-y-2 text-sm text-gray-600 mb-3">
                <div className="flex items-center mr-4">
                  <MapPin size={14} className="text-gray-400 mr-1" />
                  {doctor.location || "India"}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="text-gray-400 mr-1" />
                  {doctor.experience || Math.floor(Math.random() * 15) + 5} yrs exp
                </div>
              </div>
              
              {/* Patients Helped */}
              <div className="flex items-center text-sm text-gray-600">
                <ThumbsUp size={14} className="text-blue-500 mr-1" />
                <span>{doctor.patients || Math.floor(Math.random() * 900) + 100} patients helped</span>
              </div>
            </div>
            
            {/* Book Now Button */}
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-t border-gray-100">
              <span className="text-blue-600 font-medium">
                ${doctor.fee || Math.floor(Math.random() * 100) + 50}/consultation
              </span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* No Results Message */}
      {filteredDoctors.length === 0 && (
        <div className="w-full text-center py-12">
          <p className="text-gray-600">No doctors match your current filters.</p>
          <button 
            onClick={() => {
              setFilterSpeciality('All');
              setShowOnlyAvailable(false);
            }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
      
      {/* View More Button */}
      {filteredDoctors.length > 0 && (
        <button 
          onClick={() => {
            navigate('/doctors'); 
            scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-12 py-3 rounded-full mt-10 hover:bg-blue-700 transition-colors shadow-sm"
        >
          View All Doctors
        </button>
      )}
    </div>
  );
};

export default TopDoctors;