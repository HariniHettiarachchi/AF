import React, { useState } from 'react';
import { Globe, Map, Heart, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ favoritesCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear any stored token
    navigate('/'); // Navigate to the login page
  };

  return (
    <header className="relative w-full z-50 rounded-2xl bg-blue-900 backdrop-blur-md shadow-xl transition-all duration-300 mb-8">

<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-900 to-blue-950 backdrop-blur-md shadow-lg transform skew-y-0 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-white rounded-full opacity-30 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform rotate-0 group-hover:rotate-180 transition-transform duration-700"></div>
              <Globe className="relative text-white z-10 w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-extrabold">
                <span className="text-white">Geo</span>
                <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">Vista</span>
              </h1>
              <div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {['Home', 'Languages', 'Regions', 'About Us'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/countries' : `/${item.toLowerCase().replace(' ', '') === 'about us' ? 'aboutus' : item.toLowerCase().replace(' ', '')}`}
                className="relative px-4 py-2 text-white font-medium group overflow-hidden"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            ))}
            
            <Link 
              to="/map" 
              className="relative ml-2 flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 overflow-hidden group"
            >
              <Map className="w-4 h-4 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
              <span>World Map</span>
              <span className="absolute inset-0 border border-white/30 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Link 
              to="/favorites"
              className="hidden sm:flex items-center px-3 py-1.5 text-white hover:bg-white/10 rounded-full transition-colors duration-200 relative group"
            >
              <Heart className="w-4 h-4 mr-1.5 group-hover:fill-pink-500 group-hover:text-pink-500 transition-colors duration-200" />
              <span>Favorites</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </Link>
            
            <button 
              onClick={handleLogout}
              className="hidden sm:flex items-center space-x-1 text-white hover:bg-white/10 rounded-full px-3 py-1.5 transition-colors duration-200"
            >
              <span>Logout</span>
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-xl shadow-2xl overflow-hidden transform origin-top animate-search-open z-50">
            <form onSubmit={handleSearchSubmit} className="flex items-center p-2">
              <Search className="text-gray-400 ml-2" size={20} />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none text-gray-800"
                autoFocus
              />
              <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
            <div className="px-3 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-500">Try searching for a country name, capital, or region</p>
            </div>
          </div>
        )}
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white text-blue-900 py-4 shadow-lg animate-fade-down z-40">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'Home', path: '/countries' },
                { name: 'Languages', path: '/languages' },
                { name: 'Regions', path: '/regions' },
                { name: 'Favorites', path: '/favorites' },
                { name: 'World Map', path: '/map' },
                { name: 'About Us', path: '/aboutus' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center px-4 py-3 text-blue-900 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-900 mr-2"></span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="flex items-center px-4 py-2 text-blue-900 text-sm">
                <Globe className="w-4 h-4 mr-2 text-blue-700" />
                <span>Explore our beautiful planet one country at a time</span>
              </div>
            </div>
          </nav>
        </div>
      )}
      
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 opacity-30 blur-xl hidden lg:block"></div>
      <div className="absolute -left-4 top-3/4 transform -translate-y-1/2 h-8 w-8 rounded-full bg-yellow-500 opacity-30 blur-lg hidden lg:block"></div>
    </header>
  );
};

export default Header;
