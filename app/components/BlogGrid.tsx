import React from 'react';
import Image from 'next/image';

const BlogGrid = () => {
  return (
    <section className="py-24 relative bg-black">
       <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Blog/Insight</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Stay Informed, Gain Knowledge, <br />
               <span className="text-gradient">Elevate Your Business Growth</span>
             </h2>
             {/* Search Bar */}
             <div className="mt-8 max-w-md mx-auto relative">
                 <input 
                   type="text" 
                   placeholder="Search for your article" 
                   className="w-full bg-[#1A1A1A] border border-white/10 rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:border-[#ef4476] transition-colors"
                 />
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 border border-white/30 rounded-full"></div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
             {/* Featured Main Post */}
             <div className="space-y-6">
                 <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                     <Image 
                       src="/images/mjjhtkl6-wd3oesc.png" 
                       alt="Featured" 
                       fill
                       className="object-cover"
                     />
                 </div>
                 <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/20"></div>
                     <div>
                         <p className="text-white font-bold text-sm">Brooklyn Simmons</p>
                         <p className="text-gray-500 text-xs">Author</p>
                     </div>
                 </div>
                 <h3 className="text-3xl font-bold text-white leading-tight">Future-Proofing Your Business: Top Strategies for Sustainable Growth</h3>
                 <p className="text-gray-400">Explore key strategies to adapt, innovate, and thrive in an ever-evolving market...</p>
                 <div className="flex gap-2">
                     <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-300">Business Tips</span>
                     <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-300">6 min read</span>
                 </div>
             </div>

             {/* Right List */}
             <div className="flex flex-col gap-6">
                 {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="flex gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ef4476]/50 transition-colors cursor-pointer group">
                         <div className="relative w-32 h-24 shrink-0 rounded-xl overflow-hidden bg-white/10">
                             <Image src="/images/mjjhtkl6-pezg75e.png" alt="" fill className="object-cover" />
                         </div>
                         <div className="flex flex-col justify-between">
                             <h4 className="text-lg font-bold text-white leading-snug group-hover:text-[#ef4476] transition-colors">The Power of Data-Driven Decisions in Modern Business</h4>
                             <p className="text-xs text-gray-400 line-clamp-2">Explore how data analytics can transform decision-making processes...</p>
                             <div className="flex gap-2 mt-2">
                                 <span className="text-[10px] border border-white/10 px-2 py-0.5 rounded-full text-gray-400">Strategy</span>
                                 <span className="text-[10px] border border-white/10 px-2 py-0.5 rounded-full text-gray-400">5 min</span>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
          </div>

          {/* Large Horizontal Post */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-[#111] rounded-3xl p-8 border border-white/10">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
                  <Image src="/images/mjjhtkl6-n1t2db6.png" alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-bold text-white">Leadership in the Digital Age: Embracing Innovation, Driving Change, and Building Resilient Teams</h3>
                  <p className="text-gray-400 leading-relaxed">
                      In the rapidly evolving digital landscape, effective leadership requires adaptability, vision, and a forward-thinking mindset. Today's leaders must champion innovation and foster resilience...
                  </p>
                  <div className="flex gap-2">
                      <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-300">Leadership</span>
                      <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-300">8 min read</span>
                  </div>
              </div>
          </div>

          {/* Two Medium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                  <div key={i} className="rounded-3xl overflow-hidden bg-[#111] border border-white/10 group">
                      <div className="relative aspect-video bg-white/5">
                          <Image src="/images/mjjhtkl6-81lbh1w.png" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-8">
                          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ef4476] transition-colors">Cultivating a Strong Company Culture: Key Strategies for Sustainable Growth</h3>
                          <div className="flex gap-2">
                              <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-300">Culture</span>
                              <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-300">6 min</span>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

       </div>
    </section>
  );
};

export default BlogGrid;
