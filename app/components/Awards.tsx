import React from 'react';
import Image from 'next/image';

const Awards = () => {
  const badges = [
    { title: "ISO Certified", sub: "Global Standards", color: "from-blue-500 to-cyan-500" },
    { title: "Top Consultant", sub: "2024 Award", color: "from-[#ef4476] to-[#f57c3c]" },
    { title: "Partner Verified", sub: "Trusted Network", color: "from-purple-500 to-pink-500" },
    { title: "Award-Winning", sub: "Excellence", color: "from-amber-400 to-orange-500" }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recognized Excellence, Certified <br />
              <span className="text-gradient">Expertise, and Proven Success</span>
            </h2>
         </div>

         <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {badges.map((badge, index) => (
               <div key={index} className="flex flex-col items-center group">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${badge.color} p-1 mb-6 shadow-lg shadow-white/5 group-hover:scale-105 transition-transform duration-300`}>
                     <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center border-4 border-black relative overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="w-12 h-12 mb-2 relative">
                             {/* Placeholder Icon */}
                             <Image src="/images/mjjhtkkj-mebpcpo.svg" alt="Badge" fill className="object-contain invert opacity-80" />
                        </div>
                        <span className="text-white font-bold text-xs text-center px-2">{badge.title}</span>
                     </div>
                  </div>
                  <div className="text-center">
                     <h4 className="text-white font-bold">{badge.title}</h4>
                     <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{badge.sub}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Awards;
