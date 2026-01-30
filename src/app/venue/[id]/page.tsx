'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Star, ChevronDown, ChevronRight, CheckCircle2, Navigation } from 'lucide-react';
import { useState } from 'react';

export default function DiningDetailPage() {
    const router = useRouter();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const smallImages = [
        '/images.png',
        '/images.png',
        '/images.png',
        '/images.png',
    ];

    return (
        <div className="min-h-screen bg-[#f8f4ff] font-sans text-sm md:text-base">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12 py-4 md:py-8">
                <button
                    onClick={() => router.back()}
                    className="mb-4 md:mb-6 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-xl border border-zinc-100 text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-zinc-400 hover:text-primary hover:border-primary transition-all shadow-sm active:scale-95 group"
                >
                    <ArrowLeft size={14} className="md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>

                {/* Top Image Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                    <div className="lg:col-span-2 aspect-video md:aspect-[16/9] rounded-[1.5rem] md:rounded-[2.5rem] bg-secondary overflow-hidden border-2 md:border-4 border-white shadow-xl group">
                        <img src="/images.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dining Main" />
                    </div>
                    <div className="hidden md:grid grid-cols-2 gap-4">
                        {smallImages.map((src, i) => (
                            <div key={i} className="aspect-square rounded-[2rem] bg-white overflow-hidden border-2 border-white shadow-md hover:scale-105 transition-transform cursor-pointer">
                                <img src={src} className="w-full h-full object-cover" alt={`Dining ${i}`} />
                            </div>
                        ))}
                    </div>
                    {/* Mobile Thumbnails */}
                    <div className="flex md:hidden gap-3 overflow-x-auto scrollbar-hide">
                        {smallImages.map((src, i) => (
                            <div key={i} className="flex-shrink-0 w-24 aspect-square rounded-2xl bg-white overflow-hidden border-2 border-white shadow-md">
                                <img src={src} className="w-full h-full object-cover" alt={`Dining ${i}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-8 space-y-10 md:space-y-16">
                        {/* Restaurant Info */}
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-zinc-900">Dining Name</h1>
                                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-green-500 text-white text-[8px] md:text-[10px] font-black rounded uppercase">
                                    4.5 <Star size={10} className="fill-white" />
                                </div>
                            </div>
                            <p className="text-[10px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest">Fine Dining | Downtown</p>
                            <div className="flex items-center gap-4 md:gap-6">
                                <p className="text-lg md:text-xl font-black text-zinc-900">₹2,500 <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest">for two</span></p>
                                <button className="flex items-center gap-1.5 text-primary font-black text-[10px] md:text-xs uppercase hover:underline">
                                    <MapPin size={14} className="md:w-4 md:h-4" /> Get Directions
                                </button>
                            </div>
                        </div>

                        {/* Offers */}
                        <section className="space-y-4 md:space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">Offers</h2>
                                <ChevronRight size={18} className="text-zinc-400" />
                            </div>
                            <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex-shrink-0 w-36 md:w-48 h-16 md:h-20 bg-secondary rounded-xl md:rounded-2xl flex items-center justify-center border border-primary/20 hover:border-primary transition-all cursor-pointer group">
                                        <span className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest group-hover:scale-110 transition-transform">Get {i * 10}% OFF</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Menu */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">Menu</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                    <div key={i} className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden border-2 border-white shadow-sm hover:translate-y-[-4px] transition-transform cursor-pointer">
                                        <img src="/images.png" className="w-full h-full object-cover" alt={`Menu ${i}`} />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Facilities */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">Facilities</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 md:gap-y-4">
                                {['Free Wi-Fi', 'Valet Parking', 'Indoor Seating', 'Live Music', 'Bar Seating', 'Smoking Area'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 md:gap-3">
                                        <CheckCircle2 size={14} className="text-primary" />
                                        <span className="text-[12px] md:text-sm font-bold text-zinc-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">F.A.Q.</h2>
                            <div className="space-y-3 md:space-y-4">
                                {[
                                    { q: 'Is there any cover charge?', a: 'No, but a minimum order might be applicable on weekends.' },
                                    { q: 'Is car parking available?', a: 'Yes, we have valet parking service available for all guests.' }
                                ].map((faq, i) => (
                                    <div key={i} className="p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm">
                                        <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center text-left">
                                            <span className="text-[12px] md:text-sm font-black text-zinc-800">{faq.q}</span>
                                            <ChevronDown size={14} className={`transition-transform text-zinc-400 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                        </button>
                                        {activeFaq === i && <p className="mt-3 md:mt-4 text-[11px] md:text-[13px] font-bold text-zinc-500 leading-relaxed">{faq.a}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column / Booking Card */}
                    <div className="lg:col-span-4 lg:relative">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <div className="p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-primary/10 shadow-xl space-y-6 md:space-y-8">
                                <h3 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 border-b border-zinc-50 pb-4 md:pb-6">Book a table</h3>

                                <div className="space-y-4 md:space-y-6">
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest">Select Date</label>
                                        <div className="relative group">
                                            <div className="w-full px-4 md:px-5 py-3 md:py-4 bg-zinc-50 rounded-xl md:rounded-[1.2rem] border border-zinc-100 flex items-center justify-between cursor-pointer hover:border-primary transition-all active:scale-[0.98]">
                                                <span className="text-[12px] md:text-sm font-black">July 22, 2024</span>
                                                <ChevronDown size={14} className="text-zinc-400 group-hover:text-primary transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest">Select Guests</label>
                                        <div className="relative group">
                                            <div className="w-full px-4 md:px-5 py-3 md:py-4 bg-zinc-50 rounded-xl md:rounded-[1.2rem] border border-zinc-100 flex items-center justify-between cursor-pointer hover:border-primary transition-all active:scale-[0.98]">
                                                <span className="text-[12px] md:text-sm font-black">2 Guests</span>
                                                <ChevronDown size={14} className="text-zinc-400 group-hover:text-primary transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-4 md:py-5 bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl shadow-lg hover:shadow-primary/20 hover:bg-zinc-800 transition-all active:scale-95">
                                    Book a table
                                </button>

                                <p className="text-[8px] md:text-[10px] text-center font-bold text-zinc-400 px-4">Instant reservation • No booking fee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
