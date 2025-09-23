import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import { X } from 'lucide-react';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slice/productSlice';

const CollectionPage = () => {
    const { collection } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        const queryParams = Object.fromEntries([...searchParams]);
        dispatch(fetchProductsByFilters({ collection, ...queryParams }));
    }, [dispatch, collection, searchParams]);

    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, []);

    // Get collection title from URL params
    const getCollectionTitle = () => {
        if (collection === 'all') return 'All Collections';
        if (collection === 'men') return 'Men\'s Collection';
        if (collection === 'women') return 'Women\'s Collection';
        if (collection === 'featured') return 'Featured Products';
        return collection?.charAt(0).toUpperCase() + collection?.slice(1) || 'Collections';
    };

    // Get active filters count
    const getActiveFiltersCount = () => {
        const params = Object.fromEntries([...searchParams]);
        return Object.keys(params).filter(key => 
            key !== 'page' && key !== 'sortBy' && params[key]
        ).length;
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Header Section */}
            <div className='bg-white border-b border-gray-200'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                        <div>
                            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                                {getCollectionTitle()}
                            </h1>
                            <p className='text-gray-600'>
                                {loading ? 'Loading products...' : `${products?.length || 0} products found`}
                            </p>
                        </div>
                    </div>

                    {/* Mobile Filter Button */}
                    <div className='lg:hidden mt-4'>
                        <button
                            className='flex items-center justify-center w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200'
                            onClick={toggleSideBar}
                        >
                            <FaFilter className='mr-2 h-4 w-4' />
                            Filters & Sort
                            {getActiveFiltersCount() > 0 && (
                                <span className='ml-2 bg-white text-gray-900 rounded-full px-2 py-1 text-xs font-bold'>
                                    {getActiveFiltersCount()}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                <div className='flex gap-6'>
                    {/* Desktop Sidebar */}
                    <div className='hidden lg:block w-80 flex-shrink-0'>
                        <div className='sticky top-6'>
                            <FilterSidebar />
                        </div>
                    </div>

                    {/* Mobile Sidebar Overlay */}
                    {isSidebarOpen && (
                        <div className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setIsSidebarOpen(false)}></div>
                    )}

                    {/* Mobile Sidebar */}
                    <div ref={sidebarRef} className={`lg:hidden fixed inset-y-0 left-0 z-50 w-80 bg-white transform transition-transform duration-300 ease-in-out ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                            <h2 className='text-lg font-semibold text-gray-900'>Filters & Sort</h2>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className='p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200'
                            >
                                <X className='h-5 w-5' />
                            </button>
                        </div>
                        <div className='overflow-y-auto h-full pb-20'>
                            <FilterSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSideBar} />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className='flex-1 min-w-0'>
                        {/* Sort Options and Results Info */}
                        <div className='flex items-center justify-between mb-6'>
                            <div className='hidden lg:block'>
                                {getActiveFiltersCount() > 0 && (
                                    <p className='text-sm text-gray-600'>
                                        {getActiveFiltersCount()} filter{getActiveFiltersCount() !== 1 ? 's' : ''} applied
                                    </p>
                                )}
                            </div>
                            <SortOptions />
                        </div>

                        {/* Products Grid */}
                        <ProductGrid 
                            products={products} 
                            loading={loading} 
                            error={error}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionPage