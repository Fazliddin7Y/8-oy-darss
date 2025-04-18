import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

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
        <Link to="/blog" className="hover:text-green-600">Blog</Link>
      </nav>

      <div className="flex items-center gap-4">

        {/* Cart Icon */}
        <Link to="/productlist" className="text-xl hover:text-green-600">
          <FaShoppingCart size={22} />
        </Link>

        {/* Login and Sign up buttons */}
        <Link to="/login" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Login</Link>
        <Link to="/signup" className="text-green-600 border px-4 py-1 rounded hover:bg-green-100">Sign up</Link>
      </div>
    </header>
  );
};

export default Navbar;
