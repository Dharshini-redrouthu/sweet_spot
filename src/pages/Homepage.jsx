// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterSection from '../components/FilterSection';
import CakeCard from '../components/CakeCard';
import Footer from '../components/Footer';
import cakesData from '../data/cakes.json';
import '../index.css';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredCakes = activeCategory === 'All'
    ? cakesData
    : cakesData.filter(cake => cake.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Delicious Cakes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of handcrafted cakes, each made with premium ingredients 
              and designed to make your special moments unforgettable.
            </p>
          </div>

          <FilterSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
