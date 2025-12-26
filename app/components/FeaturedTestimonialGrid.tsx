import React from 'react';

const FeaturedTestimonialGrid = () => {
  return (
    <section className="py-24 relative bg-[#0a0a0a] overflow-hidden">
       {/* Grid Background */}
       <div className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
       </div>

       <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl mx-auto border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl p-12 md:p-20 relative overflow-hidden text-center">
               
               {/* Decorative Gradient Squares */}
               <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#f57c3c] to-[#ef4476] opacity-80 blur-2xl"></div>
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#873ae3] to-[#ef4476] opacity-80 blur-2xl"></div>
               <div className="absolute top-10 left-10 w-20 h-20 bg-[#f57c3c] opacity-20"></div> {/* Square visual */}
               <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#873ae3] opacity-20"></div> {/* Square visual */}

               {/* Tags */}
               <div className="flex justify-center gap-3 mb-10 flex-wrap">
                   <span className="px-4 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-gray-300">Market Research Analysis</span>
                   <span className="px-4 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-gray-300">Digital Transformation Innovation</span>
                   <span className="px-4 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-gray-300">More</span>
               </div>

               <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-10">
                   "Working with Optivis has been a game-changer. Their expert insights and strategic approach helped us streamline operations, improve financial performance, and expand into new markets. The personalized support and data-driven solutions made a real difference. Highly recommended for any business looking to grow!"
               </blockquote>

               <div>
                   <cite className="text-white font-bold text-lg not-italic block mb-1">John Smith</cite>
                   <span className="text-gray-400 text-sm">CEO of GrowthTech Solutions</span>
               </div>

               {/* Avatars Row */}
               <div className="flex justify-center gap-4 mt-10">
                   {[1, 2, 3, 4, 5].map((i) => (
                       <div key={i} className="w-10 h-10 rounded-full bg-white/20 border border-white/10"></div>
                   ))}
               </div>
           </div>
       </div>
    </section>
  );
};

export default FeaturedTestimonialGrid;
