import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Languages = () => {
  const [languages, setLanguages] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading] = useState(false); // Removed 'setLoading' as it is unused
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const languageMap = {};
        response.data.forEach((country) => {
          Object.values(country.languages || {}).forEach((language) => {
            if (!languageMap[language]) {
              languageMap[language] = [];
            }
            languageMap[language].push(country.name.common);
          });
        });
        setLanguages(languageMap);
      } catch (err) {
        setError('Failed to fetch languages.');
      }
    };

    fetchLanguages();
  }, []);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setCountries(languages[language]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-150 text-blue-900 p-4 sm:p-8">
      <Header />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Explore by Language</h1>
        {error && <div className="text-center text-red-600 font-medium">{error}</div>}
        {loading && <div className="text-center text-indigo-600 font-medium">Loading...</div>}
        {!selectedLanguage ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.keys(languages).map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageClick(language)}
                className="bg-white rounded-lg shadow-md p-4 text-center font-semibold text-gray-800 hover:bg-indigo-100 transition-all duration-300"
              >
                {language}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedLanguage('')}
              className="mb-4 bg-indigo-600 text-white py-2 px-4 rounded"
            >
              Back to Languages
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Countries that speak {selectedLanguage}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.map((country) => (
                <div
                  key={country}
                  onClick={() => navigate(`/countries`)}
                  className="bg-white rounded-lg shadow-md p-4 text-center font-medium text-gray-800 hover:bg-indigo-100 transition-all duration-300 cursor-pointer"
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Languages;
