import React from 'react';
import Image from 'next/image';
import Button from './Button';

const TeamGallery = () => {
  const items = [
    { label: "Case Studies", img: "/images/mjjhtkl6-pezg75e.png" },
    { label: "Our Team", img: "/images/mjjhtkl7-u4vz5mz.png" },
    { label: "Partners", img: "/images/mjjhtkl6-n1t2db6.png" },
    { label: "Awards", img: "/images/mjjhtkl6-wd3oesc.png" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#873ae3]/10 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Experienced Minds, Proven Strategies, <br />
                    <span className="text-gradient">and Unmatched Expertise</span>
                 </h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                    Our diverse team of experts brings a wealth of knowledge and a shared passion for driving client success.
                 </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
                {items.map((item, index) => (
                    <div key={index} className="group relative aspect-square rounded-3xl overflow-hidden border border-white/10 cursor-pointer">
                        <Image 
                          src={item.img} 
                          alt={item.label} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 text-center">
                                <span className="text-white font-medium text-sm">{item.label}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Button variant="primary" className="px-10">Explore More</Button>
            </div>
        </div>
    </section>
  );
};

export default TeamGallery;
