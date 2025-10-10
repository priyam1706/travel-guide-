// ServiceCard.js

import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ServiceCard = ({ service }) => {
  return (
    <a href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <Card
        hoverable
        className="w-64 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-gray-900"
        cover={<img alt={service.title} src={service.iconName} className="h-40 object-cover" />}
      >
        <Meta title={service.title} description={service.description} />
      </Card>
    </a>
  );
}

export default ServiceCard;
