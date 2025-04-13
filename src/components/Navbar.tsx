import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow">
      <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
        <img src="/Logo.svg" alt="GreenShop Logo" className="h-6 w-6" />
        GREENSHOP
      </div>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/shop" className="hover:text-green-600">Shop</Link>
      </nav>
      <div className="flex items-center gap-4">
        <button className="text-xl">🛒</button>
        <Link to="/login" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Login</Link>
      </div>
    </header>
  );
};

export default Navbar;
