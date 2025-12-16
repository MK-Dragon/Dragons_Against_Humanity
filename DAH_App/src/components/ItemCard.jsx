import React from 'react';

const ItemCard = ({ title, description, imageSrc, buttonText, buttonLink }) => {
  return (
    // 1. **Card Container:** w-full is important for grid items, 
    //    and h-full ensures all cards are the same height within the row.
    <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl transition duration-300">
      
      {/* Product Image */}
      {/* Ensure the image container has a fixed aspect ratio for uniformity */}
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover" 
          src={imageSrc} 
          alt={title} 
        />
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h2>
          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow">
            {description}
          </p>
        </div>
        
        {/* Button - Aligned to the bottom */}
        <div className="mt-4">
          <a
            href={buttonLink}
            className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 text-center w-full"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;