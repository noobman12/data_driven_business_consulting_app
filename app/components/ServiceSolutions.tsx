import React from 'react';
import Image from 'next/image';

const ServiceSolutions = () => {
  const items = [
    {
       id: "01",
       title: "Tailored Strategies for Maximum Impact",
       desc: "We deliver customized solutions that align with your specific business needs, ensuring measurable outcomes and long-term success."
    },
    {
       id: "02",
       title: "Data-Driven Decision Making",
       desc: "Our expert insights and analytics empower you to make informed decisions that drive growth and efficiency."
    },
    {
       id: "03",
       title: "Enhanced Operational Efficiency",
       desc: "We streamline your processes and optimize workflows to reduce costs and improve productivity across your organization."
    },
    {
       id: "04",
       title: "Sustainable Business Growth",
       desc: "Our holistic approach ensures that your business not only grows rapidly but also maintains a solid foundation for future expansion."
    }
  ];

  return (
    <section className="py-24 relative bg-black/50">
       <div className="container mx-auto px-4">
          <div className="flex justify-end mb-12">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <span className="text-gradient font-medium">Our Benefits</span>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="md:w-1/2"></div> {/* Spacer */}
              <div className="md:w-1/2 text-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Strategic Solutions to Optimize, <br />
                    <span className="text-gradient">Innovate, and Drive Business Success</span>
                  </h2>
              </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Image Card */}
              <div className="lg:w-1/2 w-full">
                  <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                      <Image 
                        src="/images/mjjhtkl6-pezg75e.png" 
                        alt="Strategic Solutions" 
                        fill
                        className="object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#873ae3]/20 to-[#f57c3c]/20"></div>
                  </div>
              </div>

              {/* Right List */}
              <div className="lg:w-1/2 w-full space-y-8">
                  {items.map((item) => (
                      <div key={item.id} className="flex gap-6 border-b border-white/10 pb-8 last:border-0 group">
                          <span className="text-xl font-bold text-white/40 group-hover:text-white transition-colors pt-1">{item.id}</span>
                          <div>
                              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
       </div>
    </section>
  );
};

export default ServiceSolutions;
