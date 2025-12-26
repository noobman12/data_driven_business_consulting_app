import React from 'react';
import Image from 'next/image';
import Button from './Button';

const MissionGrid = () => {
  const cards = [
    {
      title: "Who We Are",
      desc: "Seasoned consultants, united by purpose. We bring decades of experience to every project.",
      action: "Learn More"
    },
    {
      title: "Our Mission",
      desc: "To unlock potential through strategy. We believe in the power of data to drive decisions.",
      action: "Learn More"
    },
    {
      title: "Our Expertise",
      desc: "Cross-industry experience, proven methods. We adapt to your specific market challenges.",
      action: "Learn More"
    },
    {
      title: "Why Choose Us",
      desc: "Client-first, results-focused. Your success is our primary metric for performance.",
      action: "Learn More"
    }
  ];

  return (
    <section className="py-24 relative bg-black/80">
      <div className="container mx-auto px-4">
        
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Empowering Businesses with <br />
              <span className="text-gradient">Strategy, Innovation, and Excellence</span>
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Grid of Cards */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="card-glass p-6 rounded-2xl hover:bg-white/10 transition-colors flex flex-col justify-between group">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ef4476] transition-colors">{card.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{card.desc}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white font-medium cursor-pointer hover:underline">
                            {card.action}
                            <span className="text-[#ef4476]">&rarr;</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Large Image Card */}
            <div className="lg:w-1/2 relative min-h-[400px]">
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10">
                    <Image 
                      src="/images/mjjhtkl6-wd3oesc.png" 
                      alt="Mission Context" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    
                    {/* Center Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6">
                            <Image src="/images/mjjhtkkj-mebpcpo.svg" alt="" width={32} height={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Our Vision</h3>
                        <p className="text-gray-200 max-w-md">Building a future where every business has the tools to succeed sustainably.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MissionGrid;
