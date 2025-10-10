import React, { useState } from 'react';
import SearchLocations from './searchLocations';

const SearchDestination = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [showBookingOptions, setShowBookingOptions] = useState(false);

  const famousLocations = [
    { name: 'Taj Mahal, Agra', lat: 27.1751, lng: 78.0421 },
    { name: 'Jaipur, Rajasthan', lat: 26.9124, lng: 75.7873 },
    { name: 'Kerala Backwaters', lat: 9.4981, lng: 76.3388 },
    { name: 'Varanasi, Uttar Pradesh', lat: 25.3176, lng: 82.9739 },
    { name: 'Goa Beaches', lat: 15.2993, lng: 74.1240 },
    { name: 'Mumbai, Maharashtra', lat: 19.0760, lng: 72.8777 },
    { name: 'Darjeeling, West Bengal', lat: 27.0478, lng: 88.2636 },
    { name: 'Hampi, Karnataka', lat: 15.3350, lng: 76.4600 },
    { name: 'Amritsar, Punjab', lat: 31.6340, lng: 74.8723 },
    { name: 'Rishikesh, Uttarakhand', lat: 30.0868, lng: 78.2676 },
  ];

  const handleLocationChange = (event, type) => {
    const { value } = event.target;
    if (type === 'source') {
      setSource(value);
    } else if (type === 'destination') {
      setDestination(value);
    }
  };

  const handleSubmit = () => {
    setShowBookingOptions(true);
  };

  const renderFamousLocations = () => {
    return famousLocations.map((location, index) => (
      <option key={index} value={location.name}>{location.name}</option>
    ));
  };

  const renderBookingOptions = () => {
    if (showBookingOptions) {
      return (
        <div className="container mx-auto mt-8">
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-4xl font-semibold mb-7 text-center">Booking Options</h2>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-2xl font-semibold mb-8 text-center text-green-700">Hotel Booking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-4 border">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel" className="w-full h-64 mb-4 rounded-lg" />
                    <a href={`https://example.com/hotel-booking-${index}?source=${source}&destination=${destination}`} className="block text-center text-blue-500 hover:underline">Book Now</a>
                  </div>
                ))}
              </div>
            </div>
           

          
            
          
            <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">Bus Booking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                    <img src="https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bus" className="w-full h-64 mb-4 rounded-lg" />
                    <a href={`https://example.com/bus-booking-${index}?source=${source}&destination=${destination}`} className="block text-center text-blue-500 hover:underline">Book Now</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
              <h3 className="text-2xl font-semibold mb-2 text-center text-green-700">Railway Booking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                    <img src="https://plus.unsplash.com/premium_photo-1676745449942-9810b9f9e5b9?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Train" className="w-full h-64 mb-4 rounded-lg" />
                    <a href={`https://example.com/railway-booking-${index}?source=${source}&destination=${destination}`} className="block text-center text-blue-500 hover:underline">Book Now</a>
                  </div>
                ))}
              </div>
            </div>
            <SearchLocations />
            </div>
          </div>
          
      
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center mb-24">
      <div className="w-full max-w-4xl p-6 mb-8 bg-gray-100 rounded-lg mt-16">
        <h1 className="text-3xl font-semibold mb-11 text-center text-green-700 ">Plan Your Travel in India</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Popular Destinations</h2>
          <select className="border border-blue-700 rounded px-4 py-2 w-full mb-4" onChange={(e) => handleLocationChange(e, 'source')}>
            <option value="">Select Arrival Location</option>
            {renderFamousLocations()}
          </select>
          
        </div>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full mb-7 mt-2">Submit</button>
      </div>
      {renderBookingOptions()}
    </div>
    
  );
};

export default SearchDestination;
