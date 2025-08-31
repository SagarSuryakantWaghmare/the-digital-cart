import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    const handleClickOutside = (e) => {
        // Close sidebar if clicked outside
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }

    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    });

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = [
                {
                    _id: '1',
                    name: 'Product 1',
                    price: 29.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 1 Image'
                        }
                    ]
                },
                {
                    _id: '2',
                    name: 'Product 2',
                    price: 39.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 2 Image'
                        }
                    ]
                },
                {
                    _id: '3',
                    name: 'Product 3',
                    price: 49.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 3 Image'
                        }
                    ]
                },
                {
                    _id: '4',
                    name: 'Product 4',
                    price: 59.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 4 Image'
                        }
                    ]
                },
                {
                    _id: '5',
                    name: 'Product 5',
                    price: 69.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 5 Image'
                        }
                    ]
                },
                {
                    _id: '6',
                    name: 'Product 6',
                    price: 79.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 6 Image'
                        }
                    ]
                },
                {
                    _id: '7',
                    name: 'Product 7',
                    price: 89.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 7 Image'
                        }
                    ]
                },
                {
                    _id: '8',
                    name: 'Product 8',
                    price: 99.99,
                    images: [
                        {
                            url: 'https://via.placeholder.com/150',
                            altText: 'Product 8 Image'
                        }
                    ]
                }
            ]
            setProducts(fetchProducts);
        }, 1000);
    }, [])
    return (
        <div className='flex flex-col lg:flex-row'>
            <button
                className='lg:hidden border p-2 flex justify-center items-center'
                onClick={toggleSideBar}
            >
                <FaFilter className='mr-2' />Filters
            </button>
            <div ref={sidebarRef} className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar} />
            </div>
            <div className='flex-grow p-4'>
               <h2 className='text-2xl uppercase mb-4'>
                 All Collection
               </h2>
               {/* Sort Options */}
               <SortOptions/>
               {/* Grid for the products */}
               <ProductGrid products={products} />
            </div>

        </div>
    )
}

export default CollectionPage