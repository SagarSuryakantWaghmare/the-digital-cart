import React, { useState } from 'react';
import { FaTags } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

const Banner = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="w-full bg-[#2176ff] text-white py-3 px-4 flex items-center justify-center relative">
      <span className="mx-auto text-center text-base md:text-lg flex items-center gap-2">
        <FaTags className="inline-block mr-1 text-lg" />
        Get an exclusive <span className="font-semibold">20% discount</span> on your first order!
        <a href="/login" className="underline hover:text-blue-200 font-medium flex items-center ml-2">
          <FiLogIn className="inline-block mr-1" />Login now
        </a>
      </span>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl hover:text-blue-200 focus:outline-none"
        aria-label="Close announcement bar"
        onClick={() => setShow(false)}
      >
        &times;
      </button>
    </div>
  );
}

export default Banner;