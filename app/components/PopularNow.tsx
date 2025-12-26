import React from 'react';
import Image from 'next/image';

const PopularNow = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
       <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
             <h2 className="text-3xl font-bold text-white">Popular Now</h2>
             <div className="flex gap-2">
                 <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">←</button>
                 <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200">→</button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="card-glass rounded-2xl p-4 hover:border-[#ef4476]/50 transition-colors group">
                     <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white/5">
                         <Image src="/images/mjjhtkl6-wd3oesc.png" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#ef4476] transition-colors">The Power of Data-Driven Decisions in Modern Business</h3>
                     <p className="text-sm text-gray-400 mb-4 line-clamp-2">Unlock the potential of your data to drive smarter business decisions...</p>
                     <div className="flex gap-2">
                         <span className="text-[10px] border border-white/10 px-2 py-0.5 rounded-full text-gray-400">Business Tips</span>
                         <span className="text-[10px] border border-white/10 px-2 py-0.5 rounded-full text-gray-400">6 Min Read</span>
                     </div>
                 </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default PopularNow;
