import React from 'react';
import Image from 'next/image';

const SuccessStoriesGallery = () => {
  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Client Testimonials</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               See Success Stories, Hear Real <span className="text-[#f57c3c]">Client</span> <br />
               <span className="text-[#ef4476]">Experiences</span>
             </h2>
          </div>

          <div className="relative">
             <div className="flex gap-6 overflow-hidden">
                {/* Simulated Carousel Items */}
                {[1, 2, 3].map((item, index) => (
                   <div key={index} className="flex-1 min-w-[300px] relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 group cursor-pointer">
                      <Image 
                        src="/images/mjjhtkl6-wd3oesc.png" 
                        alt={`Story ${index + 1}`} 
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white font-bold text-lg">Robert Fox</h3>
                          <p className="text-gray-400 text-sm">CEO of GrowthTech Solutions</p>
                      </div>
                   </div>
                ))}
             </div>

             {/* Navigation Dots */}
             <div className="flex justify-center gap-2 mt-8">
                 <div className="w-3 h-3 rounded-full bg-white"></div>
                 <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer"></div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default SuccessStoriesGallery;
