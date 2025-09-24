import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { createCheckout } from '../../redux/slice/checkoutSlice';
import { clearCart } from '../../redux/slice/cartSlice';
import { ArrowLeft, User, MapPin, Phone, Mail, CreditCard, Shield, Truck } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, loading, error } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);
    const [CheckoutId, setCheckoutId] = useState(null);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    useEffect(() => {
        if (!cart || !cart.products || cart.products.length == 0) {
            navigate("/");
        }
    }, [cart, navigate]);

    const handleCreateCheckout = async (e) => {
        e.preventDefault();
        if (cart && cart.products.length > 0) {
            const res = await dispatch(
                createCheckout({
                    checkoutItems: cart.products,
                    shippingAddress,
                    paymentMethod: "Direct Payment",
                    totalPrice: cart.totalPrice,
                })
            );
            if (res.payload && res.payload._id) {
                setCheckoutId(res.payload._id); //Set checkout ID if checkout was successful
            }
        }
    }

    const handleDirectPayment = async () => {
        if (!CheckoutId) {
            toast.error("Please fill in shipping details first");
            return;
        }

        setIsProcessingPayment(true);
        
        try {
            // Mark payment as paid
            const paymentDetails = {
                transactionId: 'TXN' + Date.now(),
                paymentMethod: 'Direct Payment',
                timestamp: new Date().toISOString()
            };

            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${CheckoutId}/pay`,
                { paymentStatus: "paid", paymentDetails },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    }
                }
            );
            
            console.log("Payment success response:", response.status, response.data);
            
            // Finalize the checkout
            await handleFinalizeCheckout(CheckoutId);
            
            // Show success toast
            toast.success("Order placed successfully! 🎉");
            
        } catch (error) {
            toast.error(error.response?.data?.message || "Payment failed. Please try again.");
            setIsProcessingPayment(false);
        }
    };

    const handleFinalizeCheckout = async (CheckoutId) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${CheckoutId}/finalize`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            );
            
            if (response.status === 200 || response.status === 201) {
                // Clear cart and redirect to profile page after successful payment
                dispatch(clearCart());
                setIsProcessingPayment(false);
                
                // Delay navigation slightly to show the success toast
                setTimeout(() => {
                    navigate('/profile');
                }, 1500);
            } else {
                toast.error("Failed to complete order. Please try again.");
                setIsProcessingPayment(false);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to complete order. Please try again.");
            setIsProcessingPayment(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading your cart...</p>
            </div>
        </div>
    );
    
    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="text-red-500 text-xl mb-4">⚠️</div>
                <p className="text-red-600">Error: {error}</p>
            </div>
        </div>
    );
    
    if (!cart || !cart.products || cart.products.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-gray-600 text-xl">Your cart is empty</p>
                </div>
            </div>
        );
    }
    return (
        <div className='min-h-screen bg-gray-50 py-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='flex items-center mb-8'>
                    <button 
                        onClick={() => navigate(-1)}
                        className='mr-4 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200'
                    >
                        <ArrowLeft className='h-6 w-6 text-gray-600' />
                    </button>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-900'>Checkout</h1>
                        <p className='text-gray-600 mt-1'>Complete your purchase securely</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Left section - Forms */}
                    <div className='lg:col-span-2 space-y-6'>
                        <form onSubmit={handleCreateCheckout} className='space-y-6'>
                            {/* Contact Details */}
                            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
                                <div className='flex items-center mb-6'>
                                    <div className='flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-3'>
                                        <Mail className='h-5 w-5 text-blue-600' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-gray-900'>Contact Information</h3>
                                </div>
                                
                                <div className='space-y-4'>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Email Address
                                        </label>
                                        <input 
                                            type="email" 
                                            value={user ? user.email : ""} 
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-gray-50'
                                            disabled 
                                        />
                                        <p className='text-xs text-gray-500 mt-1'>We'll send your receipt to this email address</p>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Information */}
                            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
                                <div className='flex items-center mb-6'>
                                    <div className='flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-3'>
                                        <Truck className='h-5 w-5 text-green-600' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-gray-900'>Shipping Address</h3>
                                </div>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            First Name *
                                        </label>
                                        <input 
                                            type="text"
                                            value={shippingAddress.firstName}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Last Name *
                                        </label>
                                        <input 
                                            type="text"
                                            value={shippingAddress.lastName}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                                        Street Address *
                                    </label>
                                    <input
                                        type="text"
                                        value={shippingAddress.address}
                                        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                                        placeholder='House number and street name'
                                        required
                                    />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            City *
                                        </label>
                                        <input 
                                            type="text"
                                            value={shippingAddress.city}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Postal Code *
                                        </label>
                                        <input 
                                            type="text"
                                            value={shippingAddress.postalCode}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Country *
                                        </label>
                                        <input 
                                            type="text"
                                            value={shippingAddress.country}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Phone Number *
                                        </label>
                                        <input 
                                            type="tel"
                                            value={shippingAddress.phone}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
                                <div className='flex items-center mb-6'>
                                    <div className='flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mr-3'>
                                        <CreditCard className='h-5 w-5 text-purple-600' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-gray-900'>Payment Method</h3>
                                </div>
                                
                                {!CheckoutId ? (
                                    <button 
                                        type='submit' 
                                        className='w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2'
                                    >
                                        <Shield className='h-5 w-5' />
                                        Continue to Payment
                                    </button>
                                ) : (
                                    <div className='space-y-4'>
                                        <div className='flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200'>
                                            <div className='flex items-center justify-center w-8 h-8 bg-green-100 rounded-full'>
                                                <CreditCard className='h-4 w-4 text-green-600' />
                                            </div>
                                            <div>
                                                <h4 className='font-medium text-green-900'>Secure Direct Payment</h4>
                                                <p className='text-sm text-green-700'>Pay directly with your credit or debit card</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleDirectPayment}
                                            disabled={isProcessingPayment}
                                            className='w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2'
                                        >
                                            {isProcessingPayment ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                    <span>Processing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <CreditCard className='h-5 w-5' />
                                                    <span>Pay ₹{cart.totalPrice?.toLocaleString()}</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Right section - Order Summary */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8'>
                            <div className='flex items-center mb-6'>
                                <div className='flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mr-3'>
                                    <svg className='h-5 w-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                                    </svg>
                                </div>
                                <h3 className='text-xl font-semibold text-gray-900'>Order Summary</h3>
                            </div>
                            
                            <div className='space-y-4 mb-6'>
                                {cart.products.map((product, index) => {
                                    const imgSrc = product.image || product.images?.[0]?.url || product.imageUrl || 'https://via.placeholder.com/80';
                                    return (
                                        <div key={index} className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg'>
                                            <img 
                                                src={imgSrc} 
                                                alt={product.name || 'Product image'} 
                                                loading="lazy" 
                                                className='w-16 h-16 object-cover rounded-lg flex-shrink-0' 
                                            />
                                            <div className='flex-1 min-w-0'>
                                                <h4 className='font-medium text-gray-900 line-clamp-2 mb-1'>{product.name}</h4>
                                                <div className='flex flex-wrap gap-2 text-xs text-gray-500 mb-2'>
                                                    {product.size && <span className='bg-gray-200 px-2 py-1 rounded'>Size: {product.size}</span>}
                                                    {product.color && <span className='bg-gray-200 px-2 py-1 rounded'>Color: {product.color}</span>}
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <span className='text-sm text-gray-600'>Qty: {product.quantity}</span>
                                                    <span className='font-semibold text-gray-900'>₹{(Number(product.price || 0) * product.quantity).toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Order Totals */}
                            <div className='space-y-3 pt-4 border-t border-gray-200'>
                                <div className='flex justify-between items-center text-gray-600'>
                                    <span>Subtotal ({cart.products.length} items)</span>
                                    <span>₹{cart.totalPrice?.toLocaleString()}</span>
                                </div>
                                <div className='flex justify-between items-center text-gray-600'>
                                    <span>Shipping</span>
                                    <span className='text-green-600 font-medium'>Free</span>
                                </div>
                                <div className='flex justify-between items-center text-gray-600'>
                                    <span>Tax</span>
                                    <span>₹0</span>
                                </div>
                                <div className='border-t border-gray-200 pt-3'>
                                    <div className='flex justify-between items-center text-lg font-semibold text-gray-900'>
                                        <span>Total</span>
                                        <span>₹{cart.totalPrice?.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className='mt-6 p-4 bg-green-50 rounded-lg border border-green-200'>
                                <div className='flex items-center gap-2 text-green-800'>
                                    <Shield className='h-4 w-4' />
                                    <span className='text-sm font-medium'>Secure Checkout</span>
                                </div>
                                <p className='text-xs text-green-700 mt-1'>Your payment information is protected with end-to-end encryption</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout