import React from 'react';
import Image from 'next/image';

const Team = () => {
  const team = [
    {
      name: "Michael Carter",
      role: "Chief Strategy Officer",
      img: "/images/mjjhtkl7-u4vz5mz.png",
      desc: "Expert in strategic planning and operational efficiency, driving growth for Fortune 500 companies."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Digital Innovation",
      img: "/images/mjjhtkl7-u4vz5mz.png", // Using placeholder if specific image unavailable
      desc: "Specializes in digital transformation and leveraging technology to solve complex business challenges."
    },
    {
      name: "David Lee",
      role: "Senior Financial Analyst",
      img: "/images/mjjhtkl7-u4vz5mz.png", // Using placeholder
      desc: "Brings over 10 years of experience in financial modeling, risk management, and investment strategies."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/50">
       <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Meet Our Team</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Experienced Minds, Proven <br />
               <span className="text-gradient">Strategies, and Unmatched Expertise</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {team.map((member, index) => (
                <div key={index} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                   {/* Image Container */}
                   <div className="relative h-[400px] w-full grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Image 
                        src={member.img} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                   </div>

                   {/* Content Overlay */}
                   <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="mb-4">
                         <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                         <p className="text-[#ef4476] font-medium">{member.role}</p>
                      </div>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-6">
                         {member.desc}
                      </p>
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                         {/* Social Icons Placeholders */}
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef4476] transition-colors cursor-pointer">
                            <span className="text-xs">Li</span>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef4476] transition-colors cursor-pointer">
                            <span className="text-xs">Tw</span>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Team;
