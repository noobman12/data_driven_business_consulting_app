import React from 'react';
import Image from 'next/image';

const CaseStudies = () => {
  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Case Studies</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Case Studies & Achievements <br />
               <span className="text-gradient">Proven Success, Trusted Results</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4]">
                <Image src="/images/mjjhtkl6-wd3oesc.png" alt="Case Study 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                   <h3 className="text-2xl font-bold text-white mb-4">Transforming Operational Efficiency – 30% Cost Reduction</h3>
                   <p className="text-gray-300 text-sm">Discover how our strategic consulting has helped businesses overcome challenges, optimize operations.</p>
                </div>
             </div>

             <div className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] mt-12 md:mt-24">
                <Image src="/images/mjjhtkl6-pezg75e.png" alt="Case Study 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                   <h3 className="text-2xl font-bold text-white mb-4">Revenue Growth Acceleration – 200% Increase in Sales</h3>
                   <p className="text-gray-300 text-sm">An e-commerce startup leveraged our data-driven market strategies, resulting in a 200% boost in sales.</p>
                </div>
             </div>

             <div className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4]">
                <Image src="/images/mjjhtkl6-wd3oesc.png" alt="Case Study 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                   <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation Success – Enhanced Customer Engagement</h3>
                   <p className="text-gray-300 text-sm">A traditional retail business adopted our digital solutions, leading to a 75% increase in customer engagement.</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default CaseStudies;
