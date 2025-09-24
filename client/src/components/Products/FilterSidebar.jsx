import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 10000,
  })

  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    gender: true,
    color: true,
    size: false,
    material: false,
    brand: false,
    price: true
  });

  const categories = ["Top Wear", "Bottom Wear", "Dresses", "Sets"];

  const colors = [
    { name: "Red", value: "red", hex: "#ef4444" },
    { name: "Blue", value: "blue", hex: "#3b82f6" },
    { name: "Black", value: "black", hex: "#000000" },
    { name: "Green", value: "green", hex: "#10b981" },
    { name: "Yellow", value: "yellow", hex: "#f59e0b" },
    { name: "Gray", value: "gray", hex: "#6b7280" },
    { name: "White", value: "white", hex: "#ffffff" },
    { name: "Pink", value: "pink", hex: "#ec4899" },
    { name: "Beige", value: "beige", hex: "#d4b885" },
    { name: "Navy", value: "navy", hex: "#1e3a8a" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Woolmate",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit", 
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
    "WinterWear",
    "ElegantStyle",
    "DenimCo",
    "ActiveFit",
    "ClassicLook",
    "SummerVibes",
    "RockStyle",
    "StripeStyle",
    "FlowFashion",
    "RetroVibes",
    "OutdoorLite",
    "LinenLux",
    "OfficePro",
    "CozyComfort",
    "FitPro",
    "VintageModern",
    "NightOut",
    "ClassicPolo",
    "StreetFit",
    "FeminineFlair",
    "TimelessStyle",
    "ModernGrace",
    "ProFit",
    "ZenStyle",
    "ClassicKnits",
    "ModernFemme",
    "GymFit",
    "SimpleElegance"
  ];

  const genders = ["Men", "Women", "Unisex"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 10000
    });
    setPriceRange([0, params.maxPrice || 10000]);
  }, [searchParams]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterchange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };
    if (type === 'checkbox') {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  }

  const handleColorSelect = (colorValue) => {
    const newFilters = { ...filters, color: filters.color === colorValue ? "" : colorValue };
    setFilters(newFilters);
    updateURLParams(newFilters);
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  }

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateURLParams(newFilters);
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      category: "",
      gender: "",
      color: "",
      size: [],
      material: [],
      brand: [],
      minPrice: 0,
      maxPrice: 10000,
    };
    setFilters(clearedFilters);
    setPriceRange([0, 10000]);
    setSearchParams({});
    navigate('/collections/all');
  }

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.category) count++;
    if (filters.gender) count++;
    if (filters.color) count++;
    count += filters.size.length;
    count += filters.material.length;
    count += filters.brand.length;
    if (filters.maxPrice < 10000) count++;
    return count;
  }

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button 
        onClick={onToggle}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isExpanded && (
        <div className="mt-3 space-y-2">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Filters
            {getActiveFilterCount() > 0 && (
              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {getActiveFilterCount()}
              </span>
            )}
          </h3>
          {getActiveFilterCount() > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-0">
        {/* Category Filter */}
        <FilterSection 
          title="Category" 
          isExpanded={expandedSections.category}
          onToggle={() => toggleSection('category')}
        >
          {categories.map((category) => (
            <label key={category} className="flex items-center group cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                onChange={handleFilterchange}
                checked={filters.category === category}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                {category}
              </span>
            </label>
          ))}
        </FilterSection>

        {/* Gender Filter */}
        <FilterSection 
          title="Gender" 
          isExpanded={expandedSections.gender}
          onToggle={() => toggleSection('gender')}
        >
          {genders.map((gender) => (
            <label key={gender} className="flex items-center group cursor-pointer">
              <input
                type="radio"
                name="gender"
                value={gender}
                onChange={handleFilterchange}
                checked={filters.gender === gender}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                {gender}
              </span>
            </label>
          ))}
        </FilterSection>

        {/* Color Filter */}
        <FilterSection 
          title="Color" 
          isExpanded={expandedSections.color}
          onToggle={() => toggleSection('color')}
        >
          <div className="grid grid-cols-5 gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => handleColorSelect(color.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                  filters.color === color.value 
                    ? "border-blue-500 ring-2 ring-blue-200" 
                    : "border-gray-300 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                {color.value === 'white' && (
                  <div className="w-full h-full rounded-full border border-gray-200" />
                )}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Size Filter */}
        <FilterSection 
          title="Size" 
          isExpanded={expandedSections.size}
          onToggle={() => toggleSection('size')}
        >
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="checkbox"
                  value={size}
                  onChange={handleFilterchange}
                  checked={filters.size.includes(size)}
                  name="size"
                  className="sr-only"
                />
                <div className={`text-center py-2 px-3 text-sm border rounded-md transition-colors ${
                  filters.size.includes(size)
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}>
                  {size}
                </div>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Material Filter */}
        <FilterSection 
          title="Material" 
          isExpanded={expandedSections.material}
          onToggle={() => toggleSection('material')}
        >
          {materials.map((material) => (
            <label key={material} className="flex items-center group cursor-pointer">
              <input
                value={material}
                onChange={handleFilterchange}
                checked={filters.material.includes(material)}
                type="checkbox"
                name="material"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                {material}
              </span>
            </label>
          ))}
        </FilterSection>

        {/* Brand Filter */}
        <FilterSection 
          title="Brand" 
          isExpanded={expandedSections.brand}
          onToggle={() => toggleSection('brand')}
        >
          {brands.map((brand) => (
            <label key={brand} className="flex items-center group cursor-pointer">
              <input
                value={brand}
                onChange={handleFilterchange}
                checked={filters.brand.includes(brand)}
                type="checkbox"
                name="brand"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                {brand}
              </span>
            </label>
          ))}
        </FilterSection>

        {/* Price Range Filter */}
        <FilterSection 
          title="Price Range" 
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection('price')}
        >
          <div className="space-y-3">
            <input
              type="range"
              name="priceRange"
              min={0}
              max={10000}
              step={100}
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">₹0</span>
              <div className="px-3 py-1 bg-blue-50 rounded-md">
                <span className="text-sm font-medium text-blue-700">₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </FilterSection>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}

export default FilterSidebar