import React from 'react'
import heroImg from "../../assets/bg.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
        <div className='w-full'>
            <img 
                src={heroImg} 
                alt="hero Image"
                loading="lazy"
                className='w-full brightness-75 h-[400px] md:h-[500px] lg:h-[600px]
                object-cover' 
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 flex items-center justify-center'>
             <div className='text-center text-white p-4 md:p-8 max-w-4xl mx-auto'>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase mb-6 
                drop-shadow-2xl leading-tight'>
                 Style <span className='text-yellow-400'>Beyond</span><br />
                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600'>
                    Limits
                 </span>
                </h1>
                <p className='text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed 
                drop-shadow-lg font-medium'>
                    Discover premium fashion collections crafted for the modern lifestyle with worldwide delivery.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <Link to="/collections/all" 
                    className='bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold
                    hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform 
                    hover:scale-105 shadow-xl min-w-[160px]'>
                        Shop Now
                    </Link>
                    <Link to="/collections/all" 
                    className='border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold
                    hover:bg-white hover:text-gray-900 transition-all duration-300 transform 
                    hover:scale-105 min-w-[160px]'>
                        View Collections
                    </Link>
                </div>
             </div>
            </div>
        </div>
    </section>
  )
}

export default Hero