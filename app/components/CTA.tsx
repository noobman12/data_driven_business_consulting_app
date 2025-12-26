import React from 'react';
import Button from './Button';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-black border border-white/10 p-12 md:p-24 text-center">
             {/* Background Image/Overlay */}
             <div className="absolute inset-0 z-0">
                <Image src="/images/mjjhtkkk-oi0h0vq.svg" alt="Background" fill className="object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
             </div>
             
             <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-[32px]">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                   Unlock Your Business Potential Get <br />
                   <span className="bg-gradient-to-br from-[#873ae3] via-[#ef4476] to-[#f57c3c] bg-clip-text text-transparent">Expert Consultation</span> for <br />
                   Sustainable Growth <span className="bg-gradient-to-br from-[#873ae3] via-[#ef4476] to-[#f57c3c] bg-clip-text text-transparent">Today!</span>
                </h2>
                <Button variant="primary" className="text-lg px-8 py-4 bg-[#EF4476] text-white rounded-full cursor-pointer">
                   Get Started for Free
                </Button>
             </div>

             {/* Decorative blurred shapes */}
             <div className="absolute top-10 right-10 w-64 h-64 bg-[#f57c3c] rounded-full blur-[100px] opacity-30"></div>
             <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#873ae3] rounded-full blur-[100px] opacity-30"></div>
          </div>
       </div>
    </section>
  );
};

export default CTA;
