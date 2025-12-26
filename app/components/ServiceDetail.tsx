import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const ServiceDetail = () => {
  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4">
          <div className="mb-12">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Service Detail</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Financial Advisory & Risk <br />
               <span className="text-white">Management</span>
             </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
             {/* Left Video/Image Placeholder */}
             <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                    <Image 
                      src="/images/mjjhtkl6-wd3oesc.png" 
                      alt="Financial Advisory" 
                      fill
                      className="object-cover opacity-80"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Right Content */}
             <div className="lg:w-1/2">
                 <div className="flex gap-4 mb-8">
                     <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-gray-200">
                         <span className="font-bold text-xl">←</span>
                     </div>
                     <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 text-white">
                         <span className="font-bold text-xl">→</span>
                     </div>
                 </div>

                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Discover the full potential of your business with our comprehensive financial advisory and risk management services. We help you navigate complex financial landscapes, optimize cash flow, and mitigate risks to ensure long-term stability and growth.
                 </p>
                 <p className="text-gray-400 text-lg leading-relaxed mb-12">
                    Our expert team provides tailored strategies to enhance profitability and secure your financial future.
                 </p>

                 <Link href="/booking">
                   <Button variant="primary" className="px-10 rounded-full">
                      Book Appointment →
                   </Button>
                 </Link>
             </div>
          </div>
       </div>
    </section>
  );
};

export default ServiceDetail;
