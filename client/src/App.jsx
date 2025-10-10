import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage"; // Import your NotFoundPage component
import Header from "./components/Header";
import MyFooter from "./components/footer";
import AboutPage from "./Pages/aboutus";
import LoginPage from "./Pages/login";
import HomePage from "./components/HomePage";
import ContactAndFAQsPage from "./Pages/ContactAndFAQsPage";
import Signup from "./Pages/signup";
import WeatherCard from "./ServiceSections/WeatherCard";
import ServiceSection from "./components/ServiceSection";
import AccommodationBlog from "./ServiceSections/BestAccommodation";
import FoodTravelBlog from "./ServiceSections/BestFood";
import TourismAttractionBlog from "./ServiceSections/BestTouristAttraction";
import TravelBlogPage from "./ServiceSections/BestTravel";
import BudgetFriendlyBlogPage from "./ServiceSections/budgetFriendly";
import AuthorizationPage from "./Pages/auth";
import Dashboard from "./Pages/dashboard";
import SearchDestination from "./components/SearchDestination";

const App = () => {
  return (
    <Router>
      
      <div className="flex flex-col min-h-screen">
      {/* <div className='fixed'> */}
      <Header />
      {/* </div> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/searchdestination" element={<SearchDestination />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/CheckWeather" element={<WeatherCard />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/bestfood" element={<FoodTravelBlog />} />
          <Route path="/Accommodation" element={<AccommodationBlog/>} />
          <Route path="/TourismAttraction" element={<TourismAttractionBlog />} />
          <Route path="/BudgetFriendlyBlog" element={<BudgetFriendlyBlogPage/>} />
          <Route path="/besttravel" element={<TravelBlogPage/>} />
          <Route path="/authorization" element={<AuthorizationPage/>} />
          <Route path="/support" element={<ContactAndFAQsPage />} />
          {/* Define other routes here */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <MyFooter />
      </div>
    </Router>
  );
};

export default App;
