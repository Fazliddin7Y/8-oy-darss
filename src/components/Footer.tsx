import React from 'react';
import { FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-50 px-6 py-10 text-sm text-gray-600 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/Logo.svg" alt="GreenShop Footer Logo" className="h-8 mb-4" />
          <p>Your favorite place to buy fresh and trendy plants online.</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">My Account</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">Address</a></li>
            <li><a href="#" className="hover:text-green-600">Wishlist</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Categories</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">House Plants</a></li>
            <li><a href="#" className="hover:text-green-600">Potter Plants</a></li>
            <li><a href="#" className="hover:text-green-600">Seeds</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl text-green-600">
            <a href="#"><FaGlobe /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; 2024 GreenShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
