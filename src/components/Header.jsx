import React from 'react';
import { ShoppingCartIconLarge } from './Icons';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">SweetSpot</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-pink-200 transition-colors">Home</a>
            <a href="#" className="hover:text-pink-200 transition-colors">Cakes</a>
            <a href="#" className="hover:text-pink-200 transition-colors">Custom Orders</a>
            <a href="#" className="hover:text-pink-200 transition-colors">About</a>
            <a href="#" className="hover:text-pink-200 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCartIconLarge />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;