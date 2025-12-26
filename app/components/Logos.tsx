import React from 'react';
import Image from 'next/image';

const Logos = () => {
  const logos = [
    '/images/mjjhtkkj-4l9n5cf.svg',
    '/images/mjjhtkkj-43w990y.svg',
    '/images/mjjhtkkj-3pqru7e.svg',
    '/images/mjjhtkkj-hw8492r.svg',
    '/images/mjjhtkkj-pxu1yrq.svg',
    '/images/mjjhtkkj-40vuzpf.svg',
    '/images/mjjhtkkj-bgden0o.svg',
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((src, index) => (
            <div key={index} className="relative h-8 w-32">
              <Image 
                src={src} 
                alt={`Partner Logo ${index + 1}`} 
                fill 
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
