import React from 'react';

const AccommodationBlog = () => {
  const blogPosts = [
    {
      title: 'Luxury Retreat: Overwater Bungalows in the Maldives',
      location: 'Maldives',
      author: 'Jessica Adams',
      date: 'June 10, 2024',
      content: 'Indulge in paradise with a stay at an overwater bungalow in the Maldives. Wake up to stunning ocean views, enjoy direct access to crystal-clear waters, and pamper yourself with world-class amenities and services.',
    },
    {
      title: 'Historic Charm: Boutique Hotels in Florence, Italy',
      location: 'Florence, Italy',
      author: 'Michael Thompson',
      date: 'May 20, 2024',
      content: 'Immerse yourself in the rich history and culture of Florence with a stay at a boutique hotel. Experience personalized service, elegant decor, and a central location close to iconic landmarks such as the Duomo and Ponte Vecchio.',
    },
    {
      title: 'Safari Glamping: Luxury Tents in South Africa',
      location: 'South Africa',
      author: 'Emily Wilson',
      date: 'April 5, 2024',
      content: 'Experience the thrill of safari adventure without sacrificing comfort with a stay at a luxury tented camp in South Africa. Enjoy the best of both worlds as you embark on game drives, bush walks, and starlit dinners under the African sky.',
    },
    {
      title: 'Mountain Retreat: Cozy Cabins in the Swiss Alps',
      location: 'Switzerland',
      author: 'Sophia Martinez',
      date: 'March 15, 2024',
      content: 'Escape to the tranquil beauty of the Swiss Alps with a stay in a cozy mountain cabin. Relax by the fireplace, savor panoramic views of snow-capped peaks, and explore nearby hiking trails and charming alpine villages.',
    },
    {
      title: 'Urban Oasis: Design Hotels in Tokyo, Japan',
      location: 'Tokyo, Japan',
      author: 'David Lee',
      date: 'February 28, 2024',
      content: 'Discover modern luxury and Japanese hospitality with a stay at a design hotel in Tokyo. Experience sleek architecture, stylish interiors, and innovative amenities in the heart of one of the world’s most dynamic cities.',
    },
    {
      title: 'Safari Glamping: Luxury Tents in South Africa',
      location: 'South Africa',
      author: 'Emily Wilson',
      date: 'April 5, 2024',
      content: 'Experience the thrill of safari adventure without sacrificing comfort with a stay at a luxury tented camp in South Africa. Enjoy the best of both worlds as you embark on game drives, bush walks, and starlit dinners under the African sky.',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Best Accommodation Blog</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="border border-gray-300 rounded p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.location} | By {post.author} | {post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationBlog;
