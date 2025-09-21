import React from 'react'
import { Trash } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateCartItemQuantity } from '../../redux/slice/cartSlice';
const CartContainer = ({ cart, userId, guestId }) => {
  // const cartProducts = [
  //   {
  //     productId: 1,
  //     name: "T-shirt",
  //     size: "M",
  //     color: "Red",
  //     quantity: 1,
  //     price: 1400,
  //     image: "https://picsum.photos/200?random=1",
  //   },
  //   {
  //     productId: 2,
  //     name: "Shirt",
  //     size: "M",
  //     color: "Orange",
  //     quantity: 1,
  //     price: 1400,
  //     image: "https://picsum.photos/200?random=2",
  //   }
  // ]
  const dispatch = useDispatch();

  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(updateCartItemQuantity({
        productId,
        quantity: newQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color
        })
      }))
    }
  }

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {cart?.products && cart.products.length > 0 ? (
        cart.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b gap-4"
          >
          {/* Left section: Image + Info */}
          <div className="flex items-start w-full sm:w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-28 object-cover mr-4 rounded-lg shadow-sm"
            />
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">
                Size: {product.size} | Color: {product.color}
              </p>
              <div className="flex items-center mt-3">
                <button
                  onClick={() => {
                    handleAddToCart(product.productId, -1, product.quantity, product.size, product.color)
                  }}
                  className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100">-</button>
                <span className="mx-4 font-medium">{product.quantity}</span>
                <button
                  onClick={() => {
                    handleAddToCart(product.productId, 1, product.quantity, product.size, product.color)
                  }}
                  className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100">+</button>
              </div>
            </div>
          </div>

          {/* Right section: Price + Delete */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
            <p className="text-lg font-semibold text-gray-800">
              ₹{product.price.toLocaleString()}
            </p>
            <button
              onClick={() => handleRemoveFromCart(
                product.productId,
                product.size,
                product.color)}
              className="mt-0 sm:mt-3 p-2 hover:bg-red-50 rounded-full">
              <Trash className="h-6 w-6 text-red-600" />
            </button>
          </div>
        </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      )}
    </div>
  )
}

export default CartContainer
