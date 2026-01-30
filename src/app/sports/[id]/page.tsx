'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Star, ShieldCheck, Utensils, ChevronDown, CheckCircle2, Navigation } from 'lucide-react';
import { useState } from 'react';

export default function PlayDetailPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#fffdf2] font-sans text-sm md:text-base">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12 py-4 md:py-8">
                <button
                    onClick={() => router.back()}
                    className="mb-4 md:mb-6 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-xl border border-zinc-100 text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-zinc-400 hover:text-primary hover:border-primary transition-all shadow-sm active:scale-95 group"
                >
                    <ArrowLeft size={14} className="md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-8 space-y-10 md:space-y-16 order-2 lg:order-1">
                        {/* Hero Image */}
                        <div className="relative aspect-video md:aspect-[16/9] w-full bg-primary rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border-2 md:border-4 border-white shadow-2xl group">
                            <img src="/images.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Turf Hero" />
                            <div className="absolute top-4 md:top-8 left-4 md:left-8">
                                <div className="px-3 md:px-4 py-1 md:py-1.5 bg-primary text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                    Top Rated Turf
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">About the Venue</h2>
                            <div className="space-y-3 md:space-y-4">
                                <p className="text-zinc-600 leading-relaxed font-bold text-sm md:text-base">
                                    Premium multi-sports facility featuring FIFA-approved artificial turf.
                                    Optimized for Football, Cricket, and intensive training.
                                </p>
                            </div>
                        </section>

                        {/* Venue Guide */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">Venue Guide</h2>
                            <div className="flex flex-wrap gap-4 md:gap-8">
                                <div className="flex items-center gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm transition-all cursor-default group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-primary">
                                        <Utensils size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Canteen</p>
                                        <p className="text-[12px] md:text-sm font-black text-zinc-900">(7 PM)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm transition-all cursor-default group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-primary">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                        <p className="text-[12px] md:text-sm font-black text-zinc-900">Verified</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Gallery */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">Gallery</h2>
                            <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="flex-shrink-0 w-40 md:w-48 aspect-video rounded-xl md:rounded-[1.8rem] bg-white overflow-hidden border-2 border-white shadow-md">
                                        <img src="/images.png" className="w-full h-full object-cover" alt={`Gallery ${i}`} />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Large Brand Visual */}
                        <div className="relative aspect-[21/9] w-full bg-zinc-900 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center border-2 md:border-4 border-white shadow-xl">
                            <img src="/images.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Brand" />
                            <h3 className="relative z-10 text-4xl md:text-8xl font-black italic tracking-tighter text-white/90">TICKPIN</h3>
                        </div>

                        {/* Venue Info */}
                        <section className="space-y-4 md:space-y-6">
                            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase border-l-4 border-primary pl-3 md:pl-4">Location</h2>
                            <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-[2.5rem] border border-zinc-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative overflow-hidden">
                                <div className="space-y-1 md:space-y-2">
                                    <h4 className="text-lg md:text-xl font-black tracking-tight text-zinc-900">[ Venue Name ]</h4>
                                    <p className="text-[12px] md:text-sm font-bold text-zinc-500 italic">[ Venue City ]</p>
                                </div>
                                <button className="px-6 md:px-8 py-2 md:py-3 bg-zinc-50 text-zinc-900 border border-zinc-100 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-zinc-100 transition-all flex items-center justify-center gap-2">
                                    <Navigation size={14} /> Get Directions
                                </button>
                            </div>
                        </section>

                        {/* Interactive FAQ Section */}
                        <section className="space-y-3 md:space-y-4">
                            <div
                                onClick={() => setActiveTab(activeTab === 'faq' ? null : 'faq')}
                                className="p-4 md:p-5 bg-white rounded-xl md:rounded-[1.5rem] border border-zinc-100 shadow-sm flex items-center justify-between cursor-pointer group hover:border-primary transition-all active:scale-[0.99]"
                            >
                                <span className="text-[10px] md:text-xs font-black text-zinc-700 uppercase tracking-widest">Frequently Asked Questions</span>
                                <ChevronDown size={16} className={`text-zinc-400 group-hover:text-primary transition-transform ${activeTab === 'faq' ? 'rotate-180' : ''}`} />
                            </div>
                            {activeTab === 'faq' && (
                                <div className="p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-zinc-50 shadow-sm space-y-3 md:space-y-4 animate-in fade-in slide-in-from-top-2">
                                    <p className="text-[10px] md:text-[11px] font-bold text-zinc-500">Booking can be cancelled up to 24 hours before the slot time.</p>
                                    <p className="text-[10px] md:text-[11px] font-bold text-zinc-500">Please carry your own equipment.</p>
                                </div>
                            )}

                            <div className="p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2rem] border-2 border-primary/5 shadow-sm space-y-4 md:space-y-6">
                                <div className="flex items-center justify-between group cursor-pointer active:scale-[0.99]" onClick={() => setActiveTab(activeTab === 'terms' ? null : 'terms')}>
                                    <h2 className="text-[10px] md:text-xs font-black text-zinc-700 uppercase tracking-widest">Terms & Conditions</h2>
                                    <ChevronDown size={14} className={`text-zinc-400 transition-transform ${activeTab === 'terms' ? 'rotate-180' : ''}`} />
                                </div>
                                {activeTab === 'terms' && (
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-2 animate-in fade-in slide-in-from-top-2 duration-300 text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                        {Array.from({ length: 15 }).map((_, i) => (
                                            <div key={i}>CONTENT ITEM</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Right Column / Booking Sidebar */}
                    <div className="lg:col-span-4 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <div className="p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-primary/10 shadow-xl space-y-6 md:space-y-8">
                                <div className="space-y-3 md:space-y-4">
                                    <h3 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 border-b border-zinc-50 pb-3 md:pb-4">Turf Name</h3>
                                    <div className="space-y-0.5 md:space-y-1">
                                        <p className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest">Pricing</p>
                                        <p className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tighter">₹1,200 <span className="text-[10px] md:text-xs font-bold text-zinc-400">/ hour</span></p>
                                    </div>
                                </div>

                                <button className="w-full py-4 md:py-5 bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl shadow-lg hover:shadow-primary/20 hover:bg-zinc-800 transition-all active:scale-95">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
