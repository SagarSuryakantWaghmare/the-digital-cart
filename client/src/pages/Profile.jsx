import React, { useEffect } from 'react'
import MyOrdersPage from '../components/Products/MyOrdersPage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slice/authSlice';
import { clearCart } from '../redux/slice/cartSlice';
import { User, Mail, LogOut, Package } from 'lucide-react';
const Profile = () => {
  const{user}=useSelector((state)=>state.auth);
  const navigate=useNavigate();
  const dispatch=useDispatch();


  useEffect(()=>{
    if(!user){
      navigate("/login");
    }
  },[user,navigate]);

  const handleLogout=()=>{
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 py-8 lg:px-8'>
        {/* Profile Header */}
        <div className='bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 mb-8 text-white'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <div className='flex items-center space-x-6 mb-6 md:mb-0'>
              <div className='relative'>
                <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white ring-opacity-20'>
                  <span className='text-2xl font-bold text-white'>
                    {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U'}
                  </span>
                </div>
                <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                </div>
              </div>
              <div>
                <h1 className='text-3xl md:text-4xl font-bold mb-2'>Welcome back!</h1>
                <p className='text-xl text-gray-200'>{user?.name}</p>
                <div className='flex items-center mt-2 text-gray-300'>
                  <Mail className='w-4 h-4 mr-2' />
                  <span>{user?.email}</span>
                </div>
              </div>
            </div>
            
            {/* Logout Button - Top Right */}
            <div className='flex'>
              <button 
                onClick={handleLogout}
                className='flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-200 group'
              >
                <LogOut className='w-5 h-5 text-white' />
                <span className='font-medium text-white'>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div className='bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden'>
          <div className='p-6 border-b border-gray-200'>
            <h2 className='text-2xl font-bold text-gray-900 flex items-center'>
              <Package className='w-6 h-6 mr-3 text-gray-600' />
              My Orders
            </h2>
            <p className='text-gray-600 mt-1'>Track and manage your order history</p>
          </div>
          <div className='p-6'>
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile