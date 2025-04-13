import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // FontAwesome Heart icon

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [likedProducts, setLikedProducts] = useState<number[]>([]); // Array to track liked products

  const products = [
    { id: 1, name: 'Indoor Plant 1', price: 19.99, image: './img1.png', category: 'indoor' },
    { id: 2, name: 'Outdoor Plant 1', price: 25.50, image: './img2.png', category: 'outdoor' },
    { id: 3, name: 'Indoor Plant 2', price: 15.30, image: './img3.png', category: 'indoor' },
    { id: 4, name: 'Outdoor Plant 2', price: 30.00, image: './img4.png', category: 'outdoor' },
    { id: 5, name: 'Indoor Plant 3', price: 22.80, image: './img5.png', category: 'indoor' },
    { id: 6, name: 'Outdoor Plant 3', price: 18.20, image: './img6.png', category: 'outdoor' },
    { id: 7, name: 'Indoor Plant 4', price: 20.00, image: './img7.png', category: 'indoor' },
    { id: 8, name: 'Outdoor Plant 4', price: 28.99, image: './img8.png', category: 'outdoor' }
  ];

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'all' || product.category === selectedCategory) && product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleLike = (id: number) => {
    setLikedProducts(prev => 
      prev.includes(id) ? prev.filter(productId => productId !== id) : [...prev, id]
    );
  };

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Buy your <span className="text-green-600">favorite plants</span> online!
          </h1>
          <p className="text-gray-600 mb-6">
            Get the best indoor and outdoor plants, fast delivery and affordable prices. Make your home green and beautiful today!
          </p>
          <Link
            to="/shop"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Shop Now
          </Link>
        </div>
        <img
          src="./a.png"
          alt="Hero Plant"
          className="w-full md:w-[400px] drop-shadow-xl"
        />
      </section>

      {/* Filter Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Filter Products</h2>
        <div className="flex items-center gap-6 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 hover:shadow-lg transition relative"
            >
              {/* Like Icon */}
              <div 
                className={`absolute top-2 right-2 cursor-pointer ${likedProducts.includes(item.id) ? 'text-red-600' : 'text-gray-400'}`}
                onClick={() => handleLike(item.id)}
              >
                <FaHeart size={24} />
              </div>
              
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-green-600 font-bold mt-1">${item.price.toFixed(2)}</p>
              <button className="mt-3 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700">
                Buy
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Other sections like Customers and Discounts */}
    </main>
  );
};

export default Home;
