import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-6">Sweet Moments, Delivered</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover our handcrafted cakes made with love and the finest ingredients. 
          Perfect for every celebration and sweet craving.
        </p>
        <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;