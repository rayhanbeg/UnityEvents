import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">UnityEvents</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/events" className="hover:text-blue-600">Events</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;