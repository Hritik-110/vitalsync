
import React, { useState, useEffect, useRef } from 'react';
import log from '../assets/abou.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Feature cards data
  const features = [
    {
      id: 1,
      title: 'EFFICIENCY',
      description: 'Streamlined appointment scheduling that fits into your busy lifestyle.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'CONVENIENCE',
      description: 'Access to a network of trusted healthcare professionals in your area.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'PERSONALIZATION',
      description: 'Tailored recommendations and reminders to help you stay on top of your health.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white py-16">
      {/* Section Header */}
      <div 
        className={`text-center mb-16 transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold relative inline-block">
          ABOUT <span className="text-gray-700 font-semibold">US</span>
          <div 
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-1000 ${
              isVisible ? 'w-full' : 'w-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          />
        </h2>
      </div>

      {/* About Content Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image with hover effect */}
          <div 
            className={`md:w-2/5 overflow-hidden rounded-lg shadow-xl transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative overflow-hidden group">
              <img 
                className="w-full transition-transform duration-700 group-hover:scale-110" 
                src={log} 
                alt="About VITALSYNC" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  VITALSYNC
                </div>
              </div>
            </div>
          </div>

          {/* About text content */}
          <div 
            className={`md:w-3/5 space-y-6 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-gray-600 leading-relaxed">
              Welcome to <span className="font-semibold text-blue-600">VITALSYNC</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              VITALSYNC is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
            </p>
            
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600 italic">
                Our vision at Vitalsync is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
            
            <button 
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <div 
          className={`mb-12 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h2 className="text-2xl font-bold">
            WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
          </h2>
          <div className="h-1 w-24 bg-blue-500 mt-2"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeFeature === feature.id ? 'bg-blue-600 text-white scale-105' : 'bg-white text-gray-600'}`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="px-8 py-12 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className={`${
                    activeFeature === feature.id ? 'text-white' : 'text-blue-600'
                  } transition-colors duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-base">{feature.description}</p>
                <div className={`mt-4 flex items-center ${
                  activeFeature === feature.id ? 'text-white' : 'text-blue-600'
                } font-medium transition-colors duration-300`}>
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Counter Section */}
        <div 
          className={`bg-gray-100 rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Healthcare Providers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
