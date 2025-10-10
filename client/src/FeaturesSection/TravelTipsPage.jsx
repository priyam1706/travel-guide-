import React, { useRef, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const TravelBlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Article Title 1',
      image: 'https://via.placeholder.com/300',
      description: 'Write engaging travel articles or blogs covering various topics, such as destination guides, travel tips, personal travel experiences, and industry updates.',
    },
    {
      id: 2,
      title: 'Article Title 2',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
    // Add more articles here...
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      containerRef.current.scrollLeft += 2; // Adjust the scroll speed here
    }, 50); // Adjust the scroll interval here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-8 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Travel Blog or Articles</h1>
      <div ref={containerRef} className="flex flex-nowrap gap-6">
        {/* Map over the articles array to dynamically generate cards */}
        {articles.map(article => (
          <div key={article.id} className="card-wrapper">
            <Card
              hoverable
              className="w-full border rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              cover={<img alt={article.title} src={article.image} className="h-40 object-cover" />}
              style={{ borderColor: 'transparent' }}
            >
              <Meta title={article.title} description={article.description} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelBlogPage;
