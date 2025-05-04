import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heart, HeartOff, ArrowLeft, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Favorites() {
  const [favoriteCountries, setFavoriteCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavoriteCountries = async () => {
      const savedFavorites = JSON.parse(localStorage.getItem('favoriteCountries')) || [];
      
      if (savedFavorites.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${savedFavorites.join(',')}`);
        setFavoriteCountries(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch favorite countries');
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteCountries();
  }, []);

  const removeFavorite = (countryCode) => {
    const updatedFavorites = JSON.parse(localStorage.getItem('favoriteCountries')).filter(
      code => code !== countryCode
    );
    localStorage.setItem('favoriteCountries', JSON.stringify(updatedFavorites));
    setFavoriteCountries(favoriteCountries.filter(country => country.cca3 !== countryCode));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <Header />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8 sm:mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ArrowLeft className="text-blue-900" size={24} />
          </button>
          <div className="flex items-center">
            <Heart className="text-pink-500 mr-3 sm:mr-4" size={28} fill="currentColor" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-950 bg-clip-text text-transparent">
              Favorite Countries
            </h1>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 space-y-4">
            <div className="relative">
              <Heart className="animate-pulse text-pink-500" size={32} fill="currentColor" />
              <div className="absolute inset-0 rounded-full border-2 border-pink-100 animate-ping opacity-75"></div>
            </div>
            <p className="text-pink-700 font-medium text-lg">Loading your favorites...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 sm:mb-8 rounded-lg shadow-md flex items-start animate-fade-in">
            <AlertCircle className="text-red-500 mr-3 flex-shrink-0" size={24} />
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        ) : favoriteCountries.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 sm:p-12 text-center transform transition-all duration-300 hover:scale-[1.01]">
            <div className="max-w-md mx-auto">
              <HeartOff className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No favorites yet</h3>
              <p className="text-gray-500">
                You haven't added any countries to your favorites. Start exploring!
              </p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-md transition-all duration-300"
              >
                Explore Countries
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {favoriteCountries.map((country) => (
              <div
                key={country.cca3}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group relative"
              >
                <div className="h-40 sm:h-48 overflow-hidden relative">
                  {country.flags?.png && (
                    <>
                      <img
                        src={country.flags.png}
                        alt={country.flags.alt || `Flag of ${country.name.common}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                        onClick={() => navigate(`/country/${country.cca3}`)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 
                      className="font-bold text-lg mb-1 text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                      onClick={() => navigate(`/country/${country.cca3}`)}
                    >
                      {country.name.common}
                    </h2>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFavorite(country.cca3);
                      }}
                      className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
                    >
                      <Heart className="w-5 h-5" fill="currentColor" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full mr-2" style={{
                      backgroundColor: getRegionColor(country.region)
                    }}></span>
                    <p className="text-sm text-gray-600">{country.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function getRegionColor(region) {
  const colors = {
    'Africa': '#F59E0B',
    'Americas': '#10B981',
    'Asia': '#EF4444',
    'Europe': '#3B82F6',
    'Oceania': '#8B5CF6'
  };
  return colors[region] || '#9CA3AF';
}

export default Favorites;