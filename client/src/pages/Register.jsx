import React, { useState, useEffect } from 'react'
import login from '../assets/BeachLook.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mergeCart } from '../redux/slice/cartSlice';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, guestId, loading } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    const redirect = new URLSearchParams(location.search).get("redirect") || "/";
    const isCheckoutRedirect = redirect.includes("checkout");

    useEffect(() => {
        if (user) {
            if (cart?.products.length > 0 && guestId) {
                dispatch(mergeCart({ guestId, user })).then(() => {
                    navigate(isCheckoutRedirect ? "/checkout" : "/");
                });
            }
            else {
                navigate(isCheckoutRedirect ? "/checkout" : "/");
            }
        }
    }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password });
        dispatch(registerUser({ name, email, password }));
    }

    return (
        <div className='min-h-screen flex bg-gray-50'>
            {/* Left Side - Form */}
            <div className='w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12'>
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <Link to="/" className='inline-flex items-center justify-center mb-6'>
                            <h1 className='text-2xl font-bold text-gray-900'>The Digital Cart</h1>
                        </Link>
                        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>
                            Join Our Community!
                        </h2>
                        <p className='text-gray-600 text-lg'>
                            Create your account and start shopping today
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Full Name
                            </label>
                            <div className='relative'>
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg 
                                              focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                                              transition-all duration-200 bg-white text-gray-900
                                              placeholder-gray-500'
                                    placeholder='Enter your full name'
                                    required
                                />
                                <User className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg 
                                              focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                                              transition-all duration-200 bg-white text-gray-900
                                              placeholder-gray-500'
                                    placeholder='Enter your email address'
                                    required
                                />
                                <Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg 
                                              focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                                              transition-all duration-200 bg-white text-gray-900
                                              placeholder-gray-500'
                                    placeholder='Create a secure password'
                                    required
                                />
                                <Lock className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                                >
                                    {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type='submit' 
                            disabled={loading}
                            className='w-full bg-gray-900 text-white py-3 rounded-lg font-semibold 
                                      hover:bg-gray-700 transition-all duration-200 transform hover:scale-[1.02]
                                      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                                      flex items-center justify-center gap-2 text-lg'
                        >
                            {loading ? (
                                <div className='flex items-center gap-2'>
                                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                    Creating Account...
                                </div>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className='h-5 w-5' />
                                </>
                            )}
                        </button>

                        {/* Login Link */}
                        <div className='text-center pt-4'>
                            <p className='text-gray-600'>
                                Already have an account?{' '}
                                <Link 
                                    to={`/login?redirect=${encodeURIComponent(redirect)}`} 
                                    className="text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-200"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>

                    {/* Trust Indicators */}
                    <div className='mt-8 pt-6 border-t border-gray-200'>
                        <div className='flex items-center justify-center space-x-6 text-sm text-gray-500'>
                            <div className='flex items-center'>
                                <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                                100% Secure
                            </div>
                            <div className='flex items-center'>
                                <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                                Instant Access
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className='hidden lg:block lg:w-1/2 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40'></div>
                <img 
                    src={login} 
                    alt="Fashion Collection"
                    loading="lazy"
                    className='w-full h-full object-cover'
                />
                <div className='absolute bottom-8 left-8 right-8 text-white'>
                    <h3 className='text-2xl font-bold mb-2'>Start Your Style Journey</h3>
                    <p className='text-lg opacity-90'>Join our fashion community and discover endless possibilities</p>
                </div>
            </div>
        </div>
    )
}


export default Register