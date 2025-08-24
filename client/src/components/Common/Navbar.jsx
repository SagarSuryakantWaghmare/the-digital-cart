import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import { User, ShoppingBag, List, Menu, X } from "lucide-react";
import Cart from './Cart';
const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [navbarOpen,setNavbarOpen]=useState(false);
    const toggleNavbar=()=>{
        setNavbarOpen(!navbarOpen);
    }
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    }
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6 shadow'>
                {/* {left logo} */}
                <div className='flex items-center'>
                    <Link to="/" className='text-lg font-semibold'>The Digital Cart</Link>
                </div>
                {/* Central navigation links */}
                <div className='hidden md:flex space-x-6'>
                    <Link to="#"
                        className='text-gray-700 hover:text-black text-sm font-medium'
                    >Men</Link>
                    <Link to="#"
                        className='text-gray-700 hover:text-black text-sm font-medium'
                    >Women</Link>
                    <Link to="#"
                        className='text-gray-700 hover:text-black text-sm font-medium'
                    >Top Wear</Link>
                    <Link to="#"
                        className='text-gray-700 hover:text-black text-sm font-medium'
                    >Bottom Wear</Link>
                </div>
                {/* Right section for the icons */}
                <div className='flex items-center space-x-4 '>
                    <Link to="/profile"
                        className='hover:text-black'
                    >
                        <User className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button
                        onClick={toggleCart}
                        className='relative hover:text-black'>
                        <ShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>3</span>
                    </button>
                    <div className='overflow-hidden'>
                        <SearchBar />
                    </div>
                    <button
                        onClick={toggleNavbar}
                        className='relative md:hidden hover:text-black'
                    >
                        <Menu className='h-6 w-6 text-gray-700' />
                    </button>

                </div>
            </nav>
            <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
            {/* Mobile navigations */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform 
               transition-transform duration-300 z-50 ${navbarOpen?"translate-x-0 ":"-translate-x-full"} `}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleNavbar}>
                        <X className='h-6 w-6 text-gray-600 '/>
                    </button>

                </div>
                <div className='p-4 '>
                   <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                   <nav className='space-y-4'>
                    <Link to="#" onClick={toggleNavbar} className='block text-gray-600 hover:text-black'>
                    Men
                    </Link>
                    <Link to="#" onClick={toggleNavbar} className='block text-gray-600 hover:text-black'>
                    Women
                    </Link>
                    <Link to="#" onClick={toggleNavbar} className='block text-gray-600 hover:text-black'>
                    Top Wear
                    </Link>
                    <Link to="#" onClick={toggleNavbar} className='block text-gray-600 hover:text-black'>
                    Bottom Wear
                    </Link>
                   </nav>
                </div>

            </div>
        </>
    )
}

export default Navbar