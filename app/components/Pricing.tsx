import React from 'react';
import Button from './Button';
import Image from 'next/image';

const Pricing = () => {
  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Pricing Plan</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Transparent Pricing, Scalable Plans, <br />
               <span className="text-gradient">and Maximum ROI</span>
             </h2>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
             
             {/* Top Row: Enterprise Plan (Wide) */}
             <div className="card-glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-[#ef4476]/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <div className="w-64 h-64 bg-gradient-to-br from-[#873ae3] to-[#ef4476] rounded-full blur-3xl"></div>
                </div>
                
                <div className="flex-1">
                   <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 mb-6">
                      <Image src="/images/mjjhtkkj-9jl3mkd.svg" alt="" width={28} height={28} />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4">Enterprise Plan</h3>
                   <p className="text-gray-400 text-lg mb-6 max-w-xl">
                      Perfect for startups and small businesses, this plan provides essential consulting services to establish a strong foundation, optimize operations, and drive initial growth.
                   </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6 shrink-0">
                   <div className="text-center md:text-right">
                      <span className="text-5xl font-bold text-gradient">$200.00</span>
                      <span className="text-gray-400 block mt-1">/Month</span>
                   </div>
                   <Button className="w-full md:w-auto px-10" variant="primary">Get Started</Button>
                </div>
             </div>

             <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

             {/* Bottom Row: Starter & Growth Plans */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Starter Plan */}
                <div className="card-glass rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-[#ef4476]/50 transition-colors">
                   <div className="flex justify-between items-start mb-8">
                      <div>
                         <h3 className="text-2xl font-bold text-white mb-2">Starter Plan</h3>
                         <p className="text-gray-400 text-sm max-w-xs">Perfect for startups and small businesses, this plan provides essential consulting services.</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 shrink-0">
                         <Image src="/images/mjjhtkkk-rt3ufuv.svg" alt="" width={24} height={24} />
                      </div>
                   </div>
                   
                   <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl font-bold text-white">$60.00</span>
                      <span className="text-gray-400">/Month</span>
                   </div>
                   
                   <Button className="w-full mb-8 bg-black hover:bg-gray-900 border border-white/10" variant="secondary">Get Started</Button>
                   
                   <div className="space-y-4">
                      {[1,2,3,4,5].map((_, i) => (
                         <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#ef4476]/20 flex items-center justify-center mt-0.5 shrink-0">
                               <div className="w-2 h-2 rounded-full bg-[#ef4476]"></div>
                            </div>
                            <p className="text-sm text-gray-300">Ideal for startups and small businesses looking for cost-effective consulting</p>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Growth Plan */}
                <div className="card-glass rounded-3xl p-8 flex flex-col relative overflow-hidden border-[#ef4476] bg-white/5 shadow-2xl shadow-[#ef4476]/10">
                   <div className="flex justify-between items-start mb-8">
                      <div>
                         <h3 className="text-2xl font-bold text-white mb-2">Growth Plan</h3>
                         <p className="text-gray-400 text-sm max-w-xs">Designed for growing businesses, this plan offers advanced strategy development.</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ef4476] to-[#f57c3c] flex items-center justify-center border border-white/10 shrink-0 shadow-lg shadow-[#ef4476]/30">
                         <Image src="/images/mjjhtkkk-zzquhoq.svg" alt="" width={24} height={24} />
                      </div>
                   </div>
                   
                   <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl font-bold text-white">$100.00</span>
                      <span className="text-gray-400">/Month</span>
                   </div>
                   
                   <Button className="w-full mb-8" variant="primary">Get Started</Button>
                   
                   <div className="space-y-4">
                      {[1,2,3,4,5].map((_, i) => (
                         <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#ef4476]/20 flex items-center justify-center mt-0.5 shrink-0">
                               <div className="w-2 h-2 rounded-full bg-[#ef4476]"></div>
                            </div>
                            <p className="text-sm text-gray-300">Tailored solutions to accelerate business expansion and enhance</p>
                         </div>
                      ))}
                   </div>
                </div>

             </div>
          </div>
       </div>
    </section>
  );
};

export default Pricing;
