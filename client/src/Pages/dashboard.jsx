import React, { useState, useEffect } from "react";
import SearchLocations from "../components/searchLocations";
import TravelPage from "../components/SearchDestination";

const Dashboard = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Hello")
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const storedName = localStorage.getItem("name");

    setToken(storedToken);
    setUserId(storedUserId);
    setName(storedName);

    if (
      !storedToken ||
      !storedUserId ||
      storedToken == "" ||
      storedUserId == ""
    ) {
      //window.location.href = "/login";
    }
  }, []);

  return (
    <div className="min-h-screen text-black">
      <header className="bg-transparent py-4 px-8 text-center">
        <div>
            <p className="text-5xl mt-2 font-bold ">Welcome back,{name ? <span>{name}</span> : <span> User</span> }</p>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="text-center mb-12">
          
          <h3 className="text-3xl font-semibold mt-9 mb-4 text-blue-900">
          Plan Your Travel in India
            </h3>
          <button className="bg-yellow-400  text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">
              <a href="/searchdestination"> Search Destination</a>
            </button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Personalized Recommendations
            </h3>
            <p className="text-lg mb-4 text-black">
              Explore accommodations, dining options, attractions, and travel
              routes tailored to your unique preferences and requirements.
            </p>
            <p className="text-lg text-black">
              Say goodbye to the hassle of researching multiple sources – our
              all-in-one solution provides everything you need for an
              unforgettable travel experience.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-black border">
            <h3 className="text-xl font-semibold mb-4">Start Planning Now</h3>
            <p className="text-lg mb-4">
              Dive into our comprehensive database and start planning your next
              journey today. Whether you're a seasoned explorer or a first-time
              adventurer, Travel Guide has something for everyone.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">
              <a href="/services"> Begin Your Adventure</a>
            </button>
            <p className="text-sm mt-2">
              Explore Best Food, accommodations, Budget friendly, Best Travel
              and activities to create your dream travel itinerary.
            </p>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Your Recent Searches
            
          </h2>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
