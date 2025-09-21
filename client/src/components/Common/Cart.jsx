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
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg
      transform transition-transform duration-300 flex flex-col z-50 ${cartOpen ? 'translate-x-0' : 'translate-x-full'
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
        {cart && cart?.products?.length > 0 ? (
          <div className="flex-grow">
            <CartContainer cart={cart} userId={userId} guestId={guestId} />
          </div>
        ) :
          (
            <p>Your cart is empty.</p>
          )
        }
        {/* Card container */}


        {/* Sticky checkout button */}
        <div className="sticky bottom-0 bg-white p-4 border-t">
          {cart && cart?.products?.length > 0 && (
            <>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    toggleCart();
                    navigate('/cart');
                  }}
                  className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  View Cart ({cart.products.length} {cart.products.length === 1 ? 'item' : 'items'})
                </button>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
              <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
                Checkout here with GST and taxes
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
