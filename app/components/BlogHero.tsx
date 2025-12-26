'use client';

import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const BlogHero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col pt-32 pb-20 overflow-hidden">
      {/* Background Gradients/Blurs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#873ae3]/20 to-[#ef4476]/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 z-10 flex-grow">
        
        {/* Left Content */}
        <div className="md:w-1/2">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
               <div className="w-2 h-2 rounded-full bg-[#ef4476]"></div>
               <span className="text-white/80 text-sm font-medium">Data-Driven Decisions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Insights, <br />
              Industry Trends, and <br />
              <span className="text-gradient">Strategies for Success</span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="primary" className="text-lg px-8 py-4 rounded-full">
                Get Started for Free
              </Button>
              <Link href="/process">
                <Button variant="secondary" className="text-lg px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 border-none">
                  Learn More
                </Button>
              </Link>
            </div>
        </div>

        {/* Right Content - Overlapping Cards */}
        <div className="md:w-1/2 relative h-[400px] w-full">
             {/* Card 1 - Main */}
             <div className="absolute top-0 right-10 z-20 w-80 h-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-center shadow-2xl">
                 <Image src="/images/mjjhtkkj-mebpcpo.svg" alt="" width={56} height={56} className="opacity-50" />
             </div>
             
             {/* Card 2 - Overlapping */}
             <div className="absolute top-24 left-10 z-10 w-72 h-52 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-center shadow-2xl">
                 <Image src="/images/mjjhtkkj-nuvpkrc.svg" alt="" width={56} height={56} className="opacity-50" />
             </div>

             <div className="absolute bottom-5 right-0 max-w-xs text-right">
                <p className="text-gray-400 text-sm">We empower businesses with expert strategies, innovative solutions, and data-driven insights to drive growth, efficiency, and long-term success.</p>
             </div>
        </div>

      </div>
      
      {/* Partner Strip */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/5">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider">Please be ready for great breaking businesses</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    <span className="text-white font-bold text-lg">LogoIpsum</span>
                </div>
            ))}
          </div>
      </div>

    </section>
  );
};

export default BlogHero;
