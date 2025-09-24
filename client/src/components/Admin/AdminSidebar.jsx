import React from 'react'
import { LayoutDashboard, Users, Package, ClipboardList, LogOut } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slice/authSlice'
import { clearCart } from '../../redux/slice/cartSlice'
import cartGif from '../../assets/icons8-shopping-cart.gif'

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  }
  return (
    <div className='p-6 h-full flex flex-col bg-gray-900'>
      {/* Brand Section - Enhanced Logo */}
      <div className='mb-8'>
        <Link to="/" className='flex items-center space-x-3 text-xl font-bold text-white hover:text-gray-300 transition-colors duration-200 group'>
          <div className="bg-white rounded-lg p-2 group-hover:bg-gray-100 transition-colors duration-200">
            <img 
              src={cartGif} 
              alt="Shopping Cart" 
              className='w-6 h-6'
              loading="eager"
            />
          </div>
          <span>The Digital Cart</span>
        </Link>
        <div className='mt-3 flex items-center space-x-2'>
          <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
          <span className='text-sm text-gray-400'>Admin Portal</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2 flex-1">
        <NavLink to="/admin" className={({ isActive }) => 
          isActive 
            ? "bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center space-x-3" 
            : "text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-4 rounded-lg flex items-center space-x-3 transition-colors duration-200"
        }>
          <LayoutDashboard className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </NavLink>

        <NavLink to="/admin/users" className={({ isActive }) => 
          isActive 
            ? "bg-green-600 text-white py-3 px-4 rounded-lg flex items-center space-x-3" 
            : "text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-4 rounded-lg flex items-center space-x-3 transition-colors duration-200"
        }>
          <Users className="w-5 h-5" />
          <span className="font-medium">User Management</span>
        </NavLink>

        <NavLink to="/admin/products" className={({ isActive }) => 
          isActive 
            ? "bg-orange-600 text-white py-3 px-4 rounded-lg flex items-center space-x-3" 
            : "text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-4 rounded-lg flex items-center space-x-3 transition-colors duration-200"
        }>
          <Package className="w-5 h-5" />
          <span className="font-medium">Product Catalog</span>
        </NavLink>

        <NavLink to="/admin/orders" className={({ isActive }) => 
          isActive 
            ? "bg-purple-600 text-white py-3 px-4 rounded-lg flex items-center space-x-3" 
            : "text-gray-300 hover:bg-gray-800 hover:text-white py-3 px-4 rounded-lg flex items-center space-x-3 transition-colors duration-200"
        }>
          <ClipboardList className="w-5 h-5" />
          <span className="font-medium">Order Management</span>
        </NavLink>
      </nav>

      {/* Logout Section */}
      <div className='mt-8 pt-6 border-t border-gray-700'>
        <button 
          onClick={handleLogout} 
          className='w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200'
        >
          <LogOut className="w-5 h-5"/>
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  )
}

export default AdminSidebar