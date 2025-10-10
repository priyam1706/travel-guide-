import React, { useState, useEffect } from "react";
import { BsFillGeoAltFill, BsFillMapFill } from "react-icons/bs";


const SearchLocations = () => {
  const [location, setLocation] = useState([
    "Rohtang Pass: A breathtaking high mountain pass with stunning views of the Himalayas, glaciers and snow-covered peaks. Enjoy snow activities, such as skiing and snowmobiling, during the winter months.",
    "Solang Valley: A picturesque valley known for its lush green meadows, towering peaks, and adventure activities. Engage in paragliding, zorbing, and skiing amidst the scenic surroundings.",
    "Manali Gompa: A serene Buddhist monastery offering a peaceful retreat. Admire the intricate architecture, colorful prayer flags, and panoramic views of the valley from its courtyard.",
    "Hadimba Devi Temple: An ancient wooden temple dedicated to the goddess Hadimba, nestled amidst towering cedar trees. Explore its intricate carvings and immerse yourself in the spiritual ambiance.",
    "Vashisht Hot Water Springs: Relax and rejuvenate in natural hot springs believed to possess therapeutic properties. Enjoy a dip in the warm, mineral-rich waters surrounded by picturesque landscapes.",
    "Bhrigu Lake: Embark on a moderate trek to this pristine alpine lake situated at an altitude of 4,300 meters. Marvel at its crystal-clear waters and enjoy breathtaking views of the surrounding mountains.",
  ]);
  const [foods, setFood] = useState([
    "Siddu: A traditional steamed bun filled with walnuts, jaggery, and spices. Savor its sweet and savory flavors, often paired with a dollop of butter.",
    "Thukpa: A hearty Tibetan noodle soup brimming with vegetables, meat, and flavorful broth. Warm yourself up with this comforting dish on chilly evenings.",
    "Trout Fish: Freshly caught trout prepared in various styles, including grilled, fried, or steamed. Delight in its flaky texture and delicate taste.",
    "Momos: Succulent steamed dumplings filled with vegetables or meat. Dip them in spicy chutney or savor them plain for a delectable snack.",
    "Kullu Trout: A local delicacy consisting of trout fish seasoned with aromatic spices and cooked to perfection. Relish its unique flavor profile and tender texture.",
    "Yak Cheese: A traditional Himalayan cheese made from yak milk. Experience its distinct nutty and slightly tangy flavor.",
  ]);
  const [shopping, setShopping] = useState([
    "The Mall Road: A bustling pedestrianized street lined with shops, restaurants, and cafes. Browse for souvenirs, handicrafts, and local products while enjoying the vibrant atmosphere.",
    "Manu Market: A vibrant local market offering a wide range of goods, from fresh produce and spices to clothing and souvenirs. Immerse yourself in the local culture and haggle for the best prices.",
    "Tibetan Market: Discover an array of Tibetan handicrafts, artifacts, and souvenirs. Find unique items such as prayer flags, singing bowls, and traditional jewelry.",
    "Old Manali Market: Explore a bohemian market known for its hippie vibes and eclectic offerings. Browse through colorful clothing, handmade accessories, and local crafts.",
    "Lakkar Bazaar (Shimla): Renowned for its wooden souvenirs and handicrafts. Find intricate carvings, toys, and utility items made from local wood. A great place to pick up unique gifts and keepsakes.",
  "Chowk Bazaar (Dalhousie): A charming bazaar nestled amidst the hills of Dalhousie. Explore a mix of shops selling clothing, woolen shawls, souvenirs, and local delicacies. Perfect for experiencing the local charm of Dalhousie."

  ]);

  const fetchData = async () => {
    console.log("starting...");
    try {
      const location = document.getElementById("search").value;
      console.log(location);
      const response = await fetch(
        "http://localhost:4000/get-tourist-attraction/aidemo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: location,
          }),
        }
      );
      const jsonData = await response.json();
      setLocation(jsonData.locations);
      setFood(jsonData.foods);
      setShopping(jsonData.shopping);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <div className="flex flex-col justify-center items-center space-y-6">
      </div>
     

      <div className="">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Section */}
          <div className="rounded-lg shadow-sm p-4 hover:shadow-md border border-gray-200">
            <h3 className="text-xl font-medium mb-2 flex items-center space-x-2">
              <BsFillGeoAltFill className="text-green-700 text-xl mr-2" />
              <span className="font-bold">Locations:</span>
            </h3>
            {location.map((al, index) => (
              <p key={index} className="text-lg text-justify mb-2 my-9">
              <p className=" font-bold">{al.split(':')[0]}</p><p>{al.split(':')[1]}</p>
            </p>
            ))}
          </div>

          {/* Food Section */}
          <div className="rounded-lg shadow-sm p-4 hover:shadow-md border border-gray-200">
            <h3 className="text-xl font-medium mb-2 flex items-center space-x-2">
              <svg
                className="w-6 h-6 fill-current text-green-700 mr-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.797 1.833A1 1 0 016.667 2h12.336A1 1 0 0120 2.833v12.334A1 1 0 0119.167 16H8.834a1 1 0 01-1-1V5.167a1 1 0 112 0v10.833zM10 15a1 1 0 001-1V11a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold">Must-Try Foods:</span>
            </h3>
            {foods.map((al, index) => (
             <p key={index} className="text-lg text-justify mb-2 my-9">
             <p className=" font-bold">{al.split(':')[0]}</p><p>{al.split(':')[1]}</p>
           </p>
            ))}
          </div>

          {/* Shopping Section */}
          <div className="rounded-lg shadow-sm p-4 hover:shadow-md border border-gray-200">
            <h3 className="text-xl font-medium mb-2 flex items-center space-x-2">
              <BsFillMapFill className="text-green-700 text-xl mr-2" />
              <span className="font-bold">Popular Shopping Spots:</span>
            </h3>
            {shopping.map((al, index) => (
              <p key={index} className="text-lg text-justify mb-2 my-9">
              <p className=" font-bold">{al.split(':')[0]}</p><p>{al.split(':')[1]}</p>
            </p>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SearchLocations;


