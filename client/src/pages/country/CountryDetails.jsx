import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Loader, AlertCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function CountryDetails() {
  const { code } = useParams(); // Get country code from URL
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
        setCountry(response.data[0]); // API returns an array
        setError(null);
      } catch (err) {
        setError('Failed to fetch country details');
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [code]); // Removed 'fetchCountryDetails' from dependency array

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader className="animate-spin text-indigo-600" size={32} />
        <p className="text-indigo-700 font-medium mt-4">Loading country details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <AlertCircle className="text-red-500" size={32} />
        <p className="text-red-700 font-medium mt-4">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <Header />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-indigo-600 text-white py-2 px-4 rounded"
        >
          Back
        </button>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt || `Flag of ${country.name.common}`}
            className="w-48 h-32 object-cover rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{country.name.common}</h1>
            <p className="text-gray-600"><strong>Official Name:</strong> {country.name.official}</p>
            <p className="text-gray-600"><strong>Region:</strong> {country.region}</p>
            <p className="text-gray-600"><strong>Subregion:</strong> {country.subregion}</p>
            <p className="text-gray-600"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p className="text-gray-600"><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p className="text-gray-600"><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
            <p className="text-gray-600"><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CountryDetails;
