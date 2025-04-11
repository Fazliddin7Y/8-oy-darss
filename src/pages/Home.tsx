import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';

type Product = {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
};

const allProducts: Product[] = [
  { name: "Barberton Daisy", price: 119, image: "/img1.png", category: "House Plants" },
  { name: "Angel Wing Begonia", price: 169, image: "/img2.png", category: "House Plants" },
  { name: "African Violet", price: 199, oldPrice: 229, image: "/img3.png", category: "Small Plants" },
  { name: "Bird’s Nest Fern", price: 99, image: "/img4.png", category: "Seeds" },
  { name: "Broadleaf Lady Palm", price: 59, image: "/img5.png", category: "Big Plants" },
  { name: "Chinese Evergreen", price: 89, image: "/img6.png", category: "House Plants" },
  { name: "Dragon Tree", price: 149, image: "/img7.png", category: "Big Plants" },
  { name: "Calathea Orbifolia", price: 129, oldPrice: 149, image: "/img8.png", category: "Small Plants" }
];

const categories = ["All", "House Plants", "Small Plants", "Seeds", "Big Plants"];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("default");

  const filteredProducts = allProducts.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
          <img src="./Logo.svg" alt="GreenShop" className="h-6 w-6" />
          GREENSHOP
        </div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Shop</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-xl">🛒</button>
          <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Login</button>
        </div>
      </header>

      {/* Banner */}
      <section className="bg-gray-100 flex flex-col md:flex-row items-center justify-between px-6 py-12">
        <div className="max-w-xl">
          <p className="text-sm text-gray-600 uppercase">Welcome to GreenShop</p>
          <h1 className="text-4xl font-bold leading-tight mt-2">
            LET’S MAKE A <br /> BETTER <span className="text-green-600">PLANET</span>
          </h1>
          <p className="text-gray-500 mt-4">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Shop Now
          </button>
        </div>
        <img src="/a.png" alt="Plant" className="w-72 mt-6 md:mt-0" />
      </section>

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row gap-8 px-6 py-12">
        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          <div>
            <h2 className="font-semibold mb-2">Categories</h2>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`text-left w-full ${selectedCategory === cat ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Sort by</h2>
            <select
              className="border rounded px-2 py-1 w-full"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* Products */}
        <section className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sortedProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              sortedProducts.map((product, i) => (
                <div key={i} className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
                  <img src={product.image} alt={product.name} className="mx-auto mb-2 h-36 object-contain" />
                  <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                  <p className="text-green-600 text-sm">
                    ${product.price.toFixed(2)}{' '}
                    {product.oldPrice && (
                      <span className="line-through text-gray-400 text-xs">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-50 px-6 py-10 text-sm text-gray-600 border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="./Logo.svg" alt="GreenShop" className="h-8 mb-4" />
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
    </div>
  );
};

export default Home;
