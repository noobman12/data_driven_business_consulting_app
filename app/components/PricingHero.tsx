'use client';

import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const PricingHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradients/Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ef4476]/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#873ae3]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 mb-20">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
           <div className="w-2 h-2 rounded-full bg-[#ef4476]"></div>
           <span className="text-white/80 text-sm font-medium">Data-Driven Decisions</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] max-w-5xl tracking-tight">
          Flexible Plans, Expert Solutions, and <br />
          <span className="text-gradient">Maximum Value</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
          Our comprehensive consulting services empower businesses with strategic insights, innovative solutions, and data-driven approaches to achieve lasting success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="text-lg px-8 py-4 rounded-full">
            Get Started for Free
          </Button>
          <Link href="/process">
            <Button variant="secondary" className="text-lg px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 border-none">
              Learn More
            </Button>
          </Link>
        </div>
        
        {/* Partner Strip */}
        <div className="mt-16 pt-8 border-t border-white/5 w-full">
            <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider">Chosen by the world's big groundbreaking businesses</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20"></div>
                        <span className="text-white font-bold text-lg">LogoIpsum</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
