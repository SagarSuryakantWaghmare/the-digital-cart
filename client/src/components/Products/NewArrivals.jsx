import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'
import axios from 'axios';
const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  // const NewArrivals = [
  //   {
  //     _id: "1",
  //     name: "Stylish Jacket",
  //     price: 1200,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=1",
  //         altText: "Stylish Jacket",
  //       }
  //     ]
  //   },
  //   {
  //     _id: "2",
  //     name: "Trendy Hoodie",
  //     price: 1500,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=2",
  //         altText: "Trendy Hoodie",
  //       }
  //     ]
  //   },
  //   {
  //     _id: "3",
  //     name: "Casual T-Shirt",
  //     price: 800,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=3",
  //         altText: "Casual T-Shirt",
  //       }
  //     ]
  //   },
  //   {
  //     _id: "4",
  //     name: "Denim Jeans",
  //     price: 2000,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=4",
  //         altText: "Denim Jeans",
  //       }
  //     ]
  //   },
  //   {
  //     _id: "5",
  //     name: "Sneakers",
  //     price: 2500,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=5",
  //         altText: "Sneakers",
  //       }
  //     ]
  //   },
  //   {
  //     _id: "6",
  //     name: "Formal Shirt",
  //     price: 1300,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=6",
  //         altText: "Formal Shirt",
  //       }
  //     ]
  //   },
  //   {
  //     _id: "7",
  //     name: "Leather Belt",
  //     price: 600,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=7",
  //         altText: "Leather Belt",
  //       }
  //     ]
  //   }
  // ];

  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    const fetchNewArrival = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
         console.error(error);
      }
    };
    fetchNewArrival();
  },[])
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

  // scroll function already defined above, so remove this duplicate.
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    const leftScroll = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(leftScroll < maxScrollLeft - 1); // -1 for floating point precision
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [newArrivals]);

  // Also update scroll buttons after scroll by button
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 350);
  }

  return (
    <section className='py-16 md:py-24 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end md:justify-between mb-12'>
          <div className='mb-8 md:mb-0'>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600'>Arrivals</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Discover the latest trends and must-have pieces that just landed in our store
            </p>
          </div>
          
          {/* Scroll Controls */}
          <div className="flex space-x-3">
            <button 
              onClick={() => scroll("left")} 
              disabled={!canScrollLeft} 
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                canScrollLeft 
                  ? 'bg-gray-900 text-white border-gray-900 hover:bg-gray-700 hover:scale-110' 
                  : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              }`}>
              <ArrowLeft className='w-5 h-5' />
            </button>
            <button 
              onClick={() => scroll("right")} 
              disabled={!canScrollRight} 
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                canScrollRight 
                  ? 'bg-gray-900 text-white border-gray-900 hover:bg-gray-700 hover:scale-110' 
                  : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              }`}>
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        </div>
        
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`overflow-x-auto scrollbar-hide flex space-x-6 pb-4 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {newArrivals.map((product) => (
            <div key={product._id} className='group flex-shrink-0 w-[280px] md:w-[320px]'>
              <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500'>
                <img 
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  loading="lazy"
                  className='w-full h-[400px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-110'
                  draggable="false"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Product Info Overlay */}
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <Link to={`/product/${product._id}`} className="block">
                    <h4 className='text-xl font-bold mb-2 line-clamp-1'>{product.name}</h4>
                    <div className='flex items-center justify-between'>
                      <p className='text-2xl font-bold text-yellow-400'>${product.price}</p>
                      <div className='bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0'>
                        View Details
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* New Badge */}
                <div className='absolute top-4 left-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  NEW
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className='text-center mt-12'>
          <Link 
            to="/collections/all" 
            className='inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full 
            font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105'>
            View All New Arrivals
            <ArrowRight className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
