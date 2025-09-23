import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, Check } from 'lucide-react'

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  const sortOptions = [
    { value: "", label: "Default" },
    { value: "priceAsc", label: "Price: Low to High" },
    { value: "priceDesc", label: "Price: High to Low" },
    { value: "popularity", label: "Most Popular" },
    { value: "newest", label: "Newest First" },
    { value: "rating", label: "Highest Rated" },
  ];

  const currentSort = searchParams.get("sortBy") || "";
  const currentSortLabel = sortOptions.find(option => option.value === currentSort)?.label || "Default";

  const handleSortChange = (sortValue) => {
    if (sortValue) {
      searchParams.set("sortBy", sortValue);
    } else {
      searchParams.delete("sortBy");
    }
    setSearchParams(searchParams);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between min-w-[180px] px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span>Sort by: {currentSortLabel}</span>
        <ChevronDown 
          size={16} 
          className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 z-20 w-64 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="py-1">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                    currentSort === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <span>{option.label}</span>
                  {currentSort === option.value && (
                    <Check size={16} className="text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SortOptions