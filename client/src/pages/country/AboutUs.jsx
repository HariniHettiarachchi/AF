import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-150 text-blue-900 p-4 sm:p-8">
      <Header />
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-bold text-blue-900">GeoVista</span>, your ultimate destination for exploring the world's geography. 
          Our mission is to provide a comprehensive platform where users can discover detailed information about every country, 
          including population, languages, capitals, and more. Whether you're a student, traveler, or data enthusiast, 
          GeoVista is designed to empower your curiosity and make learning about the world engaging and accessible.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          With interactive features like advanced search, region-based exploration, and favorite country tracking, 
          GeoVista combines a user-friendly interface with rich global intelligence. Our goal is to inspire a deeper understanding 
          of the diverse cultures and landscapes that make up our planet.
        </p>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-2">
          <strong>Email:</strong> support@geovista.com
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-2">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Address:</strong> 123 GeoVista Lane, World City, Earth
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
