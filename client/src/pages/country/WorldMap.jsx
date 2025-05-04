import React from 'react';
import Header from './Header';
import Footer from './Footer';

const WorldMap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <Header />
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">World Map</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          Explore the world with our interactive map. Click the map below to find detailed information about countries.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.mapsofworld.com/world-map-image.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src="/worldmap.jpg"
              alt="World Map"
              className="rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            />
            <p className="text-center text-indigo-600 font-medium mt-4 group-hover:underline">
              Click here to explore more about countries
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorldMap;
