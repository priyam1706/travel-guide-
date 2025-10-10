import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card } from 'antd';
import Footer from '../components/footer';

const { Meta } = Card;

const AboutPage = () => {
  // Define an array of contributors with their information
  const contributors = [
    {
      name: "Himanshu - Team Lead",
      image: "https://avatars.githubusercontent.com/u/117301124?v=4",
      github: "https://github.com/himanshu",
      linkedin: "https://linkedin.com/in/himanshu"
    },
    {
      name: "Rahul Kumar",
      image: "https://avatars.githubusercontent.com/u/146073621?v=4",
      github: "https://github.com/jaiyankargupta",
      linkedin: "https://linkedin.com/in/jaiyankargupta"
    },
    {
      name: "Bhargav Naidu",
      image: "https://avatars.githubusercontent.com/u/164229749?v=4",
      github: "https://github.com/bhargavnaidu",
      linkedin: "https://linkedin.com/in/bhargavnaidu"
    },
    {
      name: "Gagan Kumar",
      image: "https://avatars.githubusercontent.com/u/164229749?v=4",
      github: "https://github.com/himanshu",
      linkedin: "https://linkedin.com/in/himanshu"
    },
    {
      name: "Ridhi Sambhor",
      image: "https://avatars.githubusercontent.com/u/164229749?v=4",
      github: "https://github.com/ridhisambhor",
      linkedin: "https://linkedin.com/in/ridhisambhor"
    },
    {
      name: "Priyam",
      image: "https://avatars.githubusercontent.com/u/164229749?v=4",
      github: "https://github.com/priyam",
      linkedin: "https://linkedin.com/in/priyam"
    }
    // Add more contributors as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto rounded-md overflow-hidden border border-gray-300">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About Travel Guide</h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Welcome to Travel Guide, your ultimate companion for planning the perfect trip! Whether you're a seasoned traveler or embarking on your first adventure, our platform is designed to provide you with personalized recommendations and essential information to make your journey unforgettable.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            At Travel Guide, our mission is to simplify the travel planning process and empower travelers to explore the world with confidence. We understand that every traveler is unique, which is why we offer customizable itineraries, comprehensive destination guides, and expert recommendations tailored to your preferences and interests.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            With Travel Guide, you can say goodbye to the hassle of researching multiple sources for travel information. Our all-in-one platform provides everything you need to plan your trip, from accommodation recommendations and dining options to attraction highlights and route suggestions. Whether you're seeking adventure, relaxation, or cultural immersion, we've got you covered.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get Started</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Ready to embark on your next adventure? Simply input your destination into our user-friendly interface and let Travel Guide do the rest. Whether you're planning a weekend getaway or a month-long excursion, we're here to help you create unforgettable memories and discover new horizons. Happy travels!
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-5 mb-4"> Our Contributors:</h2>
          <ul className="text-lg text-gray-800 leading-relaxed mb-6">
            {contributors.map(contributor => (
              <li key={contributor.name} className="flex items-center mb-4">
                <img src={contributor.image} alt={contributor.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <strong>{contributor.name}</strong>
                  <div className="flex mt-1">
                    <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaGithub /></a>
                    <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>

    </div>
   
  );
}

export default AboutPage;
