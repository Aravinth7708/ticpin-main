'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Share2, MapPin, Calendar, Clock, Star, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function EventDetailPage() {
    const router = useRouter();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const galleryImages = [
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8 md:space-y-12 order-2 lg:order-1">
                        {/* Hero Image */}
                        <div className="relative aspect-video md:aspect-[16/9] w-full bg-primary rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-2 md:border-4 border-white">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                <h1 className="text-4xl md:text-8xl font-black italic tracking-tighter">TICKPIN</h1>
                            </div>
                            <img src="/images.png" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Hero" />
                        </div>

                        {/* About the Event */}
                        <section className="space-y-3 md:space-y-4">
                            <h2 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 border-l-4 border-primary pl-3 md:pl-4 uppercase">About the Event</h2>
                            <p className="text-zinc-600 leading-relaxed font-medium text-sm md:text-base">
                                Experience the ultimate fusion of music, art, and community at the TICKPIN Play Festival.
                                Bringing together world-class performers and immersive interactive experiences.
                            </p>
                        </section>

                        {/* Event Overview */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
                            {[
                                { label: 'Capacity', val: '5k+ People', icon: <Star size={14} /> },
                                { label: 'Age Group', val: '18+ Only', icon: <CheckCircle2 size={14} /> },
                                { label: 'Language', val: 'English/Hindi', icon: <HelpCircle size={14} /> },
                            ].map((item, i) => (
                                <div key={i} className="p-4 md:p-5 bg-white rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm flex items-center gap-3 md:gap-4 group hover:border-primary transition-all">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                        <p className="text-[12px] md:text-sm font-black text-zinc-900">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Artist Section */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 border-l-4 border-primary pl-3 md:pl-4 uppercase">Key Artist</h2>
                            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-200 overflow-hidden border-2 border-primary/20">
                                    <img src="/images.png" className="w-full h-full object-cover" alt="Artist" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-black text-zinc-900">Coldplay Live</h4>
                                    <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider">International Performers</p>
                                </div>
                            </div>
                        </section>

                        {/* Gallery */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 border-l-4 border-primary pl-3 md:pl-4 uppercase">Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                {galleryImages.map((src, i) => (
                                    <div key={i} className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border-2 border-white hover:scale-105 transition-transform duration-500 cursor-pointer">
                                        <img src={src} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Venue Location */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 border-l-4 border-primary pl-3 md:pl-4 uppercase">Venue Location</h2>
                            <div className="p-6 bg-zinc-900 rounded-[1.5rem] md:rounded-[2.5rem] text-white flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 overflow-hidden relative">
                                <div className="relative z-10 space-y-1 md:space-y-2">
                                    <h4 className="text-lg md:text-xl font-black tracking-tight">Madison Square Garden</h4>
                                    <p className="text-[12px] md:text-sm font-bold text-zinc-400 truncate">New York, NY 10001</p>
                                </div>
                                <button className="relative z-10 px-6 md:px-8 py-2 md:py-3 bg-primary text-white text-[9px] md:text-xs font-black uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                    <MapPin size={14} /> Get Directions
                                </button>
                                <div className="absolute top-0 right-0 w-24 md:w-40 h-24 md:h-40 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Booking Pass */}
                    <div className="order-1 lg:order-2">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <div className="p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-primary/10 shadow-xl space-y-6 md:space-y-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900">Event Pass</h3>
                                        <p className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-1">Limited Availability</p>
                                    </div>
                                    <button className="p-2 md:p-3 bg-zinc-50 rounded-xl md:rounded-2xl text-zinc-400 hover:text-primary transition-colors">
                                        <Share2 size={16} className="md:w-5 md:h-5" strokeWidth={2.5} />
                                    </button>
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center gap-3 md:gap-4 text-zinc-600">
                                        <Calendar className="text-primary" size={18} />
                                        <span className="text-[12px] md:text-sm font-black italic">Saturday, 22nd June</span>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-4 text-zinc-600">
                                        <Clock className="text-primary" size={18} />
                                        <span className="text-[12px] md:text-sm font-black italic">8:30 PM Onwards</span>
                                    </div>
                                </div>

                                <div className="pt-6 md:pt-8 border-t border-zinc-50 flex items-center justify-between">
                                    <div className="space-y-0.5 md:space-y-1">
                                        <span className="text-[8px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest">Starting from</span>
                                        <p className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tighter">₹2,999</p>
                                    </div>
                                    <button className="px-6 md:px-10 py-3 md:py-4 bg-primary text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* App Banner */}
                <div className="h-[200px] md:h-[280px] w-full bg-zinc-200 rounded-[2rem] md:rounded-[3rem] flex flex-col items-center justify-center overflow-hidden border border-zinc-100 mb-8 md:mb-12">
                    <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-zinc-400 mb-2 md:mb-4 opacity-70">Experience everything on mobile</span>
                    <span className="text-3xl md:text-6xl font-black text-zinc-900/10 tracking-[0.1em]">DOWNLOAD APP</span>
                </div>
            </main>

            <Footer />
        </div>
    );
}
