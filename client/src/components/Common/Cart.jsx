import { X } from 'lucide-react';
import React from 'react';
import CardContainer from '../Cart/CartContainer';
import CartContainer from '../Cart/CartContainer';

const Cart = ({ toggleCart, cartOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg
      transform transition-transform duration-300 flex flex-col z-50 ${
        cartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCart}>
          <X className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Scrollable cart content */}
      <div className="flex-grow p-4 overflow-y-auto flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {/* Card container */}
        <div className="flex-grow">
          <CartContainer />
        </div>

        {/* Sticky checkout button */}
        <div className="sticky bottom-0 bg-white p-4 border-t">
          <button
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Checkout
          </button>
          <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
            Checkout here with the GST and taxes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
