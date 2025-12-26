'use client';

import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradients/Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#873ae3]/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#ef4476]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 mb-20">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
           <div className="w-2 h-2 rounded-full bg-[#ef4476]"></div>
           <span className="text-white/80 text-sm font-medium">Data-Driven Decisions</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] max-w-5xl tracking-tight">
          Strategic Consulting to <br />
          <span className="text-gradient">Elevate Your Business to Success</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed font-light">
          Unlock growth, optimize operations, and drive success with tailored strategies from industry-leading business consultants. We provide data-driven insights & innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/pricing">
            <Button variant="primary" className="text-lg px-8 py-4 rounded-full bg-[#EF4476] cursor-pointer">
              Get Started for Free
            </Button>
          </Link>
          <Link href="/process">
            <Button variant="secondary" className="text-lg px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 border-none cursor-pointer">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Hero Cards Grid (Replacing the single image) */}
      <div className="container mx-auto px-4 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { title: "Data-Driven Insights", desc: "Unlock growth, optimize operations, and drive success with tailored strategies.", icon: "/images/mjjhtkkj-mebpcpo.svg" },
               { title: "Innovative Solutions", desc: "We provide data-driven insights & innovative solutions for sustainable success.", icon: "/images/mjjhtkkj-nuvpkrc.svg" },
               { title: "Expert Consultation", desc: "Unlock growth, optimize operations, and drive success with tailored strategies.", icon: "/images/mjjhtkkj-oouazkb.svg" }
            ].map((card, idx) => (
               <div key={idx} className="card-glass p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-start hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 mb-6">
                     <Image src={card.icon} alt="" width={24} height={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white hover:bg-white/10 cursor-pointer transition-colors">
                     Explore
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Hero;
