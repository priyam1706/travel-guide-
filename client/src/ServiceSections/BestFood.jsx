
import React from 'react';

const FoodTravelBlog = () => {
  const blogPosts = [
    {
      title: 'The Ultimate Street Food Guide: Bangkok, Thailand',
      author: 'Jessica Adams',
      date: 'June 10, 2024',
      content: 'Discover the vibrant flavors and aromas of Bangkok’s bustling street food scene, from savory pad Thai and spicy som tam to crispy fried insects and creamy coconut ice cream.',
    },
    {
      title: 'Savoring Sushi: A Culinary Journey Through Tokyo, Japan',
      author: 'Michael Thompson',
      date: 'May 20, 2024',
      content: 'Embark on a sushi pilgrimage through Tokyo’s renowned fish markets and sushi bars, where you’ll taste the freshest nigiri, sashimi, and maki rolls prepared by master chefs.',
    },
    {
      title: 'Mouthwatering Tapas Tour: Exploring Barcelona, Spain',
      author: 'Emily Wilson',
      date: 'April 5, 2024',
      content: 'Indulge in the flavors of Spain as we sample an array of tantalizing tapas in Barcelona, from crispy patatas bravas and garlic-infused gambas al ajillo to creamy tortilla española and savory jamón ibérico.',
    },
    {
      title: 'Spice Route: A Culinary Adventure in India',
      author: 'Daniel Harris',
      date: 'March 15, 2024',
      content: 'Journey through the diverse culinary landscapes of India, where every region offers a unique blend of spices, herbs, and cooking techniques. From fragrant biryanis in Hyderabad to fiery vindaloos in Goa, prepare your taste buds for an unforgettable experience.',
    },
    {
      title: 'Gourmet Delights: Exploring the Food Markets of Paris, France',
      author: 'Sophia Martinez',
      date: 'February 28, 2024',
      content: 'Immerse yourself in the gastronomic wonders of Paris as we wander through its vibrant food markets, sampling artisanal cheeses, freshly baked baguettes, decadent pastries, and other culinary delights.',
    },
    {
      title: 'Flavors of Italy: A Culinary Tour Through Tuscany',
      author: 'David Lee',
      date: 'January 10, 2024',
      content: 'Experience la dolce vita as we journey through the picturesque countryside of Tuscany, indulging in hearty pastas, flavorful sauces, and exquisite wines that define Italian cuisine.',
    },
    {
      title: 'Taste of the Mediterranean: Exploring Greek Cuisine',
      author: 'Olivia Taylor',
      date: 'December 20, 2023',
      content: 'Delve into the sun-drenched flavors of Greece as we sample traditional dishes like moussaka, souvlaki, and spanakopita, accompanied by tangy tzatziki and sweet baklava.',
    },
    {
      title: 'Flavors of the Far East: A Culinary Journey Through Vietnam',
      author: 'Matthew Johnson',
      date: 'November 5, 2023',
      content: 'Embark on a gastronomic adventure through Vietnam, where fragrant herbs, crisp vegetables, and bold spices combine to create dishes like pho, banh mi, and fresh spring rolls that tantalize the taste buds.',
    },
    {
      title: 'Tasting Tradition: Exploring Moroccan Cuisine',
      author: 'Emma Clark',
      date: 'October 15, 2023',
      content: 'Discover the rich flavors and aromatic spices of Moroccan cuisine as we feast on tagines, couscous, and pastilla in bustling souks and serene riads across the country.',
    },
    
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">BestFood Travel Blog</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="border border-gray-300 rounded p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">By {post.author} | {post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTravelBlog;
