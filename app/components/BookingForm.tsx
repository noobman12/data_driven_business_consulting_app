'use client';

import React, { useState } from 'react';
import Button from './Button';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(21);
  const [currentMonth, setCurrentMonth] = useState('February 2025');

  // Calendar logic simplified for visual representation
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => {
     const day = i - 4; // Start from previous month
     return day > 0 && day <= 28 ? day : (day <= 0 ? 31 + day : day - 28);
  });

  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="text-gradient font-medium">Appointment Form</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Schedule a Consultation, Unlock Your <br />
               <span className="text-gradient">Business Potential</span>
             </h2>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12">
             <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Name */}
                   <div className="space-y-2">
                      <label className="text-white font-medium">Name</label>
                      <input 
                        type="text" 
                        placeholder="Tell us who you are" 
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef4476] transition-colors"
                      />
                   </div>
                   
                   {/* Email */}
                   <div className="space-y-2">
                      <label className="text-white font-medium">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="Where can we reach you?" 
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef4476] transition-colors"
                      />
                   </div>

                   {/* Phone */}
                   <div className="space-y-2">
                      <label className="text-white font-medium">Phone</label>
                      <input 
                        type="tel" 
                        placeholder="Let's stay connected" 
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef4476] transition-colors"
                      />
                   </div>

                   {/* Service Selection */}
                   <div className="space-y-2">
                      <label className="text-white font-medium">Service Selection</label>
                      <div className="relative">
                        <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef4476] transition-colors appearance-none cursor-pointer">
                            <option>Business Strategy & Planning</option>
                            <option>Financial Advisory</option>
                            <option>Market Research</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Message */}
                    <div className="space-y-2 h-full">
                       <label className="text-white font-medium">Message ( Optional )</label>
                       <textarea 
                         placeholder="Tell us your specific need" 
                         className="w-full h-[320px] bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef4476] transition-colors resize-none"
                       ></textarea>
                    </div>

                    {/* Calendar UI */}
                    <div className="space-y-2">
                       <label className="text-white font-medium">Preferred Date/Time</label>
                       <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
                           <div className="flex justify-between items-center mb-6">
                               <div className="text-white font-medium">21 January 2025</div>
                               <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-xs text-white">🕒</div>
                           </div>

                           {/* Month Navigation */}
                           <div className="bg-white rounded-lg p-2 flex justify-between items-center mb-4">
                               <button type="button" className="w-8 h-8 flex items-center justify-center text-[#ef4476] font-bold">&lt;</button>
                               <span className="text-black font-bold">{currentMonth}</span>
                               <button type="button" className="w-8 h-8 flex items-center justify-center text-[#ef4476] font-bold">&gt;</button>
                           </div>

                           {/* Calendar Grid */}
                           <div className="grid grid-cols-7 gap-2 text-center text-sm">
                               {days.map(day => (
                                   <div key={day} className="text-gray-500 font-medium py-2">{day}</div>
                               ))}
                               {dates.map((date, i) => {
                                   const isCurrentMonth = i >= 4 && i < 32; // Rough approximation for Feb 2025 (starting Sat 1st)
                                   const isSelected = date === selectedDate && isCurrentMonth;
                                   
                                   return (
                                       <div 
                                         key={i} 
                                         onClick={() => isCurrentMonth && setSelectedDate(date)}
                                         className={`
                                            py-2 rounded-full cursor-pointer transition-all
                                            ${!isCurrentMonth ? 'text-gray-700' : 'text-gray-300 hover:bg-white/10'}
                                            ${isSelected ? 'bg-[#873ae3] text-white hover:bg-[#873ae3]' : ''}
                                         `}
                                       >
                                           {date}
                                       </div>
                                   );
                               })}
                           </div>
                       </div>
                    </div>
                </div>

                <div className="flex justify-center pt-8">
                    <Button variant="primary" className="px-12 py-3 rounded-full w-full md:w-auto">
                        Book Appointment →
                    </Button>
                </div>
             </form>
          </div>
       </div>
    </section>
  );
};
   
export default BookingForm;
