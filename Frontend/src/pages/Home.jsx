import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Connecting People Across Faiths & Interests</h1>
        <p className="text-lg mb-8">Connecting people of all faiths through events and community support.</p>
        <Link to="/events">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Explore Events
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Home;