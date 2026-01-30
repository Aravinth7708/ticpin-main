'use client';

import Link from 'next/link';
import { ChevronDown, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AuthModal from '@/components/modals/AuthModal';
import LocationModal from '@/components/modals/LocationModal';

export default function Navbar() {
    const pathname = usePathname();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState('Location Name');

    const navItems = [
        { name: 'For you', href: '/' },
        { name: 'Dining', href: '/dining' },
        { name: 'Events', href: '/events' },
        { name: 'Play', href: '/play' },
        // { name: 'Cinema', href: '#' },
        // { name: 'Workshops', href: '#' },
        // { name: 'Comedy', href: '#' }
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
            <div className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-12">
                {/* Left: Logo and Explore */}
                <div className="flex items-center gap-4 md:gap-8">
                    <Link href="/" className="text-lg md:text-xl font-black tracking-tighter text-zinc-900 border-r border-zinc-200 pr-4 md:pr-8">
                        TICKPIN
                    </Link>
                    <div className="hidden sm:flex items-center gap-2 cursor-pointer group">
                        <span className="text-[12px] md:text-sm font-semibold text-zinc-900 group-hover:text-primary transition-colors">Explore</span>
                        <ChevronDown size={14} className="text-zinc-500 group-hover:text-primary transition-colors" />
                    </div>
                </div>

                {/* Center: Tabs */}
                <nav className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-hide">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 whitespace-nowrap ${isActive
                                    ? 'bg-secondary text-primary'
                                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: Location & User */}
                <div className="flex items-center gap-4 md:gap-8">
                    <span
                        onClick={() => setIsLocationOpen(true)}
                        className="hidden lg:block text-[12px] md:text-[13px] font-bold text-zinc-900 cursor-pointer hover:text-primary transition-colors"
                    >
                        {currentLocation}
                    </span>
                    <div
                        onClick={() => setIsAuthOpen(true)}
                        className="h-8 w-8 md:h-9 md:w-9 bg-[#d9d9d9] rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
                    >
                        {/* Profile Icon */}
                        <div className="w-4 h-4 md:w-5 md:h-5 text-white">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
        </header>
    );
}
