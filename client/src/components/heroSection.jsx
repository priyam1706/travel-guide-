import React from 'react';
import travelGuideLogo from '../../Public/headerImageNobg.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HeroSection() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left mb-6">Welcome to Travel Guide</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 lg:mb-12 text-center lg:text-left">
              Whether you're planning your next adventure or looking for inspiration, Travel Guide is your ultimate companion. Discover personalized recommendations, create customized itineraries, and embark on unforgettable journeys.
            </p>
            <div className="text-center lg:text-left">
              {/* Use Link component for internal navigation */}
              <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 ease-in-out mr-4">Get Started</Link>
              <Link to="/about" className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300 ease-in-out">Learn More</Link>
            </div>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src={travelGuideLogo} className="mx-auto lg:mx-0 mr-9 lg:mr-34" alt="Travel Guide Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
