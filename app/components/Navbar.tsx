import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#873ae3] to-[#ef4476] flex items-center justify-center">
                 {/* Logo Placeholder */}
                 <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white">OPTIVIS</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 bg-white/10 rounded-full px-8 py-2 border border-white/10">
        <Link href="/" className="text-white hover:text-gray-300 text-sm font-medium">Home</Link>
        <Link href="/about" className="text-white hover:text-gray-300 text-sm font-medium">About Us</Link>
        <Link href="/service" className="text-white hover:text-gray-300 text-sm font-medium">Service</Link>
        <Link href="/process" className="text-white hover:text-gray-300 text-sm font-medium">Process</Link>
        <Link href="/pricing" className="text-white hover:text-gray-300 text-sm font-medium">Pricing</Link>
        <Link href="/testimonials" className="text-white hover:text-gray-300 text-sm font-medium">Testimonials</Link>
        <Link href="/blog" className="text-white hover:text-gray-300 text-sm font-medium">Blog</Link>
        <Link href="#faq" className="text-white hover:text-gray-300 text-sm font-medium">FAQ</Link>
        <Link href="/booking" className="text-white hover:text-gray-300 text-sm font-medium">Contact Us</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 text-white text-sm">
           <span>English</span>
        </div>
        <Link href="/booking">
          <Button variant="secondary" className="text-sm px-6 py-2">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
