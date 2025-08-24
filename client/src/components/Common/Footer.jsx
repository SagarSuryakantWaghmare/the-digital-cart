import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Phone } from "lucide-react";


const Footer = () => {
  return (
    <>
    <footer className='border-t py-12'>
          <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 '>
             <div>
              <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
              <p className='text-gray-500 mb-4'>
              Be the first to hear about new products,exclusive events,and 
              online offers.
              </p>
              <p className='font-medium text-sm text-gray-600'>
                Sign up and get 10% off your first order.
              </p>
              <form className='flex'>
                 <input type="email" placeholder='Enter your email'
                 className='p-3 w-full border-t border-l border-gray-300 rounded-l-md
                 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all'
                 required />
                 <button type='submit' className='bg-black text-white px-6 py-3 text-sm
                 rounded-r-md hover:bg-gray-800'>
                  Subscribe
                 </button>
              </form>
             </div>
             {/* links for the website */}
             <div>
              <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
              <ul className='space-y-2 text-gray-600'>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>Men's Top Wear</Link>
               </li>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>Women's Top Wear</Link>
               </li>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>Men's Bottom Wear</Link>
               </li>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>Women's Bottom Wear</Link>
               </li>
              </ul>
             </div>

             {/* Help links */}
             <div>
              <h3 className='text-lg text-gray-800 mb-4'>Support </h3>
              <ul className='space-y-2 text-gray-600'>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>Contact Us</Link>
               </li>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>About Us</Link>
               </li>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>FAQs</Link>
               </li>
               <li>
                <Link to="#" className='hover:text-gray-600 transition-colors '>Features</Link>
               </li>
              </ul>
             </div>
             {/* Follow Links */}
             <div>
                <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
                <div className='flex items-center space-x-4 mb-6'>
                  <a href="https://www.facebook.com" target='_blank' 
                  rel='noopener noreferrer'
                  className='hover:text-gray-900'
                  >
                    <FaFacebook className='h-5 w-5'/>
                  </a>
                  <a href="https://www.instagram.com" target='_blank' 
                  rel='noopener noreferrer'
                  className='hover:text-gray-900'
                  >
                    <FaInstagram className='h-5 w-5'/>
                  </a>
                  <a href="https://www.twitter.com" target='_blank' 
                  rel='noopener noreferrer'
                  className='hover:text-gray-900'
                  >
                    <FaTwitter className='h-5 w-5'/>
                  </a>
                </div>
                <p className='text-gray-500'>Call Us</p>
                <p>
                  <Phone className='inline-block mr-2'/>
                  +91-72193387XX
                </p>
             </div>
          </div>
          {/* Bottom of footer */}
          <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-gray-500 text-sm tracking-tighter text-center'>
              @2025,CompileTab.All Rights Reserved.
            </p>

          </div>
    </footer>
    </>
  )
}

export default Footer