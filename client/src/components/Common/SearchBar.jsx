import React from 'react'
import { useState } from 'react'
import { Search, X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProductsByFilters } from '../../redux/slice/productSlice'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSearchTerm(''); // Clear search when closing
    }
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(fetchProductsByFilters({ search: searchTerm }));
      navigate(`/collections/all?search=${searchTerm}`)
      setIsOpen(false); // Close search on mobile after search
    }
  }

  return (
    <div className="relative">
      {/* Desktop Search - Always visible */}
      <div className="hidden sm:block">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 pl-10 pr-4 
                        text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 
                        focus:border-transparent transition-all duration-200 hover:bg-gray-100"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden">
        {isOpen ? (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Search Products</h2>
              <button
                onClick={handleSearchToggle}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-3 pl-12 pr-4 
                            text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 
                            focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white 
                            px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSearchToggle}
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            <Search className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}


export default SearchBar