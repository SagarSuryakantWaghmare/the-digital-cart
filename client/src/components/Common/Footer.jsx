import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <h3 className='text-xl font-bold mb-4'>The Digital Cart</h3>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Your premium destination for modern fashion. Discover quality apparel that defines your style and comfort for everyday life.
            </p>
            <div className='space-y-3 text-gray-300'>
              <div className='flex items-center'>
                <Phone className='h-4 w-4 mr-3 text-gray-400' />
                <span className='text-sm'>+91-72193387XX</span>
              </div>
              <div className='flex items-center'>
                <Mail className='h-4 w-4 mr-3 text-gray-400' />
                <span className='text-sm'>hello@thedigitalcart.com</span>
              </div>
              <div className='flex items-center'>
                <MapPin className='h-4 w-4 mr-3 text-gray-400' />
                <span className='text-sm'>Chhatrapati Sambhajinagar, India</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Shop</h3>
            <ul className='space-y-3'>
              <li>
                <Link to="/collections/all?gender=Men&category=Top Wear" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  Men's Top Wear
                </Link>
              </li>
              <li>
                <Link to="/collections/all?gender=Women&category=Top Wear" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  Women's Top Wear
                </Link>
              </li>
              <li>
                <Link to="/collections/all?gender=Men&category=Bottom Wear" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  Men's Bottom Wear
                </Link>
              </li>
              <li>
                <Link to="/collections/all?gender=Women&category=Bottom Wear" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  Women's Bottom Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Support</h3>
            <ul className='space-y-3'>
              <li>
                <Link to="/contact" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" 
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'>
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Connect</h3>
            <div className='flex items-center space-x-4 mb-6'>
              <a href="https://www.facebook.com" target='_blank' 
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200'
              >
                <FaFacebook className='h-5 w-5 text-blue-400'/>
              </a>
              <a href="https://www.instagram.com" target='_blank' 
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200'
              >
                <FaInstagram className='h-5 w-5 text-pink-400'/>
              </a>
              <a href="https://www.twitter.com" target='_blank' 
                rel='noopener noreferrer'
                className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200'
              >
                <FaTwitter className='h-5 w-5 text-blue-400'/>
              </a>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Follow us for the latest updates, style tips, and exclusive offers from The Digital Cart.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © 2025 The Digital Cart. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link to="/privacy" className='text-gray-400 hover:text-white text-sm transition-colors duration-200'>
                Privacy Policy
              </Link>
              <Link to="/terms" className='text-gray-400 hover:text-white text-sm transition-colors duration-200'>
                Terms of Service
              </Link>
              <Link to="/cookies" className='text-gray-400 hover:text-white text-sm transition-colors duration-200'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer