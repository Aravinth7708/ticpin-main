'use client';

interface AppBannerProps {
    title?: string;
    subtitle?: string;
    bgImage?: string;
}

export default function AppBanner({
    title = "APP BANNER",
    subtitle = "Exclusive table bookings & offers",
    bgImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop"
}: AppBannerProps) {
    return (
        <div className="h-[200px] md:h-[320px] w-full bg-[#1a1a1a] rounded-[2rem] md:rounded-[3.5rem] flex items-center justify-center overflow-hidden relative group border border-zinc-200 mt-12 sm:mt-16">
            <div
                className="absolute inset-0 opacity-20 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${bgImage}')` }}
            />
            <div className="relative text-center z-10 px-6">
                <span className="block text-3xl md:text-7xl font-black text-white tracking-[0.2em] transform -rotate-1 mb-2">
                    {title}
                </span>
                <p className="text-white/60 uppercase tracking-[0.5em] text-[10px] md:text-sm font-medium">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
