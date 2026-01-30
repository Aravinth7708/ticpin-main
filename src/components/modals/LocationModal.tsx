'use client';

import { X, MapPin, Search } from 'lucide-react';

interface LocationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const popularCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad',
    'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur'
];

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-xl bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 p-6 md:p-10">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 border-l-4 border-primary pl-3 md:pl-4 uppercase">Select Location</h2>
                    <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400"><X size={18} /></button>
                </div>

                <div className="space-y-8">
                    <div className="relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search city or area"
                            className="w-full pl-14 pr-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-[13px] font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>

                    <button className="flex items-center gap-2 text-primary text-[11px] font-black uppercase tracking-widest hover:underline">
                        <MapPin size={16} /> Use current location
                    </button>

                    <div className="space-y-6">
                        <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest">Popular Cities</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            {popularCities.map((city) => (
                                <button key={city} className="aspect-square bg-secondary/50 rounded-2xl flex items-center justify-center p-4 hover:bg-secondary transition-all group">
                                    <span className="text-[11px] font-black text-primary uppercase text-center leading-tight group-hover:scale-110 transition-transform">{city}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
