import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdminProducts } from '../redux/slice/adminProductSlice'
import { fetchAllOrders } from '../redux/slice/adminOrderSlice'
const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { products, loading: productsLoading, error: productError } = useSelector((state) => state.adminProducts);
    const { orders, totalOrders, totalSales, loading: ordersLoading, error: ordersError } = useSelector((state) => state.adminOrders);

    useEffect(() => {
        dispatch(fetchAdminProducts());
        dispatch(fetchAllOrders());
    },[dispatch])




    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>
                Admin Dashboard
            </h1>
            {(productsLoading || ordersLoading) ? (
                <p>Loading...</p>
            ) : productError ? (
                <p className='text-red-500'>Error fetching products: {productError}</p>
            ) : ordersError ? (
                <p className='text-red-500'>Error fetching orders: {ordersError}</p>
            ) : (


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='p-6 shadow-md rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200 hover:shadow-lg transition-shadow duration-200'>
                        <h2 className='text-xl font-semibold text-green-800'>Revenue</h2>
                        <p className='text-3xl font-bold text-green-900'>
                            ₹{totalSales.toFixed(2)}
                        </p>
                    </div>
                    
                    <Link to="/admin/orders" className='block p-6 shadow-md rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-200'>
                        <h2 className='text-xl font-semibold text-blue-800'>Total Orders</h2>
                        <p className='text-3xl font-bold text-blue-900'>
                            {totalOrders}
                        </p>
                        <p className='text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium'>
                            Click to manage orders →
                        </p>
                    </Link>

                    <Link to="/admin/products" className='block p-6 shadow-md rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-200'>
                        <h2 className='text-xl font-semibold text-purple-800'>Total Products</h2>
                        <p className='text-3xl font-bold text-purple-900'>
                            {products.length}
                        </p>
                        <p className='text-purple-600 hover:text-purple-800 mt-2 text-sm font-medium'>
                            Click to manage products →
                        </p>
                    </Link>
                </div>
            )}

            <div className='mt-6'>
                <h2 className='text-2xl font-bold mb-4'>Recent Orders</h2>
                <div className='overflow-x-auto'>
                    <table className='min-w-full text-left text-gray-500'>
                        <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                            <tr>
                                <th className='py-3 px-4'>Order Id</th>
                                <th className='py-3 px-4'>User</th>
                                <th className='py-3 px-4'>Total Price</th>
                                <th className='py-3 px-4'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id} className='border-b hover:bg-gray-50 cursor-pointer'>
                                        <td className='p-4'>{order._id}</td>
                                        <td className='p-4'>{order.user.name}</td>
                                        <td className='p-4'>₹{order.totalPrice.toFixed(2)}</td>
                                        <td className='p-4'>{order.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className='p-4 text-center text-gray-500'>
                                        No recent Orders found.
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

export default AdminHomePage