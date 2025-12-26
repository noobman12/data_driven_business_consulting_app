'use client';

import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-20 overflow-hidden">
      {/* Background Gradients/Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#873ae3]/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f57c3c]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 z-10 flex-grow">
        
        {/* Left Content */}
        <div className="md:w-1/2">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
               <div className="w-2 h-2 rounded-full bg-[#ef4476]"></div>
               <span className="text-white/80 text-sm font-medium">Data-Driven Decisions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Strategic Solutions, <br />
              Smart Growth, and <br />
              <span className="text-gradient">Sustainable Success</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
              Empowering businesses through expert strategy, innovation, and measurable outcomes. We tailor our approach to your unique needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="text-lg px-8 py-4 rounded-full bg-[#EF4476] cursor-pointer">
                Get Started
              </Button>
              <Link href="/process">
                <Button variant="outline" className="text-lg px-8 py-4 rounded-full cursor-pointer">
                  Learn More
                </Button>
              </Link>
            </div>
        </div>

        {/* Right Content - Overlapping Card */}
        <div className="md:w-1/2 relative">
             <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:translate-x-12 shadow-2xl shadow-black/50">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                     <Image 
                       src="/images/mjjhtkl6-n1t2db6.png" 
                       alt="Strategic Meeting" 
                       fill
                       className="object-cover"
                     />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                      <p className="text-white text-sm font-medium">"Our strategic partnership has been pivotal in navigating complex market shifts."</p>
                  </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-2xl opacity-40"></div>
        </div>

      </div>
      
      {/* Mini Nav / Breadcrumbs */}
      <div className="container mx-auto px-4 mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-8 text-gray-500 text-sm font-medium uppercase tracking-wider">
              <div className="flex items-center gap-2 text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ef4476]"></div>
                  Overview
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                  Vision & Mission
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                  Our Expertise
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                  Delivery
              </div>
          </div>
      </div>

    </section>
  );
};

export default AboutHero;
