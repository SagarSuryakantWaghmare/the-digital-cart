import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrders } from '../../redux/slice/orderSlice';

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get orders from Redux store
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    // Fetch orders when component mounts
    dispatch(fetchUserOrders());
  }, [dispatch]);



  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`)
  }

  // Loading state
  if (loading) {
    return (
      <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-xl sm:text-2xl font-bold mb-6'>
          My Orders
        </h2>
        <div className='flex justify-center items-center h-64'>
          <div className='text-gray-500'>Loading your orders...</div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-xl sm:text-2xl font-bold mb-6'>
          My Orders
        </h2>
        <div className='flex flex-col justify-center items-center h-64'>
          <div className='text-red-500 mb-4'>Error loading orders: {error}</div>
          <button 
            onClick={() => dispatch(fetchUserOrders())}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className='w-full'>
      <h2 className='text-xl sm:text-2xl font-bold mb-6 px-4 sm:px-0'>
        My Orders
      </h2>
      <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
        {/* Mobile-responsive table with horizontal scroll */}
        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-gray-500 whitespace-nowrap'>
            <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
              <tr>
                <th className='py-2 px-2 sm:py-3 sm:px-4 min-w-[60px]'>Image</th>
                <th className='py-2 px-2 sm:py-3 sm:px-4 min-w-[100px]'>Order ID</th>
                <th className='py-2 px-2 sm:py-3 sm:px-4 min-w-[100px]'>Date</th>
                <th className='py-2 px-2 sm:py-3 sm:px-4 min-w-[120px]'>Address</th>
                <th className='py-2 px-2 sm:py-3 sm:px-4 min-w-[80px]'>Items</th>
                <th className='py-2 px-2 sm:py-3 sm:px-4 min-w-[100px]'>Price</th>
                <th className='py-2 px-2 sm:py-3 sm:px-4 min-w-[80px]'>Status</th>
              </tr>
            </thead>
            <tbody>
            {orders && orders.length > 0 ? (
              orders.map((order) => {
                // Handle different possible structures for order items
                const orderItems = order.orderItems || order.items || [];
                const firstItem = orderItems[0] || {};
                const imgSrc = firstItem.image || firstItem.images?.[0]?.url || firstItem.imageUrl || 'https://via.placeholder.com/50';
                const productName = firstItem.name || 'Product';
                
                return (
                  <tr
                    key={order._id}
                    onClick={() => handleRowClick(order._id)}
                    className='border-b hover:bg-gray-50 cursor-pointer'>
                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                      <img 
                        src={imgSrc} 
                        alt={productName}
                        className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg'
                      />
                    </td>
                    <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
                      #{order._id.slice(-8)} {/* Show last 8 characters of ID */}
                    </td>
                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                      {order.shippingAddress ? 
                        `${order.shippingAddress.city || 'N/A'}, ${order.shippingAddress.country || 'N/A'}` :
                        'N/A'
                      }
                    </td>
                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                      {orderItems.length} item{orderItems.length !== 1 ? 's' : ''}
                    </td>
                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                      ₹{Number(order.totalPrice || 0).toLocaleString()}
                    </td>
                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                      <span className={`${
                        order.isPaid || order.paymentStatus === 'paid' ?
                        "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs font-medium sm:text-sm`}>
                        {order.isPaid || order.paymentStatus === 'paid' ? "Paid" : "Pending"}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className='py-8 px-4 text-center text-gray-500'>
                  <div className='flex flex-col items-center'>
                    <div className='text-lg mb-2'>No orders found</div>
                    <div className='text-sm'>Your orders will appear here once you make a purchase</div>
                  </div>
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyOrdersPage