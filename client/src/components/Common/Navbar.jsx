import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import { User, ShoppingBag, List, Menu, X } from "lucide-react";
import Cart from './Cart';
import { useSelector } from 'react-redux';
import cartGif from '../../assets/icons8-shopping-cart.gif';

const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    const cartItemCount = cart?.products?.reduce((total, products) => total + products.quantity, 0) || 0;
    
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    }
    
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    }
    
    return (
        <>
            <nav className='bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        {/* Logo */}
                        <div className='flex items-center'>
                            <Link to="/" className='flex items-center space-x-3 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200 group'>
                                <div className="bg-gray-100 rounded-lg p-2 hidden sm:block group-hover:bg-gray-200 transition-colors duration-200">
                                    <img 
                                        src={cartGif} 
                                        alt="Shopping Cart" 
                                        className='w-6 h-6'
                                        loading="eager"
                                    />
                                </div>
                                <span>The Digital Cart</span>
                            </Link>
                        </div>
                        
                        {/* Central navigation links */}
                        <div className='hidden md:flex items-center space-x-8'>
                            <Link to="/collections/all?gender=Men"
                                className='text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 relative group'
                            >
                                Men
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full'></span>
                            </Link>
                            <Link to="/collections/all?gender=Women"
                                className='text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 relative group'
                            >
                                Women
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full'></span>
                            </Link>
                            <Link to="/collections/all?category=Top Wear"
                                className='text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 relative group'
                            >
                                Top Wear
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full'></span>
                            </Link>
                            <Link to="/collections/all?category=Bottom Wear"
                                className='text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 relative group'
                            >
                                Bottom Wear
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full'></span>
                            </Link>
                        </div>
                        
                        {/* Right section for the icons */}
                        <div className='flex items-center space-x-4'>
                            <div className='hidden sm:block'>
                                <SearchBar />
                            </div>
                            
                            {user && user.role === 'admin' && (
                                <Link to="/admin"
                                    className='bg-gray-900 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200'
                                >
                                    Admin
                                </Link>
                            )}

                            <Link to="/profile"
                                className='p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200'
                            >
                                <User className='h-5 w-5' />
                            </Link>
                            
                            <button
                                onClick={toggleCart}
                                className='relative p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200'>
                                <ShoppingBag className='h-5 w-5' />
                                {cartItemCount > 0 && (
                                    <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-medium animate-pulse'>
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                            
                            <button
                                onClick={toggleNavbar}
                                className='md:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200'
                            >
                                <Menu className='h-5 w-5' />
                            </button>
                        </div>
                    </div>
                    
                    {/* Mobile Search Bar */}
                    <div className='sm:hidden pb-3'>
                        <SearchBar />
                    </div>
                </div>
            </nav>
            
            <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
            
            {/* Mobile navigation overlay */}
            {navbarOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden' onClick={toggleNavbar}></div>
            )}
            
            {/* Mobile navigation sidebar */}
            <div className={`fixed top-0 left-0 w-80 h-full bg-white shadow-2xl transform 
               transition-transform duration-300 z-50 ${navbarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                <div className='flex justify-between items-center p-6 border-b border-gray-100'>
                    <h2 className='text-lg font-bold text-gray-900'>Menu</h2>
                    <button 
                        onClick={toggleNavbar}
                        className='p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200'
                    >
                        <X className='h-5 w-5' />
                    </button>
                </div>
                
                <div className='p-6'>
                    <nav className='space-y-4'>
                        <Link 
                            to="/collections/all?gender=Men" 
                            onClick={toggleNavbar} 
                            className='flex items-center py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium'
                        >
                            Men
                        </Link>
                        <Link 
                            to="/collections/all?gender=Women" 
                            onClick={toggleNavbar} 
                            className='flex items-center py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium'
                        >
                            Women
                        </Link>
                        <Link 
                            to="/collections/all?category=Top Wear" 
                            onClick={toggleNavbar} 
                            className='flex items-center py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium'
                        >
                            Top Wear
                        </Link>
                        <Link 
                            to="/collections/all?category=Bottom Wear" 
                            onClick={toggleNavbar} 
                            className='flex items-center py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium'
                        >
                            Bottom Wear
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
