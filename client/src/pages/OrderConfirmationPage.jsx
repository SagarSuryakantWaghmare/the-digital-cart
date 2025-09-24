import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const OrderConfirmationPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    useSelector((state) => state.auth);
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const orderId = searchParams.get('orderId');

    useEffect(() => {
        const fetchOrder = async () => {
            if (!orderId) {
                setError("No order ID provided");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${orderId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                        }
                    }
                );
                setOrder(response.data);
            } catch (error) {
                console.error("Failed to fetch order:", error);
                setError("Failed to load order details");
                navigate('/my-orders')
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId, navigate]);

    const calculateEstimatedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 5);
        return orderDate.toLocaleDateString();
    };

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto p-6 bg-white">
                <div className="text-center">
                    <p className="text-lg">Loading order details...</p>
                </div>
            </div>
        );
    }

    if (error || !order) {
        return (
            <div className="max-w-4xl mx-auto p-6 bg-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
                    <p className="text-gray-600 mb-4">{error || "Order not found"}</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-black text-white px-6 py-2 rounded-lg"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className='max-w-4xl mx-auto p-6 bg-white '>
            <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
                Thank you for your Order!
            </h1>

            {
                order && (
                    <div className='p-6 rounded-lg border'>
                        <div className='flex justify-between mb-20'>
                            <div>
                                <h2 className='text-xl font-semibold'>
                                    Order ID: {order._id}
                                </h2>
                                <p className='text-gray-500'>
                                    Order date: {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            {/* Delivery days */}
                            <div >
                                <p className='text-emerald-700 text-sm'>
                                    Estimated Delivery: {calculateEstimatedDelivery(order.createdAt)}
                                </p>
                            </div>
                        </div>
                        {/* Order Items */}
                        <div className='mb-20'>
                            {order.checkoutItems?.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-center mb-4'>
                                 <img src={item.image} alt={item.name}
                                 className='w-16 h-16 object-cover rounded-md mr-4' />
                                 <div>
                                    <h4 className='text-md font-semibold'>{item.name}</h4>
                                    <p className='text-sm text-gray-500'>
                                        {item.color} | {item.size}
                                    </p>
                                 </div>
                                 <div className='ml-auto text-right'>
                                    <p className='text-md'>₹{item.price}</p>
                                    <p className='text-sm text-gray-500'>Qty: {item.quantity}</p>
                                 </div>
                                </div>
                            ))}
                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                            <div>
                                <h4 className='text-lg font-semibold mb-2'>Payment</h4>
                                <p className='text-gray-600 '>PayPal</p>
                            </div>
                            {/* Delivery Info */}
                            <div>
                                <h4 className='text-lg font-semibold mb-2'>Delivery</h4>
                                <p className='text-gray-600'>
                                   {order.shippingAddress?.address}
                                </p>
                                <p className='text-gray-600'>
                                 {order.shippingAddress?.city},{" "}
                                 {order.shippingAddress?.country}
                                </p>
                            </div>
                        </div>
                        
                        <div className='mt-8 text-center'>
                            <button 
                                onClick={() => navigate('/my-orders')}
                                className='bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition mr-4'
                            >
                                View All Orders
                            </button>
                            <button 
                                onClick={() => navigate('/collections/all')}
                                className='bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition'
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default OrderConfirmationPage