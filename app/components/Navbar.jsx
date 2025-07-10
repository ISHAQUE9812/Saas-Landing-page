'use client'; // This component needs client-side interactivity for the mobile menu

import React, { useState } from 'react';
import Link from 'next/link';

const   Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm p-4 md:px-8 border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-indigo-600">
          {/* Replace with your actual logo SVG/Image */}
          <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>SaaS App</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/features" className="text-gray-600 hover:text-indigo-600 font-medium">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 font-medium">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium">
            Contact
          </Link>
          {/* Login Link - now styled directly */}
          <Link href="/auth/login" className="text-indigo-600 hover:bg-indigo-50 font-semibold rounded-lg px-5 py-2.5 transition-all duration-200 ml-4">
            Login
          </Link>
          {/* Sign Up Link - now styled directly */}
          <Link href="/auth/signup" className="bg-indigo-600 text-white hover:bg-indigo-700 font-semibold rounded-lg px-5 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-50 rounded-lg shadow-md p-4 space-y-4 text-center">
          <Link href="/features" className="block text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="border-t border-gray-200 pt-4 space-y-3">
            {/* Login Link (Mobile) - now styled directly */}
            <Link href="/auth/login" className="block text-indigo-600 hover:bg-indigo-50 font-semibold rounded-lg px-5 py-2.5 transition-all duration-200 w-full" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            {/* Sign Up Link (Mobile) - now styled directly */}
            <Link href="/auth/signup" className="block bg-indigo-600 text-white hover:bg-indigo-700 font-semibold rounded-lg px-5 py-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar