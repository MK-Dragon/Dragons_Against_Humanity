// ItemCard.jsx

import React from 'react';


export default function  ItemCard({ title, description, imageSrc, buttonText, buttonLink }) {
  return <div className="w-full sm:w-80 bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out border border-gray-100">
      
      {/* Card Image */}
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }} // Handle image load errors
      />
      
      {/* Card Body */}
      <div className="p-6">
        
        {/* Title */}
        <h5 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h5>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Button/Action */}
        <a 
          href={buttonLink} 
          className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-medium text-base rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          onClick={(e) => {
            // Prevent actual navigation for demo purposes
            e.preventDefault();
            console.log(`Clicked ${title} button: ${buttonText}`);
            // In a real app, you would handle the click logic here (e.g., adding to cart, navigating)
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
}