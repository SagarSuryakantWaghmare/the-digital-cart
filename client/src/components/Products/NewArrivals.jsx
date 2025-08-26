import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft,ArrowRight  } from 'lucide-react';
import {Link } from 'react-router-dom'
const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const NewArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        }
      ]
    },
    {
      _id: "2",
      name: "Trendy Hoodie",
      price: 1500,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Trendy Hoodie",
        }
      ]
    },
    {
      _id: "3",
      name: "Casual T-Shirt",
      price: 800,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Casual T-Shirt",
        }
      ]
    },
    {
      _id: "4",
      name: "Denim Jeans",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Denim Jeans",
        }
      ]
    },
    {
      _id: "5",
      name: "Sneakers",
      price: 2500,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Sneakers",
        }
      ]
    },
    {
      _id: "6",
      name: "Formal Shirt",
      price: 1300,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Formal Shirt",
        }
      ]
    },
    {
      _id: "7",
      name: "Leather Belt",
      price: 600,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Leather Belt",
        }
      ]
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x=e.pageX-scrollRef.current.offsetLeft;
    const walk=(x-startX);
    scrollRef.current.scrollLeft=scrollLeft-walk;
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
  }, []);

  // Also update scroll buttons after scroll by button
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 350); // allow smooth scroll to finish
  }

  return (
    <section className='py-16 px-4 lg:px-0 '>
      <div className='container mx-auto text-center mb10 relative '>
        <h2 className="text3xl font-bold mb-4">
          Explore New Arrivals
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover
        </p>
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button onClick={() => scroll("left")} disabled={!canScrollLeft} className={`p-2 rounded border ${canScrollLeft ? 'bg-white text-black' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            {/* left arrow */}
            <ArrowLeft className='text-2xl' />
          </button>
          <button onClick={() => scroll("right")} disabled={!canScrollRight} className={`p-2 rounded border ${canScrollRight ? 'bg-white text-black' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            <ArrowRight className='text-2xl' />
          </button>
        </div>
      </div>
      {/* Scrollable contained */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative${isDragging ? ' cursor-grabbing' : ' cursor-grab'}`}>
        {NewArrivals.map((product) => (
          <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
            <img src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className='w-full h-[500px] object-cover rounded-lg'
              draggable="false"
            />
            <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg'>
              <Link to={`/product/${product._id}`} className="block">
                <h4 className=' font-medium'>{product.name}</h4>
                <p className='mt-1'>${product.price}</p>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default NewArrivals
