import React from 'react';
import Button from './Button';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative bg-black/50 overflow-hidden">
       {/* Background Blob */}
       <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#873ae3]/10 rounded-full blur-[100px] -z-10"></div>

       <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             
             {/* Left Column: Header and Intro */}
             <div className="lg:w-1/3 sticky top-24">
                <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                  <span className="text-gradient font-medium">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  Expert Solutions and Proven <br />
                  <span className="text-gradient">Success for Your Business</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                   We combine industry expertise with innovative technology to deliver results that matter. Our proven track record speaks for itself.
                </p>
                <Button variant="primary" className="rounded-full">See More</Button>
             </div>

             {/* Right Column: Vertical List of Cards */}
             <div className="lg:w-2/3 flex flex-col gap-8">
                {[
                   { title: "Proven Expertise", img: "/images/mjjhtkl6-81lbh1w.png" },
                   { title: "Industry Leadership", img: "/images/mjjhtkl6-81lbh1w.png" }, // Using same placeholder if distinct ones aren't clear
                   { title: "Strategic Growth", img: "/images/mjjhtkl6-81lbh1w.png" }
                ].map((item, index) => (
                  <div key={index} className="card-glass rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-white/10 hover:border-white/20 transition-colors">
                     <div className="relative w-full md:w-1/2 h-64 rounded-2xl overflow-hidden shrink-0">
                        <Image 
                          src={item.img} 
                          alt={item.title} 
                          fill
                          className="object-cover"
                        />
                     </div>
                     <div className="flex flex-col">
                        <div className="mb-4">
                           <span className="text-white/60 font-medium tracking-wider text-sm">/{item.title}/</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Expert Consultants with Proven Industry Insights
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                          Our team of seasoned consultants brings deep industry knowledge and data-driven insights to help businesses thrive.
                        </p>
                        <div className="flex flex-wrap gap-3">
                           <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white">
                              <span className="text-gradient">Industry Experience</span>
                           </span>
                           <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white">
                              <span className="text-gradient">Business Growth</span>
                           </span>
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

export default WhyChooseUs;
