import React from 'react';

const TravelBlogPage = () => {
  const blogPosts = [
    {
      title: '10 Must-Visit Beaches for Your Summer Getaway',
      author: 'Jessica Adams',
      date: 'June 10, 2024',
      content: 'Whether you love surfing, snorkeling, or just soaking up the sun, these top 10 beaches around the world offer something for everyone.',
    },
    {
      title: 'Exploring the Wonders of Machu Picchu',
      author: 'Michael Thompson',
      date: 'May 20, 2024',
      content: 'Join us on a journey through the ancient ruins of Machu Picchu in Peru, a UNESCO World Heritage Site and one of the most iconic destinations in South America.',
    },
    {
      title: 'Safari Adventure: Discovering the Big Five in Africa',
      author: 'Emily Wilson',
      date: 'April 5, 2024',
      content: 'Embark on an unforgettable safari adventure in Africa and witness the majesty of lions, elephants, rhinos, buffaloes, and leopards in their natural habitat.',
    },
    {
      title: 'The Magic of Northern Lights: Chasing Aurora Borealis in Scandinavia',
      author: 'Daniel Harris',
      date: 'March 15, 2024',
      content: 'Experience the breathtaking beauty of the Northern Lights in Norway, Sweden, and Finland. Join us as we chase the elusive Aurora Borealis across the Arctic sky.',
    },
    {
      title: 'Island Paradise: Exploring the Maldives',
      author: 'Sophia Martinez',
      date: 'February 28, 2024',
      content: 'Discover the luxurious resorts, crystal-clear waters, and vibrant marine life of the Maldives, a tropical paradise perfect for honeymooners and beach lovers alike.',
    },
    {
      title: 'Cultural Delights: A Food Lover’s Guide to Italy',
      author: 'David Lee',
      date: 'January 10, 2024',
      content: 'Indulge in the rich flavors and culinary traditions of Italy as we explore its diverse regions, from the pasta perfection of Naples to the wine-soaked hills of Tuscany.',
    },
    {
      title: 'City of Lights: A Weekend Getaway in Paris',
      author: 'Olivia Taylor',
      date: 'December 20, 2023',
      content: 'Experience the romance and charm of Paris as we stroll along the Seine, savor croissants at sidewalk cafes, and admire iconic landmarks like the Eiffel Tower and Louvre Museum.',
    },
    {
      title: 'Adventure in the Land of Fire and Ice: Exploring Iceland',
      author: 'Matthew Johnson',
      date: 'November 5, 2023',
      content: 'From cascading waterfalls and geothermal hot springs to rugged glaciers and volcanic landscapes, Iceland offers unparalleled adventures for outdoor enthusiasts.',
    },
    {
      title: 'Hidden Gems: Off the Beaten Path in Southeast Asia',
      author: 'Emma Clark',
      date: 'October 15, 2023',
      content: 'Escape the crowds and discover the hidden treasures of Southeast Asia, from ancient temples in Cambodia to pristine beaches in Vietnam.',
    },
    {
      title: 'Island Paradise: Exploring the Maldives',
      author: 'Sophia Martinez',
      date: 'February 28, 2024',
      content: 'Discover the luxurious resorts, crystal-clear waters, and vibrant marine life of the Maldives, a tropical paradise perfect for honeymooners and beach lovers alike.',
    },
    {
      title: 'Magical Morocco: A Journey Through the Sahara Desert',
      author: 'Alexander Brown',
      date: 'September 1, 2023',
      content: 'Immerse yourself in the vibrant culture and breathtaking landscapes of Morocco as we traverse the Sahara Desert on camelback and explore ancient medinas.',
    },
    {
      title: 'City of Lights: A Weekend Getaway in Paris',
      author: 'Olivia Taylor',
      date: 'December 20, 2023',
      content: 'Experience the romance and charm of Paris as we stroll along the Seine, savor croissants at sidewalk cafes, and admire iconic landmarks like the Eiffel Tower and Louvre Museum.',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">BestTravel Blog</h1>
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

export default TravelBlogPage;
