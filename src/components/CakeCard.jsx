import React from 'react';
import { ShoppingCartIcon, StarIcon, HeartIcon } from './Icons';

const CakeCard = ({ cake }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={cake.image} 
          alt={cake.name}
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow ${
            isFavorite ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          <HeartIcon filled={isFavorite} />
        </button>
        <div className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {cake.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{cake.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{cake.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <div className="text-yellow-400">
              <StarIcon />
            </div>
            <span className="text-sm text-gray-600 ml-1">{cake.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-600">${cake.price}</span>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
            <ShoppingCartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;