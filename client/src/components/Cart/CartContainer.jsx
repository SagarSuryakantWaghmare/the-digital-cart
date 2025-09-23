import React from 'react'
import { Trash2, Plus, Minus } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateCartItemQuantity } from '../../redux/slice/cartSlice';

const CartContainer = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(updateCartItemQuantity({
        productId,
        quantity: newQuantity,
        guestId,
        userId,
        size,
        color
      }))
    }
  }

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  }

  return (
    <div className="space-y-4">
      {cart?.products && cart.products.length > 0 ? (
        cart.products.map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex gap-4">
              {/* Product Image - Smaller size */}
              <div className="flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex-1 mb-3">
                    <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Product Attributes */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.size && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          Size: {product.size}
                        </span>
                      )}
                      {product.color && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          Color: {product.color}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">per item</span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => handleAddToCart(product.productId, -1, product.quantity, product.size, product.color)}
                          className="p-2 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={product.quantity <= 1}
                        >
                          <Minus className="h-3 w-3 text-gray-600" />
                        </button>
                        <span className="px-3 py-2 font-semibold text-gray-900 min-w-[50px] text-center text-sm">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => handleAddToCart(product.productId, 1, product.quantity, product.size, product.color)}
                          className="p-2 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Plus className="h-3 w-3 text-gray-600" />
                        </button>
                      </div>
                      
                      <span className="text-xs text-gray-500">
                        ₹{(product.price * product.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end ml-2">
                    <button
                      onClick={() => handleRemoveFromCart(product.productId, product.size, product.color)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      title="Remove from cart"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500">Start adding items to see them here!</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartContainer
