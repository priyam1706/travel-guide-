// ServiceSection.js

import React from "react";
import ServiceCard from "../ServiceSections/serviceCard";
import WeatherCard from "../ServiceSections/WeatherCard";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Services = [
  {
    title: "Best Travel",
    description:
      "Explore the world with the best travel destinations, offering unforgettable experiences and adventures.",
    iconName:
      "https://imgs.search.brave.com/MyLVBXmza9xEr_H6838Sx7OIJRcSWeRtl7XEfDtPUvA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA2L3By/YWd1ZS10cmF2ZWwt/Y3plY2gtcmVwdWJs/aWMtMTAtYXVnLTIw/MTgtc2NhbGVkLmpw/Zz9yZXNpemU9NzAw/LDQ2Ng", // Update with the actual image path
    link: "/besttravel", // Example link, update with the actual link
  },
  {
    title: "Best Accommodation",
    description:
      "Discover the finest accommodations around the globe, providing comfort, luxury, and exceptional service.",
    iconName:
      "https://imgs.search.brave.com/8jZVBseSx8KTg2JHJy2aChipPJeU2B8QfslNQCkFlW8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93aGVy/ZWludGhld29ybGRp/c25pbmEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/L2ZyZWUtYWNjb21t/b2RhdGlvbi5qcGVn", // Update with the actual image path
    link: "/Accommodation", // Example link, update with the actual link
  },
  {
    title: "Best Foods",
    description:
      "Savor the flavors of the world with the best culinary experiences, from street food to gourmet cuisine.",
    iconName:
      "https://imgs.search.brave.com/PhNMA-i9BCTD3buqtT-UiwJAf7G1IAG7h5Hnpmja6MY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ0/NDc4NzA4L3Bob3Rv/L2NvdXBsZS1lYXRp/bmctbHVuY2gtd2l0/aC1mcmVzaC1zYWxh/ZC1hbmQtYXBwZXRp/emVycy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eFpkSUlI/dmFrUXJZQ2JSNTlS/TThucmhFbncteHU0/bkUtQk9lT2hRUG5j/az0", // Update with the actual image path
    link: "/bestfood", // Example link, update with the actual link
  },
  {
    title: "Best Tourist Attraction",
    description:
      "Experience the wonders of the world at the best tourist attractions, showcasing history, culture, and natural beauty.",
    iconName:
      "https://imgs.search.brave.com/tHvuRZ4fCZqLI57_mAvVF90K3SMUpI_gS_QSIqGkHy4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQy/OTk2NzEyL3Bob3Rv/L2NvdXBsZS1vZi10/b3VyaXN0cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Ujc2/OF9qUTIyNkhjMDZZ/S0NhMEJ6cllsblJR/UGxqeHY3QkpNOWg0/Nk4yVT0", // Update with the actual image path
    link: "/TourismAttraction", // Example link, update with the actual link
  },
  {
    title: "Budget Friendly",
    description:
      "Explore affordable travel options and budget-friendly destinations without compromising on quality or experiences.",
    iconName:
      "https://imgs.search.brave.com/x94jV13iS47QUZwp7x8HzuBQx0RKLvrohkf2VPHevuU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzM1LzQzLzY3/LzM2MF9GXzQzNTQz/NjcxN19yVnBpWkI4/VXFhNGtYYmhJdkJ6/YnFxTHdkUzJ2ZUxD/TC5qcGc", // Update with the actual image path
    link: "/BudgetFriendlyBlog", // Example link, update with the actual link
  },
  {
    title: "Check Weather",
    description:
      "Get the latest weather updates for your location and plan your activities accordingly. Click here to check weather",
    iconName:
      "https://imgs.search.brave.com/aRW5FOFPRREJmC3GR7U4RFtqXaqlpfDpm4JCDE46q5U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzcwLzM5Lzcw/LzM2MF9GXzcwMzk3/MDkxX0I1MHFNMEJm/MGJSbHFRdDZJZERP/NDl1WEJhMDRyR2xz/LmpwZw", // Update with the actual image path
    link: "/CheckWeather", // Example link, update with the actual link
  },
];

const ServiceSection = () => {
  return (
    <div className="container mx-auto p-8 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-3 gap-8">
        {Services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="flex justify-center items-center"
          >
            <ServiceCard service={service} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
