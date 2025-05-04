import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Regions = () => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCountriesByRegion = async (region) => {
    setLoading(true);
    setSelectedRegion(region);
    setError(null);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
      setCountries(response.data);
    } catch (err) {
      setError('Failed to fetch countries for this region.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-150 text-blue-900 p-4 sm:p-8">
      <Header />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Region selection and countries */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center mb-8">Explore by Region</h1>
          <div className="flex flex-col gap-6 mb-8">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => fetchCountriesByRegion(region)}
                className="bg-white rounded-xl shadow-lg py-6 px-8 text-xl font-semibold text-gray-800 hover:bg-indigo-100 transition-all duration-300"
              >
                {region}
              </button>
            ))}
          </div>

          {loading && (
            <div className="text-center text-indigo-600 font-medium">Loading countries...</div>
          )}

          {error && (
            <div className="text-center text-red-600 font-medium">{error}</div>
          )}

          {selectedRegion && !loading && !error && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Countries in {selectedRegion}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {countries.map((country) => (
                  <div
                    key={country.cca3}
                    onClick={() => navigate(`/country/${country.cca3}`)}
                    className="bg-white rounded-lg shadow-md p-4 text-center font-medium text-gray-800 hover:bg-indigo-100 transition-all duration-300 cursor-pointer"
                  >
                    {country.name.common}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Centered image */}
        <div className="flex justify-center items-center my-8">
          <img src="/map3 (2).png" alt="World Map" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Regions;
