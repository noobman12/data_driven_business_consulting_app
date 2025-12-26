import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const ProcessSteps = () => {
  const steps = [
    {
      id: "01",
      title: "Identify challenges, goals, opportunities",
      desc: "We analyze your business landscape to uncover key insights and define measurable objectives for growth."
    },
    {
      id: "02",
      title: "Craft a clear data-driven, sustainable strategy",
      desc: "We design a roadmap grounded in analytics and market signals to guide execution with confidence."
    },
    {
      id: "03",
      title: "Execute with precision, iterate and refine",
      desc: "We implement prioritized actions, measure outcomes, and optimize continuously for better performance."
    },
    {
      id: "04",
      title: "Operationalize and scale for long-term success",
      desc: "We embed processes and enable teams to sustain momentum and scale results across the organization."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div>
                <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                  <span className="text-gradient font-medium">Consulting Process</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Proven Process, Smarter <br />
                  Decisions, <span className="text-[#ef4476]">Better Results</span> <br />
                  <span className="text-[#873ae3]">Ahead!</span>
                </h2>
             </div>
             <Link href="/booking">
                <Button variant="primary" className="rounded-full px-8 py-3 bg-[#ef4476]">
                   Book Appointment →
                </Button>
             </Link>
          </div>

          <div className="flex flex-col gap-6">
             {steps.map((step, index) => (
                <div key={step.id} className="group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 p-8 md:p-12 hover:border-[#ef4476]/50 transition-colors">
                   {/* Background Glow on Hover */}
                   <div className="absolute inset-0 bg-gradient-to-r from-[#ef4476]/0 via-[#ef4476]/0 to-[#ef4476]/0 group-hover:from-[#ef4476]/5 group-hover:to-[#873ae3]/5 transition-all duration-500"></div>
                   
                   <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                      {/* Number */}
                      <div className="text-6xl md:text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                         {step.id}
                      </div>

                      {/* Icon Placeholder */}
                      <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Image src="/images/mjjhtkkj-mebpcpo.svg" alt="" width={40} height={40} className="opacity-50 group-hover:opacity-100" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                         <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-colors">{step.title}</h3>
                         <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            {step.desc}
                         </p>
                      </div>

                      {/* Arrow Button */}
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                         →
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default ProcessSteps;
