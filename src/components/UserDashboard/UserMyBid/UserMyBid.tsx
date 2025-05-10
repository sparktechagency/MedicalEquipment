"use client";
import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';


const  UserMyBid = () => {


const productsData = [
  {
    "id": 1,
    "type": "bid",
    "title": "GE Vivid S70 Ultrasound Machine",
    "description": "Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow. Combines high performance with portability for efficient diagnostics anytime, anywhere.",
    "price": 200,
    "myBidAmount": 210,
    "previousBidAmount": 205,
    "bidTime": "2024-10-11T23:10:00Z",
    "location": "New York, US",
    "imageUrl": "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png"
  },
  {
    "id": 2,
    "type": "win",
    "title": "GE Vivid S70 Ultrasound Machine",
    "description": "Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow. Combines high performance with portability for efficient diagnostics anytime, anywhere.",
    "price": 200,
    "myBidAmount": 210,
    "previousBidAmount": 205,
    "bidTime": "2024-10-11T23:10:00Z",
    "location": "New York, US",
    "imageUrl": "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png"
  },
  {
    "id": 3,
    "type": "bid",
    "title": "Philips EPIQ 7 Ultrasound Machine",
    "description": "Premium ultrasound system offering high-end imaging performance and workflow efficiency.",
    "price": 250,
    "myBidAmount": 260,
    "previousBidAmount": 255,
    "bidTime": "2024-10-12T10:00:00Z",
    "location": "Los Angeles, US",
    "imageUrl": "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png"
  }
]


  const [filter, setFilter] = useState('bid');
  const filteredProducts = productsData.filter(p => p.type === filter);

  return (
    <div className="w-full px-1 md:px-0 md:container mx-auto py-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter('bid')}
          className={`${filter === 'bid' ? 'bg-[#48B1DB] text-white' : 'bg-[#C9EDFB] text-gray-700'} px-4 py-2 rounded`}
        >
          Bid
        </button>
        <button
          onClick={() => setFilter('win')}
          className={`${filter === 'win' ? 'bg-[#48B1DB] text-white' : 'bg-[#C9EDFB] text-gray-700'} px-4 py-2 rounded`}
        >
          Win
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-4">
        Products ({filteredProducts.length})
      </h2>
      <div>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default UserMyBid