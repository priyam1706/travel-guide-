import React from "react";
import HeroSection from "./heroSection";
import FamousPlaces from "./FamousPlaces";
import TravelBlogPage from "../FeaturesSection/TravelBlogPage";
import UserReviewsPage from "../FeaturesSection/UserReviewsPage";
import ServiceSection from "./ServiceSection";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
     <HeroSection/>
     
     <FamousPlaces/> 
     <ServiceSection/>
     <TravelBlogPage/>
     <UserReviewsPage/>
     
    </div>
  );
}

export default HomePage;
