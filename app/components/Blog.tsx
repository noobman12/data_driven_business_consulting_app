import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div>
                <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                  <span className="text-gradient font-medium">Blog/Insight</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Stay Informed, Gain Knowledge, <br />
                  <span className="text-gradient">Elevate Your Business Growth</span>
                </h2>
             </div>
             <div className="flex items-center gap-4 border border-white/10 bg-white/5 rounded-xl px-4 py-3 min-w-[300px]">
                <span className="text-gray-400">What do you want to know?</span>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Featured Post */}
             <div className="group">
                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video lg:aspect-square mb-8">
                   <Image src="/images/mjjhtkl6-zuqgh1r.png" alt="Featured Blog" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <Image src="/images/mjjhtkl6-as8izik.png" alt="Author" width={48} height={48} className="rounded-full" />
                   <div>
                      <p className="text-white font-medium">Brooklyn Simmons</p>
                      <p className="text-gray-400 text-sm">Author</p>
                   </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#ef4476] transition-colors">Future-Proofing Your Business: Top Strategies for Sustainable Growth</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">Explore key strategies to adapt, innovate, and thrive in an ever-evolving market, ensuring your business stays ahead of the competition</p>
                <div className="flex gap-4">
                   <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white">Business Tips</span>
                   <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white">6 Min Read</span>
                </div>
             </div>

             {/* Recent Posts List */}
             <div className="space-y-8">
                {[1, 2, 3, 4].map((_, index) => (
                   <div key={index} className="flex gap-6 group items-center card-glass p-4 rounded-xl border border-transparent hover:border-white/10 transition-colors">
                      <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                         <Image src="/images/mjjhtkl6-wxdcrby.png" alt="Blog Thumb" fill className="object-cover" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#ef4476] transition-colors line-clamp-2">The Power of Data-Driven Decisions in Modern Business</h4>
                         <p className="text-gray-400 text-sm mb-3 line-clamp-1">Explore key strategies to adapt, innovate, and thrive...</p>
                         <div className="flex gap-4">
                            <span className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white">Business Tips</span>
                            <span className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white">6 Min Read</span>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default Blog;
