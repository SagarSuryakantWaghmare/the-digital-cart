import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import CartContainer from '../components/Cart/CartContainer';
import { ArrowLeft, ShoppingBag, Truck, Shield, Gift } from 'lucide-react';

const CartPage = () => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart, loading } = useSelector((state) => state.cart);
  const userId = user?._id;

  const handleCheckout = () => {
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate('/checkout');
    }
  };

  const calculateTotal = () => {
    return cart?.products?.reduce((total, product) => total + (product.price * product.quantity), 0) || 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="mr-4 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-1">
              {cart && cart?.products?.length > 0 
                ? `${cart.products.length} item${cart.products.length !== 1 ? 's' : ''} in your cart`
                : 'Your cart is currently empty'
              }
            </p>
          </div>
        </div>

        {cart && cart?.products?.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Cart Items */}
            <div className="xl:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                  <span className="text-sm text-gray-500">{cart.products.length} items</span>
                </div>
                <CartContainer cart={cart} userId={userId} guestId={guestId} />
              </div>
            </div>

            {/* Order Summary */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Summary Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal ({cart.products.length} items)</span>
                      <span className="font-medium">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">₹0</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-gray-900">₹{calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 mb-4"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Proceed to Checkout
                  </button>

                  <Link 
                    to="/collections/all" 
                    className="block w-full text-center text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors duration-200"
                  >
                    Continue Shopping
                  </Link>
                </div>

                {/* Benefits Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Why Shop With Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full flex-shrink-0">
                        <Truck className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Free Shipping</p>
                        <p className="text-xs text-gray-600">On all orders above ₹999</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Secure Payments</p>
                        <p className="text-xs text-gray-600">100% secure transactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full flex-shrink-0">
                        <Gift className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Easy Returns</p>
                        <p className="text-xs text-gray-600">30-day return policy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-8">
                <ShoppingBag className="w-16 h-16 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Looks like you haven't added anything to your cart yet. Start browsing our amazing collection!
              </p>
              <Link 
                to="/collections/all"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                <ShoppingBag className="h-5 w-5" />
                Start Shopping
              </Link>
              
              {/* Popular Categories */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Categories</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/collections/all?gender=Men" 
                    className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">Men's Collection</span>
                  </Link>
                  <Link 
                    to="/collections/all?gender=Women" 
                    className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">Women's Collection</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;