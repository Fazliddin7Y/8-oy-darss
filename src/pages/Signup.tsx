import React, { useState } from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add validation here before proceeding
    localStorage.setItem('user', JSON.stringify(form)); // Storing user data (you might want to hash the password in a real app)
    navigate('/login'); // Redirect to login page after signup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Sign Up</h2>
        
        <div className="mb-4">
          <Input
            label="Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="mb-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="mb-6">
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300">
          Sign Up
        </button>
        
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-green-600 hover:text-green-700 font-semibold">
              Log in
            </a>
          </p>
        </div>
      </form>
      
      {/* Footer, ensuring it doesn’t overlap */}
    </div>
  );
};

export default Signup;
