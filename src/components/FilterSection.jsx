import React from 'react';

const FilterSection = ({ activeCategory, setActiveCategory }) => {
  const categories = ['All', 'Chocolate', 'Vanilla', 'Fruit', 'Red Velvet', 'Citrus', 'Coffee', 'Spice'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeCategory === category
                ? 'bg-pink-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
