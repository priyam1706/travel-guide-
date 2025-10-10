import React from 'react';
import { Link } from 'react-router-dom';
import travelGuideLogo from '../../Public/travelGuideLogo.jpeg';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-0 px-0"> {/* Reduced py-8 for smaller footer height */}
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <img src={travelGuideLogo} alt="Travel Guide Logo" className="w-60 h-auto rounded-full object-fit shadow-lg mt-4" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-4">Important Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link to="support" className="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-4">Contributors</h3>
            <ul>
              <li className="flex items-center mb-2">
                <p>Rahul Kumar</p>
                <a href="https://github.com/jaiyankargupta" target="_blank" rel="noopener noreferrer" className="ml-1"><BsGithub /></a>
              </li>
              <li className="flex items-center mb-2">
                <p>Himanshu</p>
                <a href="https://github.com/himanshu02dev" target="_blank" rel="noopener noreferrer" className="ml-1"><BsGithub /></a>
              </li>
              <li className="flex items-center mb-2">
                <p>Priyam</p>
                <a href="https://github.com/priyam0109" target="_blank" rel="noopener noreferrer" className="ml-1"><BsGithub /></a>
              </li>
              <li className="flex items-center mb-2">
                <p>Bhargav Naidu</p>
                <a href="https://github.com/bhargavnaidu" target="_blank" rel="noopener noreferrer" className="ml-1"><BsGithub /></a>
              </li>
              <li className="flex items-center mb-2">
                <p>Gagan Kumar</p>
                <a href="https://github.com/sammarkgt" target="_blank" rel="noopener noreferrer" className="ml-1"><BsGithub /></a>
              </li>
              <li className="flex items-center mb-2">
                <p>Ridhi Sambhor</p>
                <a href="https://github.com/ridhisambhor" target="_blank" rel="noopener noreferrer" className="ml-1"><BsGithub /></a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex justify-between items-center">
          <div className="text-sm ml-4">&copy; TravelGuide 2022</div>
          <div className="flex space-x-4 mb-2">
            <a href="#" className="text-2xl hover:text-gray-300"><BsFacebook /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsInstagram /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsTwitter /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsGithub /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
