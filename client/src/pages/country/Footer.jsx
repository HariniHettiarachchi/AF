import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white pt-12 pb-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Globe className="text-indigo-300 mr-2" size={24} />
              <h2 className="text-xl font-bold text-white">GeoVista</h2>
            </div>
            <p className="text-indigo-200 text-sm">
              Discover the world's countries, explore cultures, compare statistics, and learn about our beautiful planet.
            </p>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => window.open('https://github.com', '_blank')}
                className="text-indigo-200 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </button>
              <button
                onClick={() => window.open('https://twitter.com', '_blank')}
                className="text-indigo-200 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </button>
              <button
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="text-indigo-200 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-indigo-100">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  All Countries
                </Link>
              </li>
              <li>
                <Link to="/regions" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  By Region
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  World Map
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Features */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-indigo-100">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/compare" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  Compare Countries
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  Geography Quiz
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  Global Statistics
                </Link>
              </li>
              <li>
                <Link to="/travel" className="text-indigo-200 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                  Travel Guide
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-indigo-100">Stay Updated</h3>
            <p className="text-indigo-200 text-sm mb-4">
              Subscribe to our newsletter for updates on new features and country spotlights.
            </p>
            <form className="flex flex-col space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg bg-indigo-800/50 border border-indigo-700 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={16} />
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1">
                <span>Subscribe</span>
                <Heart size={16} className="ml-1" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-indigo-800 my-6"></div>
        
        {/* Bottom Section with Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-indigo-300 text-sm mb-4 md:mb-0">
            © {currentYear} World Explorer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-indigo-300 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-indigo-300 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-indigo-300 hover:text-white text-sm transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;