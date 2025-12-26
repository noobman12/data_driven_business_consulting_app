import React from 'react';
import Button from './Button';
import Image from 'next/image';

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
       {/* Background Blob */}
       <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[#873ae3]/10 rounded-full blur-[120px] -z-10"></div>

       <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             
             {/* Left Column: Heading */}
             <div className="lg:w-1/3 sticky top-24">
                <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                   <span className="text-gradient font-medium">FAQ</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  Clear Answers, Expert Insights, <br />
                  <span className="text-gradient">Hassle-Free Consulting Experience</span>
                </h2>
                <Button className="rounded-full">See More</Button>
             </div>

             {/* Right Column: Accordion List */}
             <div className="lg:w-2/3 space-y-4">
                {[
                  { q: "How can your consulting services help my business?", a: "We analyze your business challenges, develop customized strategies, and implement solutions that enhance efficiency, improve profitability, and drive sustainable growth." },
                  { q: "How can your consulting services help my business?", a: "" },
                  { q: "What is the typical consulting process?", a: "" },
                  { q: "How do I know which pricing plan is right for me?", a: "" },
                  { q: "How can I schedule a consultation?", a: "" }
                ].map((item, index) => (
                   <div key={index} className={`card-glass rounded-2xl p-6 transition-all duration-300 group cursor-pointer hover:bg-white/10 ${index === 0 ? 'bg-white/10 border-white/20' : ''}`}>
                      <div className="flex items-start justify-between gap-6">
                         <div className="flex gap-6 items-start">
                            <span className="text-2xl font-bold text-white/30 group-hover:text-white/50 transition-colors">0{index + 1}</span>
                            <div>
                               <h3 className="text-xl font-bold text-white mb-2">{item.q}</h3>
                               {item.a && (
                                  <p className="text-gray-400 leading-relaxed mt-2 text-sm md:text-base pr-8">{item.a}</p>
                               )}
                            </div>
                         </div>
                         <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors ${index === 0 ? 'bg-white text-black' : 'text-white group-hover:bg-white/10'}`}>
                            <Image src="/images/mjjhtkkk-p9479fm.svg" alt="Toggle" width={20} height={20} className={`transition-transform duration-300 ${index === 0 ? 'rotate-90' : ''}`} />
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

export default FAQ;
