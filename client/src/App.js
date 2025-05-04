import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './pages/country/Countries';
import Login from './pages/country/Login';
import Register from './pages/country/Register';
import CountryDetails from './pages/country/CountryDetails';
import Favorites from './pages/country/Favorites';
import Regions from './pages/country/Regions';
import Languages from './pages/country/Languages';
import AboutUs from './pages/country/AboutUs';
import WorldMap from './pages/country/WorldMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/countries" element={<Countries />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/country/:code" element={<CountryDetails />} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/regions" element={<Regions />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/map" element={<WorldMap />} />
      </Routes>
    </Router>
  );
}

export default App;
