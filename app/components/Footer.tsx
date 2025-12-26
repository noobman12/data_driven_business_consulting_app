import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           {/* Brand */}
           <div>
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#873ae3] to-[#ef4476]"></div>
                 <span className="text-xl font-bold text-white">OPTIVIS</span>
              </div>
              <p className="text-gray-400 mb-6">
                 Strategic Consulting to Elevate Your Business to Success
              </p>
           </div>

           {/* Links 1 */}
           <div>
              <h4 className="text-white font-bold text-lg mb-6">Home</h4>
              <ul className="space-y-4 text-gray-400">
                 <li><Link href="#" className="hover:text-white transition-colors">Vision & Mission</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Company Values</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Leadership</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
           </div>

           {/* Links 2 */}
           <div>
              <h4 className="text-white font-bold text-lg mb-6">About Us</h4>
              <ul className="space-y-4 text-gray-400">
                 <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Teams</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Awards</Link></li>
              </ul>
           </div>

           {/* Socials */}
           <div>
              <h4 className="text-white font-bold text-lg mb-6">Social Media</h4>
              <ul className="space-y-4 text-gray-400">
                 <li><Link href="#" className="hover:text-white transition-colors">WhatsApp</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Email</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
                 <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
              </ul>
           </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
           <div className="flex items-center gap-2">
              <span>© 2025 Optivis, All right reserved</span>
           </div>
           <div className="flex gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
