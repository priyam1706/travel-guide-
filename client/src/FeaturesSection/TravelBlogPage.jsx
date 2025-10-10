import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const TravelBlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Top 10 Must-Visit Destinations in Asia',
      image: 'https://imgs.search.brave.com/d5Qz0i2ES9XeWgUWqG6fK9vP99gJ_ZbVqMHPMbQ-mNM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDYvc2luZ2Fwb3Jl/MS00MDB4MjY5Lmpw/Zw',
      description: 'Explore the top destinations in Asia, from the bustling streets of Tokyo to the serene beaches of Bali.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'deepak',
      link: 'https://travel.usnews.com/rankings/best-asian-vacations/',
    },
    {
      id: 2,
      title: 'Adventure Travel: A Thrill-Seeker\'s Guide',
      image: 'https://imgs.search.brave.com/jSz2YucJMPKiBFflPURjd-ovSMZtzuISg_oPBOnznRw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q0/RDEyQVFGZWFFN25l/OUk1MHcvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNzIw/XzEyODAvMC8xNjk1/OTgyNjgzNzY4P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD02VXJR/RWtDZWVFV0xqZ0xU/Vkg0UEZyN3N5dHRk/UzFXdFBqbDdITlpl/bDZN',
      description: 'Embark on adrenaline-pumping adventures around the world, from skydiving in New Zealand to trekking the Inca Trail.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'smith',
      link: 'https://www.travelchannel.com/interests/outdoors-and-adventure/photos/adventures-for-the-thrill-seeker',
    },
    {
      id: 3,
      title: 'Culinary Journeys: Discovering Global Flavors',
      image: 'https://imgs.search.brave.com/AMCmEgXccqAJa--RUtujdqbMhm_kfjLVe68gjkcNkv0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdktPdGloWThM/LmpwZw',
      description: 'Indulge your taste buds with our culinary travel guide, featuring the best street food, local delicacies, and fine dining experiences.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Alice Johnson',
      link: 'https://medium.com/@sheetal20034/culinary-adventures-discovering-global-flavors-and-foods-185e409c21ad',
    },
    {
      id: 4,
      title: 'Solo Travel: Embracing Independence',
      image: 'https://imgs.search.brave.com/h8XwleR9b_wm_HFjs0ngZwZOIU76lREHFyCBn1pkEMA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q0/RTEyQVFIUE5XTkda/bUh2cUEvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNjAw/XzIwMDAvMC8xNjg4/MDM0OTg1MDc5P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD11N25v/aWhxRlhDdXR6YWxZ/S2s5MkZpYWZPSWNT/UUhTeVpZYTdlWl9s/NVk4',
      description: 'Gain insights and tips for solo travel adventures, empowering you to explore the world independently.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Praksh',
      link: 'https://www.linkedin.com/pulse/rise-solo-travel-embracing-independence-personal-growth',
    },
  ];

  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2; // Adjust the scroll speed here
        if (containerRef.current.scrollLeft >= (containerRef.current.scrollWidth - containerRef.current.clientWidth)) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 50); // Adjust the scroll interval here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Travel Blog</h1>
      <div
        ref={containerRef}
        className="overflow-x-auto whitespace-nowrap"
        style={{ overflow: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
      >
        {/* Map over the articles array to dynamically generate cards */}
        {articles.map((article, index) => (
          <a key={article.id} href={article.link} target="_blank" rel="noopener noreferrer" className="inline-block mr-4">
            <Card
              hoverable
              className="w-64 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-gray-900"
              cover={<img alt={article.title} src={article.image} className="h-40 object-cover" />}
            >
              <Meta title={article.title} description={article.description} />
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TravelBlogPage;
