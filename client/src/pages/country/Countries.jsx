import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search, Globe, AlertCircle, Loader, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [codeSearchTerm, setCodeSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [searchType, setSearchType] = useState('name'); // 'name' or 'code'
  const navigate = useNavigate();
  
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    fetchAllCountries();
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteCountries')) || [];
    setFavorites(savedFavorites);
  }, []);

  const fetchAllCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch countries');
    } finally {
      setLoading(false);
    }
  };

  const fetchCountryByName = async (name) => {
    if (name.trim() === '') {
      fetchAllCountries();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
      setCountries(response.data);
      setError(null);
    } catch (err) {
      setError('No country found');
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountryByCode = async (code) => {
    if (code.trim() === '') {
      fetchAllCountries();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code.toLowerCase()}`);
      setCountries(Array.isArray(response.data) ? response.data : [response.data]);
      setError(null);
    } catch (err) {
      setError('No country found with that code');
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountriesByRegion = async (region) => {
    if (!region) {
      fetchAllCountries();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
      setCountries(response.data);
      setError(null);
    } catch (err) {
      setError(`Failed to fetch countries in ${region}`);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (countryCode) => {
    const updatedFavorites = favorites.includes(countryCode)
      ? favorites.filter(code => code !== countryCode)
      : [...favorites, countryCode];
    
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteCountries', JSON.stringify(updatedFavorites));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (searchType === 'name') {
      fetchCountryByName(value);
    }
  };

  const handleCodeSearchChange = (e) => {
    const value = e.target.value;
    setCodeSearchTerm(value);
    if (searchType === 'code') {
      fetchCountryByCode(value);
    }
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    setSearchTerm('');
    setCodeSearchTerm('');
    fetchAllCountries();
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    fetchCountriesByRegion(region);
  };

  const handleCountryClick = (country) => {
    navigate(`/country/${country.cca3}`);
  };

  const closeCountryDetails = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <Header favoritesCount={favorites.length}/>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8 sm:mb-10">
          
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col gap-4">
            {/* Search Type Toggle */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden self-start">
              <button
                onClick={() => handleSearchTypeChange('name')}
                className={`px-4 py-2 text-sm font-medium ${searchType === 'name' ? 'bg-gradient-to-br from-blue-900 to-blue-950 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Search by Name
              </button>
              <button
                onClick={() => handleSearchTypeChange('code')}
                className={`px-4 py-2 text-sm font-medium ${searchType === 'code' ? 'bg-gradient-to-br from-blue-900 to-blue-950 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Search by Code
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
              {/* Dynamic Search Input */}
              {searchType === 'name' ? (
                <div className="relative flex-grow group">
                  <input
                    type="text"
                    placeholder="Type country name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-4 pr-10 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:ring-1 group-hover:ring-indigo-300"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200" size={20} />
                </div>
              ) : (
                <div className="relative flex-grow group">
                  <input
                    type="text"
                    placeholder="Type country code (e.g., US, UK, CA)..."
                    value={codeSearchTerm}
                    onChange={handleCodeSearchChange}
                    className="w-full pl-4 pr-10 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:ring-1 group-hover:ring-indigo-300"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200" size={20} />
                </div>
              )}

              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white pr-8 cursor-pointer hover:border-indigo-300 transition-colors duration-200"
                >
                  <option value="">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 sm:mb-8 rounded-lg shadow-md flex items-start animate-fade-in">
            <AlertCircle className="text-red-500 mr-3 flex-shrink-0" size={24} />
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 space-y-4">
            <div className="relative">
              <Loader className="animate-spin text-indigo-600" size={32} />
              <div className="absolute inset-0 rounded-full border-2 border-indigo-100 animate-ping opacity-75"></div>
            </div>
            <p className="text-indigo-700 font-medium text-lg">Loading countries...</p>
            <p className="text-gray-500 text-sm">Discovering the world for you</p>
          </div>
        )}

        {!loading && countries.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {countries.map((country) => (
              <div
                key={country.cca3}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group relative"
                onClick={() => handleCountryClick(country)}
              >
                <div className="h-40 sm:h-48 overflow-hidden relative">
                  {country.flags?.png && (
                    <>
                      <img
                        src={country.flags.png}
                        alt={country.flags.alt || `Flag of ${country.name.common}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 
                      className="font-bold text-lg mb-1 text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                    >
                      {country.name.common}
                    </h2>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(country.cca3);
                      }}
                      className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.includes(country.cca3) ? 'fill-pink-500 text-pink-500' : ''}`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{
                        backgroundColor: getRegionColor(country.region)
                      }}></span>
                      <p className="text-sm text-gray-600">{country.region}</p>
                    </div>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">
                      {country.cca2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && countries.length === 0 && !error && (
          <div className="bg-white rounded-xl shadow-md p-8 sm:p-12 text-center transform transition-all duration-300 hover:scale-[1.01]">
            <div className="max-w-md mx-auto">
              <Globe className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {searchType === 'name' 
                  ? searchTerm 
                    ? `No matches for "${searchTerm}"`
                    : "Try searching for a country name"
                  : codeSearchTerm
                    ? `No matches for code "${codeSearchTerm}"`
                    : "Try searching for a country code"
                }
              </h3>
              <p className="text-gray-500">
                {searchType === 'name'
                  ? "Or try adjusting your filter criteria"
                  : "Country codes are usually 2-3 letters (e.g., US, UK, CA)"
                }
              </p>
            </div>
          </div>
        )}

        {selectedCountry && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div 
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedCountry.name.common}</h2>
                  <button 
                    onClick={closeCountryDetails}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative h-48 sm:h-56 overflow-hidden mb-6 rounded-lg group">
                  <img 
                    src={selectedCountry.flags.png} 
                    alt={selectedCountry.flags.alt || `Flag of ${selectedCountry.name.common}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 mb-1">Official Name</p>
                    <p className="text-lg font-semibold">{selectedCountry.name.official}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 mb-1">Region</p>
                    <p className="text-lg font-semibold flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{
                        backgroundColor: getRegionColor(selectedCountry.region)
                      }}></span>
                      {selectedCountry.region}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 mb-1">Capital</p>
                    <p className="text-lg font-semibold">{selectedCountry.capital?.[0] || 'N/A'}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 mb-1">Country Code</p>
                    <p className="text-lg font-semibold">{selectedCountry.cca2}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500 mb-1">Population</p>
                    <p className="text-lg font-semibold">{selectedCountry.population.toLocaleString()}</p>
                  </div>
                </div>
                
                <button
                  onClick={closeCountryDetails}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
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

export default Countries;