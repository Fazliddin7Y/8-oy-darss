import React from 'react';

const ProductCheckout = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">Home / Shop / <span className="text-black font-semibold">Checkout</span></p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Billing Address Form */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold">Billing Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">First Name <span className="text-red-500">*</span></label>
              <input className="w-full border p-2 rounded mt-1" type="text" />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
              <input className="w-full border p-2 rounded mt-1" type="text" />
            </div>
            <div>
              <label className="text-sm font-medium">Country / Region <span className="text-red-500">*</span></label>
              <select className="w-full border p-2 rounded mt-1">
                <option>Select a country / region</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Town / City <span className="text-red-500">*</span></label>
              <input className="w-full border p-2 rounded mt-1" type="text" />
            </div>
            <div className="col-span-2">
              <label className="text-sm font-medium">Street Address <span className="text-red-500">*</span></label>
              <input className="w-full border p-2 rounded mt-1 mb-2" type="text" placeholder="House number and street name" />
              <input className="w-full border p-2 rounded" type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
            </div>
            <div>
              <label className="text-sm font-medium">State <span className="text-red-500">*</span></label>
              <select className="w-full border p-2 rounded mt-1">
                <option>Select a state</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Zip <span className="text-red-500">*</span></label>
              <input className="w-full border p-2 rounded mt-1" type="text" />
            </div>
            <div>
              <label className="text-sm font-medium">Email address <span className="text-red-500">*</span></label>
              <input className="w-full border p-2 rounded mt-1" type="email" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
              <div className="flex">
                <select className="border p-2 rounded-l w-[90px]">
                  <option>+966</option>
                </select>
                <input className="w-full border border-l-0 p-2 rounded-r" type="text" />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <input id="ship" type="checkbox" className="mr-2" />
            <label htmlFor="ship" className="text-sm">Ship to a different address?</label>
          </div>

          <div>
            <label className="text-sm font-medium">Order notes (optional)</label>
            <textarea className="w-full border rounded p-2 mt-1" rows={4} />
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="border p-6 rounded-xl bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">Your Order</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <img src="./img3.png" alt="Barberton Daisy" className="w-12 h-12" />
                  <div>
                    <p>Barberton Daisy</p>
                    <p className="text-xs text-gray-400">SKU: 1995751877966</p>
                  </div>
                </div>
                <p className="font-semibold text-green-600">$238.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <img src="./img2.png" alt="Blushing Bromeliad" className="w-12 h-12" />
                  <div>
                    <p>Blushing Bromeliad (x6)</p>
                    <p className="text-xs text-gray-400">SKU: 1995751875025</p>
                  </div>
                </div>
                <p className="font-semibold text-green-600">$834.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <img src="./img1.png" alt="Aluminum Plant" className="w-12 h-12" />
                  <div>
                    <p>Aluminum Plant</p>
                    <p className="text-xs text-gray-400">SKU: 1995751877966</p>
                  </div>
                </div>
                <p className="font-semibold text-green-600">$1,611.00</p>
              </div>

              <div className="flex justify-between pt-4 border-t">
                <p className="text-gray-500">Subtotal</p>
                <p>$2,683.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Coupon Discount</p>
                <p className="text-red-500">(-) 0.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Shipping</p>
                <p>$16.00</p>
              </div>
              <p className="text-green-600 text-sm cursor-pointer">View shipping charge</p>
              <div className="flex justify-between font-semibold text-lg border-t pt-4">
                <p>Total</p>
                <p className="text-green-700">$2,699.00</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="font-semibold">Payment Method</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                <span>PayPal</span>
                <img src="./img2.png" alt="cards" className="h-5 ml-2" />
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <span>Direct bank transfer</span>
              </div>
              <div className="flex items-center gap-2 border p-2 rounded bg-green-50 border-green-600">
                <input type="radio" name="payment" />
                <span>Cash on delivery</span>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
