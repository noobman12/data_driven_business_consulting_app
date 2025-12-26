'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [activeId, setActiveId] = useState("01");

  const items = [
    {
      id: "01",
      title: "Driving Business Excellence",
      desc: "We strive to empower businesses with innovative strategies, expert insights, and data-driven solutions for sustainable success.",
      icon: "/images/mjjhtkkj-wasfke2.svg"
    },
    {
      id: "02",
      title: "Fostering Long-Term Growth",
      desc: "Strengthening businesses with vision, strategy, and sustainable growth by providing innovative solutions, expert insights.",
      icon: "/images/mjjhtkkj-oouazkb.svg"
    },
    {
      id: "03",
      title: "Commitment to Innovation",
      desc: "We continuously develop forward-thinking approaches, helping businesses stay ahead with cutting-edge solutions.",
      icon: "/images/mjjhtkkj-hh9tt1k.svg"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-gradient font-medium">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              Empowering Businesses with <br />
              <span className="text-gradient">Vision, Strategy, and Sustainable</span>
            </h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  {/* Active Blur Background */}
                  <div className={`absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent rounded-2xl transition-opacity duration-500 blur-md ${activeId === item.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <div className="relative flex gap-8 items-start p-4">
                    <div className={`text-4xl font-bold transition-colors duration-300 ${activeId === item.id ? 'text-white' : 'text-white/20'}`}>
                      {item.id}
                    </div>
                    <div className={`flex-1 border-b border-white/10 pb-8 transition-colors duration-300 ${activeId === item.id ? 'border-white/30' : ''}`}>
                      <div className="flex items-center gap-4 mb-4">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${activeId === item.id ? 'bg-white/10 border-white/30' : 'bg-white/5 border-white/10'}`}>
                            <Image src={item.icon} alt="" width={24} height={24} />
                         </div>
                         <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeId === item.id ? 'text-white' : 'text-white/60'}`}>{item.title}</h3>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${activeId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-400 leading-relaxed pl-16">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
             <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image 
                  src="/images/mjjhtkl6-n1t2db6.png" 
                  alt="Business Meeting" 
                  width={600} 
                  height={800}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/20 to-orange-500/20 blur-[100px]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
