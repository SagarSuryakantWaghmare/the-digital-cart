import { X } from 'lucide-react';
import React from 'react';
import CartContainer from '../Cart/CartContainer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = ({ toggleCart, cartOpen }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;
  const handleCheckout = () => {
    toggleCart();
    if (!user) {
      navigate("/login?redirect=checkout");
    }
    else {
      navigate('/checkout');
    }
  }
  return (
    <>
      {/* Backdrop overlay with blur */}
      {cartOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={toggleCart}
        />
      )}
      
      {/* Cart sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl
        transform transition-transform duration-300 flex flex-col z-50 ${cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
        <button 
          onClick={toggleCart}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Content area without scroll */}
      <div className="flex-grow flex flex-col bg-gray-50 max-h-screen">
        {cart && cart?.products?.length > 0 ? (
          <div className="flex-grow p-4 overflow-hidden">
            <CartContainer cart={cart} userId={userId} guestId={guestId} />
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm">Add some items to get started!</p>
            </div>
          </div>
        )}
        {/* Card container */}


        {/* Sticky checkout section */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          {cart && cart?.products?.length > 0 && (
            <div className="space-y-3">
              <button
                onClick={() => {
                  toggleCart();
                  navigate('/cart');
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
              >
                View Cart ({cart.products.length} {cart.products.length === 1 ? 'item' : 'items'})
              </button>
              <button
                onClick={handleCheckout}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Proceed to Checkout
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Secure checkout with taxes included
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default Cart;
