import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
       {/* Decorative Blob */}
       <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#f57c3c]/10 rounded-full blur-[100px] -z-10"></div>

       <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             
             {/* Left: Text & Stats */}
             <div className="lg:w-1/2">
                <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                   <span className="text-gradient font-medium">Testimonials</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Real Success Stories from <br />
                  <span className="text-gradient">Satisfied Business Partners</span>
                </h2>
                <p className="text-gray-400 mb-12 text-lg">
                   Discover how our expert consulting services have helped businesses overcome challenges, optimize operations, and achieve sustainable growth. Read firsthand experiences from our satisfied clients.
                </p>
                
                <div className="flex flex-wrap gap-12">
                   <div>
                      <h3 className="text-5xl font-bold text-gradient mb-2">10+</h3>
                      <p className="text-white text-sm">Years of Industry Experience</p>
                   </div>
                   <div>
                      <h3 className="text-5xl font-bold text-gradient mb-2">500+</h3>
                      <p className="text-white text-sm">Empowered Over 500 Businesses</p>
                   </div>
                   <div>
                      <h3 className="text-5xl font-bold text-gradient mb-2">98%</h3>
                      <p className="text-white text-sm">Client Satisfaction Rate</p>
                   </div>
                </div>
             </div>

             {/* Right: Gradient Card */}
             <div className="lg:w-1/2 relative">
                {/* Strong Gradient Background Card */}
                <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#873ae3] via-[#ef4476] to-[#f57c3c]">
                    <div className="bg-black/80 backdrop-blur-xl rounded-[22px] p-10 h-full relative overflow-hidden">
                        {/* Inner Gradient Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ef4476] to-[#f57c3c] blur-[80px] opacity-20 pointer-events-none"></div>
                        
                        <div className="text-6xl text-white/20 font-serif mb-6">“</div>
                        <p className="text-xl text-white leading-relaxed mb-8 italic relative z-10">
                            Working with this consulting team has been a game-changer for our business. Their strategic insights and data-driven approach helped us streamline operations, improve efficiency, and achieve sustainable growth.
                        </p>
                        <div className="flex items-center justify-between border-t border-white/10 pt-6">
                            <div className="flex items-center gap-4">
                                <Image src="/images/mjjhtkl7-wc02i6i.png" alt="Client" width={56} height={56} className="rounded-full border-2 border-white/20" />
                                <div>
                                    <p className="text-white font-bold">Michael Carter</p>
                                    <p className="text-gray-400 text-sm">CEO of GrowthEdge Solutions</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                                    <Image src="/images/mjjhtkkk-znkeg5z.svg" alt="Prev" width={20} height={20} className="rotate-180" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors">
                                    <Image src="/images/mjjhtkkk-gbcyavl.png" alt="Next" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Testimonials;
