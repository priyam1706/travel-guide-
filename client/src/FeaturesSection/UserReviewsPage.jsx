import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const UserReviewsPage = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2; 
        setScrollPosition(containerRef.current.scrollLeft);
      }
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  const handleScrollEnd = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
      const isEndOfScroll = scrollLeft + offsetWidth >= scrollWidth;
      
      if (isEndOfScroll) {
        containerRef.current.scrollLeft = 0;
        setScrollPosition(0);
      }
    }
  };
  

  const userReviewCategories = [
    {
      id: 1,
      name: 'Accommodations',
      description: 'Allow users to leave reviews and ratings for accommodations they have stayed at, including feedback on cleanliness, comfort, location, and service.',
      imageSrc: 'https://www.thetravelmagazine.net/wp-content/uploads/Arden-Exterior-4.jpg',
      userPhoto: 'https://imgs.search.brave.com/SFy4vpDllNdQVNMLXUd8NdQQd1jPNUZwh220hb3nx1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg0LzY3LzE5/LzM2MF9GXzg0Njcx/OTM5X2p4eW1vWVpP/OE9lYWNjM0pSQkRF/OGJTWEJXajBaZkE5/LmpwZw',
      userName: 'Abhishek',
      link: 'https://www.traveltips4trip.com/travel-reviews/accommodation-reviews/',
    },
    {
      id: 2,
      name: 'Dining Options',
      description: 'Enable users to share their dining experiences and rate restaurants based on food quality, ambiance, service, and value for money.',
      imageSrc: 'https://imgs.search.brave.com/781OYPELxy3GtE4lz5MAQxM05YLIXUJ-GmdoeJy-SGM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci9YUE5N/cWlkWWxwaEwwSWx6/WXVvQUpXcWx0WG89/LzB4MDo1NjgweDM3/ODYvMTIwMHg5MDAv/ZmlsdGVyczpmb2Nh/bCgxMDYweDE2NjI6/MTk2OHgyNTcwKS9j/ZG4udm94LWNkbi5j/b20vdXBsb2Fkcy9j/aG9ydXNfaW1hZ2Uv/aW1hZ2UvNjUyNTM3/ODAvMTIzMDM0MDE0/MS4xNC5qcGc',
      userPhoto: 'https://imgs.search.brave.com/SFy4vpDllNdQVNMLXUd8NdQQd1jPNUZwh220hb3nx1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg0LzY3LzE5/LzM2MF9GXzg0Njcx/OTM5X2p4eW1vWVpP/OE9lYWNjM0pSQkRF/OGJTWEJXajBaZkE5/LmpwZw',
      userName: 'Smeer',
      link: 'https://www.washingtonpost.com/food/dining/',
    },
    {
      id: 3,
      name: 'Attractions',
      description: 'Provide reviews and ratings for tourist attractions, landmarks, and points of interest, helping users plan their itinerary and explore new destinations.',
      imageSrc: 'https://imgs.search.brave.com/115ekwcs4Ka7bfgMONJKdJSCkqiWUAuIxJB1HEDrsw4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/eG9sYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDIv/dG91ci1pdGluZXJh/cnktNzY4eDc2OC5w/bmc',
      userPhoto: 'https://imgs.search.brave.com/SFy4vpDllNdQVNMLXUd8NdQQd1jPNUZwh220hb3nx1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg0LzY3LzE5/LzM2MF9GXzg0Njcx/OTM5X2p4eW1vWVpP/OE9lYWNjM0pSQkRF/OGJTWEJXajBaZkE5/LmpwZw',
      userName: 'Ritik',
      link: 'https://www.tripadvisor.com/blog/best-travel-attractions-most-popular/',
    },
    {
      id: 4,
      name: 'Transportation',
      description: 'Share reviews and ratings for transportation options such as airlines, trains, buses, and car rental services, assisting users in making informed travel decisions.',
      imageSrc: 'https://imgs.search.brave.com/pvMm3ju085rIdZIQ6OKzaT2mscuw4J0oQWChCGpGErk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3BvbWFnYXppbmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L3Utcy1k/ZXBhcnRtZW50LW9m/LXRyYW5zcG9ydGF0/aW9uLXRvLXJldmll/dy1haXJsaW5lcy1k/YXRhLXNlY3VyaXR5/LWFuZC1wcml2YWN5/LXBvbGljaWVzXzE1/MDAuanBn',
      userPhoto: 'https://imgs.search.brave.com/SFy4vpDllNdQVNMLXUd8NdQQd1jPNUZwh220hb3nx1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg0LzY3LzE5/LzM2MF9GXzg0Njcx/OTM5X2p4eW1vWVpP/OE9lYWNjM0pSQkRF/OGJTWEJXajBaZkE5/LmpwZw',
      userName: 'Deepak',
      link: 'https://www.transportreviews.com/',
    },
    
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User Reviews and Ratings</h1>
      <div
        className="overflow-x-auto whitespace-nowrap flex"
        style={{ overflow: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        ref={containerRef}
        onScroll={handleScrollEnd}
      >
        {userReviewCategories.map(category => (
          <a href={category.link} key={category.id} target="_blank" className="inline-block mr-4 ">
            <Card
              hoverable
              className="w-64 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-gray-900"
              cover={<img alt={category.name} src={category.imageSrc} className="h-40 object-cover" />}
            >
              <Meta
                title={category.name}
                description={category.description}
                avatar={<img src={category.userPhoto} alt={category.userName} className="rounded-full w-6 h-6 mr-2" />}
              />
              <div className="mt-2 text-sm text-gray-600">Reviewed by: {category.userName}</div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

export default UserReviewsPage;
