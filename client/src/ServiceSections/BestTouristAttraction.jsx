import React from 'react';

const TourismAttractionBlog = () => {
  const blogPosts = [
    {
      title: 'The Grand Canyon: A Natural Wonder',
      location: 'Arizona, USA',
      author: 'Jessica Adams',
      date: 'June 10, 2024',
      content: 'Explore the breathtaking beauty of the Grand Canyon, one of the world’s most iconic natural landmarks. From its towering cliffs and colorful rock formations to the winding Colorado River below, discover why millions of visitors are drawn to this majestic wonder of nature every year.',
    },
    {
      title: 'The Great Wall of China: A Monument to History',
      location: 'Beijing, China',
      author: 'Michael Thompson',
      date: 'May 20, 2024',
      content: 'Step back in time and walk along the ancient ramparts of the Great Wall of China, a UNESCO World Heritage Site and one of the most impressive architectural feats in history. Learn about its rich cultural significance and marvel at the panoramic views of the Chinese countryside stretching as far as the eye can see.',
    },
    {
      title: 'Machu Picchu: Lost City of the Incas',
      location: 'Cusco Region, Peru',
      author: 'Emily Wilson',
      date: 'April 5, 2024',
      content: 'Embark on a journey to the mystical ruins of Machu Picchu, nestled high in the Andes Mountains of Peru. Discover the secrets of this ancient Incan citadel as you wander through its terraced fields, temples, and palaces, and soak in the awe-inspiring beauty of the surrounding cloud forests.',
    },
    {
      title: 'Machu Picchu: Lost City of the Incas',
      location: 'Cusco Region, Peru',
      author: 'Emily Wilson',
      date: 'April 5, 2024',
      content: 'Embark on a journey to the mystical ruins of Machu Picchu, nestled high in the Andes Mountains of Peru. Discover the secrets of this ancient Incan citadel as you wander through its terraced fields, temples, and palaces, and soak in the awe-inspiring beauty of the surrounding cloud forests.',
    },
    {
      title: 'The Eiffel Tower: Symbol of Paris',
      location: 'Paris, France',
      author: 'Sophia Martinez',
      date: 'March 15, 2024',
      content: 'Experience the romance and elegance of Paris with a visit to the iconic Eiffel Tower. Ascend to the top for breathtaking views of the cityscape below, and learn about the tower’s fascinating history and cultural significance as a symbol of France’s capital.',
    },
    {
      title: 'Serengeti National Park: Safari Adventure in Africa',
      location: 'Tanzania',
      author: 'David Lee',
      date: 'February 28, 2024',
      content: 'Embark on an unforgettable safari adventure in Tanzania’s Serengeti National Park, home to the greatest wildlife spectacle on earth. Witness the annual migration of millions of wildebeest and zebra across the savannah, and encounter Africa’s iconic Big Five – lions, elephants, buffaloes, leopards, and rhinos – in their natural habitat.',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">BestTourism Attractions Blog</h1>
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

export default TourismAttractionBlog;
