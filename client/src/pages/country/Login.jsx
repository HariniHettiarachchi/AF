import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const hardcodedUser = {
      email: 'harini@gmail.com',
      password: 'Harini123'
    };

    if (form.email === hardcodedUser.email && form.password === hardcodedUser.password) {
      alert('Login successful');
      localStorage.setItem('token', 'hardcoded-token');
      navigate('/countries');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <img
              src="/globe4.png"
              alt="Globe"
              className="absolute inset-0 w-full h-full object-cover rounded-full animate-spin-slow"
            />
          </div>
        </div>

        {/* Animated Title */}
        <h1 className="text-5xl font-extrabold mb-4 text-white animate-title-fade">GeoVista</h1>
        <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto animate-subtitle-fade">
          Discover the world, one country at a time.
        </p>

        {/* Full-width White Section with Description and Image */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white text-blue-900 mb-16 p-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4">Explore Global Insights</h2>
            <p className="text-lg leading-relaxed">
              GeoVista is your window into the world's geography. This application allows you to explore comprehensive data about every country on Earth. From core statistics like population and capitals to cultural insights and geographic visuals, GeoVista combines a beautiful interface with rich global intelligence.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="/map1.png" alt="Description Visual" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Box 1 */}
          <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-25 transition-all">
            <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Global Coverage</h3>
            <p className="text-blue-100">Access detailed information about every country in the world.</p>
          </div>

          {/* Box 2 */}
          <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-25 transition-all">
            <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Advanced Search</h3>
            <p className="text-blue-100">Find countries by name, region, or code.</p>
          </div>

          {/* Box 3 */}
          <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-25 transition-all">
            <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Rich Statistics</h3>
            <p className="text-blue-100">Population, languages, capitals and more.</p>
          </div>

          {/* Box 4 */}
          <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-25 transition-all">
            <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Interactive Maps</h3>
            <p className="text-blue-100">Visualize country locations worldwide.</p>
          </div>
        </div>

        {/* Login Form with Side Image */}
        <div className="max-w-4xl mx-auto bg-white bg-opacity-20 backdrop-blur-sm p-0 rounded-2xl border-2 border-white border-opacity-30 shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img src="/globe5.jpg" alt="Login Visual" className="w-full h-full object-cover" />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Welcome Back</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border-2 border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-blue-100 text-white"
                />
              </div>
              <div className="mb-8">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border-2 border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-blue-100 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-900 font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-100"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes titleFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes subtitleFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-title-fade {
          animation: titleFadeIn 1.2s ease-out forwards;
        }

        .animate-subtitle-fade {
          animation: subtitleFadeIn 1.5s ease-out forwards;
        }
      `}</style>

      {/* Footer */}
<footer className="w-full bg-white text-blue-900 py-6 mt-16">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
    <div className="mb-4 md:mb-0">
      <span className="font-semibold">GeoVista</span> © {new Date().getFullYear()}. All rights reserved.
    </div>
    <div className="flex gap-6">
      <a href="#about" className="hover:underline">About</a>
      <a href="#contact" className="hover:underline">Contact</a>
      <a href="#privacy" className="hover:underline">Privacy</a>
    </div>
  </div>
</footer>

    </div>
  );
}