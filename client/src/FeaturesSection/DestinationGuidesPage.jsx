import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const DestinationGuides = () => {
  // Array of objects containing information about each destination
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      image: 'https://via.placeholder.com/300',
      description: 'Paris, the capital of France, is famed for its elegant architecture, world-class art collections, and romantic ambiance. Explore iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.',
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      image: 'https://via.placeholder.com/300',
      description: 'Tokyo, the bustling capital of Japan, offers a unique blend of modernity and tradition. Discover vibrant neighborhoods, delicious cuisine, and cultural attractions such as Senso-ji Temple and Tokyo Skytree.',
    },
    {
      id: 3,
      name: 'Rome, Italy',
      image: 'https://via.placeholder.com/300',
      description: 'Rome, the Eternal City, is a treasure trove of ancient history, art, and architecture. Immerse yourself in the glory of the Roman Empire by visiting landmarks like the Colosseum, Roman Forum, and Vatican City.',
    },
    {
      id: 4,
      name: 'New York City, USA',
      image: 'https://via.placeholder.com/300',
      description: 'New York City, the city that never sleeps, is known for its iconic skyline, Broadway shows, and diverse culture. Explore attractions like Times Square, Central Park, and the Statue of Liberty.',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Destination Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Map over the destinations array to dynamically generate cards */}
        {destinations.map(destination => (
          <Card
            key={destination.id}
            hoverable
            className="w-full"
            cover={<img alt={destination.name} src={destination.image} />}
          >
            <Meta title={destination.name} description={destination.description} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DestinationGuides;
