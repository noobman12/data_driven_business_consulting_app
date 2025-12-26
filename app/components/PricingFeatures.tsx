import React from 'react';
import Image from 'next/image';

const PricingFeatures = () => {
  const features = [
    {
      title: "Access to Advanced Consulting Services",
      desc: "Unlock premium insights, in-depth analysis, and tailored strategies designed to drive efficiency, growth, and innovation."
    },
    {
      title: "Priority Support & Personalized Guidance",
      desc: "Enjoy dedicated expert access, dedicated support for escalations, and hands-on help solving complex challenges with confidence."
    },
    {
      title: "Exclusive Tools & Resources",
      desc: "Gain access to cutting-edge business tools, financial models, and market reports to stay ahead of the competition."
    },
    {
      title: "Scalable Solutions for Long-Term Success",
      desc: "Stay ahead of the curve with proven business, emerging growth regulations and new revenue optimization."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4">
          <div className="mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Pricing Plan</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Unlock More Value, Maximize Growth, <br />
               <span className="text-gradient">Elevate Success</span>
             </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Grid */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                      <div key={index} className="card-glass rounded-2xl p-8 hover:bg-white/10 transition-colors group">
                          <div className="flex justify-between items-start mb-6">
                              <h3 className="text-xl font-bold text-white pr-4">{feature.title}</h3>
                              <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                              {feature.desc}
                          </p>
                      </div>
                  ))}
              </div>

              {/* Right Large Image Card */}
              <div className="lg:w-1/3">
                  <div className="h-full min-h-[400px] relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                      <Image 
                        src="/images/mjjhtkl6-wd3oesc.png" // Placeholder image
                        alt="Features Context" 
                        fill
                        className="object-cover opacity-50"
                      />
                      <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Image src="/images/mjjhtkkj-mebpcpo.svg" alt="" width={40} height={40} />
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </section>
  );
};

export default PricingFeatures;
