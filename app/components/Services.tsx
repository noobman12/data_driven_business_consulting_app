import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: "Market Research & Analysis",
      desc: "Develop data-driven strategies to optimize operations, increase efficiency, and achieve long-term business growth.",
      icon: "/images/mjjhtkkj-0o2jxa3.svg"
    },
    {
      title: "Financial Advisory & Risk Management",
      desc: "Develop data-driven strategies to optimize operations, increase efficiency, and achieve long-term business growth.",
      icon: "/images/mjjhtkkj-x6ffoxq.svg"
    },
    {
      title: "Operational Efficiency & Process Optimization",
      desc: "Develop data-driven strategies to optimize operations, increase efficiency, and achieve long-term business growth.",
      icon: "/images/mjjhtkkj-up4n6fc.svg"
    },
    {
      title: "Digital Transformation & Innovation",
      desc: "Develop data-driven strategies to optimize operations, increase efficiency, and achieve long-term business growth.",
      icon: "/images/mjjhtkkj-rmdtxj7.svg"
    },
    {
      title: "Business Strategy & Planning",
      desc: "Develop data-driven strategies to optimize operations, increase efficiency, and achieve long-term business growth.",
      icon: "/images/mjjhtkkj-5ixxcwa.svg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-gradient font-medium">Our Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Strategic Solutions to Optimize, <br />
              <span className="text-gradient">Innovate, and Drive Business Success</span>
            </h2>
        </div>

        <div className="flex flex-col gap-6">
           {/* Top Row: 3 Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.slice(0, 3).map((item, index) => (
                <ServiceCard key={index} item={item} />
              ))}
           </div>
           
           {/* Bottom Row: 2 Cards Centered */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
              {services.slice(3, 5).map((item, index) => (
                <ServiceCard key={index + 3} item={item} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ item }: { item: any }) => (
  <div className="card-glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group border border-white/10 hover:border-white/30 h-full flex flex-col justify-between">
     <div>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
           <Image src={item.icon} alt="" width={28} height={28} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
     </div>
     <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
  </div>
);

export default Services;
