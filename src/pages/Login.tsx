import React, { useState } from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === form.email && user.password === form.password) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        alert('Email or password is incorrect');
      }
    } else {
      alert('No registered user found. Please sign up first.');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Login</h2>

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="mb-6"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          className="mb-6"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        >
          Login
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <span
            className="text-green-600 font-medium cursor-pointer hover:underline"
            onClick={handleSignupRedirect}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
