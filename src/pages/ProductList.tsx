import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const ProductList = () => {
  const navigate = useNavigate();

  const handleShop = () => {
    navigate('/shop'); // Let’s Shop tugmasi bosilganda shop sahifasiga o'tadi
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-white">
      <div className="text-sm text-gray-500 mb-6">
        Home / <span className="text-green-600">Shopping Cart</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT - Product Table */}
        <div className="lg:col-span-2 border rounded p-4">
          <div className="grid grid-cols-4 font-semibold border-b pb-2 mb-6">
            <div>Products</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          <div className="flex flex-col items-center justify-center py-12">
            <img
              src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
              alt="no-data"
              className="w-20 h-20 opacity-60"
            />
            <p className="text-gray-500 mt-4">No data</p>
            <button
              onClick={handleShop}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded"
            >
              LET'S SHOP
            </button>
          </div>
        </div>

        {/* RIGHT - Cart Total */}
        <div className="border rounded p-6">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>

          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className="flex-1 border px-3 py-2 rounded-l outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r">
              Apply
            </button>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Discount:</span>
              <span className="text-red-500">- $0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-green-700">$16</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold pt-2">
              <span>Total</span>
              <span>$0</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 rounded">
            Proceed to Checkout
          </button>

          <button
            onClick={handleShop}
            className="w-full mt-2 text-green-600 hover:underline text-sm"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
