import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ClipboardList, User, IndianRupee, Check } from 'lucide-react'
import {fetchAllOrders, updateOrderStatus} from '../../redux/slice/adminOrderSlice';
import LoadingSpinner from '../Common/LoadingSpinner';
const OrderMangement = () => {

    const dispatch =useDispatch();
    const navigate=useNavigate();
    const {user} =useSelector((state)=>state.auth);
    const {orders,loading,error}=useSelector((state)=>state.adminOrders);

    useEffect(()=>{
        if(!user||user.role!=='admin'){
            navigate("/");
        }
        else{
            dispatch(fetchAllOrders())
        }
    },[dispatch,user,navigate]);
    const handleStatusChange=(orderId,status)=>{
        dispatch(updateOrderStatus({id:orderId,status}));
    };

    if(loading) return <LoadingSpinner size="lg" text="Loading orders..." />
    if(error) return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            <p className="font-medium">Error loading orders</p>
            <p className="text-sm">{error}</p>
        </div>
    )
    const getStatusBadge = (status) => {
        const badges = {
            'Processing': 'bg-yellow-500 text-white',
            'Shipped': 'bg-blue-500 text-white',
            'Delivered': 'bg-green-500 text-white',
            'Cancelled': 'bg-red-500 text-white'
        };
        return badges[status] || 'bg-gray-500 text-white';
    };

    return (
        <div className='space-y-6'>
            {/* Clean Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className='text-3xl font-bold text-gray-900 flex items-center'>
                        <div className="p-3 bg-purple-600 rounded-lg mr-4">
                            <ClipboardList className="text-white w-6 h-6" />
                        </div>
                        Order Management Hub
                    </h2>
                    <p className="text-gray-600 mt-2">Track, manage and fulfill customer orders efficiently</p>
                </div>
                <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md">
                    <span className="font-bold text-lg">{orders.length}</span>
                    <p className="text-sm opacity-90">Active Orders</p>
                </div>
            </div>

            {/* Orders Grid */}
            <div className='space-y-4'>
                {orders.length > 0 ? (
                    <div className="overflow-x-auto">
                        <div className="min-w-full space-y-4">
                            {orders.map((order) => (
                                <div key={order._id} className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-200 hover:border-gray-300'>
                                    <div className="flex flex-col space-y-4">
                                        {/* Mobile Header */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                                    <ClipboardList className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                                </div>
                                                <div>
                                                    <h3 className='font-bold text-gray-900 text-base sm:text-lg'>
                                                        #{order._id.slice(-8).toUpperCase()}
                                                    </h3>
                                                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-600">
                                                        <IndianRupee className="text-green-500 w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span className="font-semibold">₹{order.totalPrice.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium text-xs sm:text-sm ${getStatusBadge(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </div>

                                        {/* Customer Info */}
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <User className="text-blue-500 w-4 h-4" />
                                            <span>{order.user.name}</span>
                                        </div>

                                        {/* Actions Row */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            {/* Status Selector */}
                                            <select 
                                                value={order.status}
                                                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                                className='flex-1 bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 px-3 py-2 font-medium'
                                            >
                                                <option value="Processing">🔄 Processing</option>
                                                <option value="Shipped">🚚 Shipped</option>
                                                <option value="Delivered">✅ Delivered</option>
                                                <option value="Cancelled">❌ Cancelled</option>
                                            </select>
                                            
                                            {/* Quick Action Button */}
                                            <button 
                                                onClick={() => handleStatusChange(order._id, "Delivered")}
                                                className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 sm:min-w-[120px]'
                                            >
                                                <Check className="w-4 h-4" />
                                                <span>Complete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center'>
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ClipboardList className="text-gray-400 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Orders Available</h3>
                        <p className="text-gray-500">New customer orders will appear here for management and fulfillment.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrderMangement