'use client';

import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const ProcessHero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col pt-32 pb-20 overflow-hidden">
      {/* Background Gradients/Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#873ae3]/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ef4476]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 mb-20">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
           <div className="w-2 h-2 rounded-full bg-[#873ae3]"></div>
           <span className="text-white/80 text-sm font-medium">Consulting</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] max-w-5xl tracking-tight">
          Step-by-Step Strategy <br />
          for Your <span className="text-[#ef4476]">Business</span> <br />
          <span className="text-[#ef4476]">Success!</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
          Streamline your process and accelerate results with a proven, data-driven workflow tailored to your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/booking">
            <Button variant="primary" className="text-lg px-8 py-4 rounded-full bg-[#EF4476] cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Link href="/process">
            <Button variant="secondary" className="text-lg px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 border-none cursor-pointer">
              Learn More
            </Button>
          </Link>
        </div>
        
        {/* Overlapping Cards Visual */}
        <div className="mt-16 relative w-full max-w-4xl mx-auto h-[300px]">
             {/* Card 1 - Left */}
             <div className="absolute top-0 left-0 md:left-10 z-10 w-64 h-48 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-center shadow-2xl transform -rotate-6">
                 <Image src="/images/mjjhtkkj-mebpcpo.svg" alt="" width={48} height={48} className="opacity-50" />
             </div>
             
             {/* Card 2 - Center Main */}
             <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 w-80 h-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-center shadow-2xl">
                 <Image src="/images/mjjhtkkj-nuvpkrc.svg" alt="" width={64} height={64} className="opacity-80" />
             </div>

             {/* Card 3 - Right */}
             <div className="absolute top-20 right-0 md:right-10 z-10 w-72 h-52 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-center shadow-2xl transform rotate-3">
                 <Image src="/images/mjjhtkkj-oouazkb.svg" alt="" width={48} height={48} className="opacity-50" />
             </div>
        </div>

        {/* Partner Strip */}
        <div className="mt-24 flex gap-12 opacity-50 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
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

export default ProcessHero;
