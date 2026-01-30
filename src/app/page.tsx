'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight, MoreHorizontal, Music, Trophy, Building2, Ticket, MapPin, Search } from 'lucide-react';
import { useRef, useState } from 'react';
import EventCard from '@/components/EventCard';
import Header from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const featuredEvents = [
  { id: 1, title: 'Summer Music Festival', location: 'Central Park', date: 'June 15-17' },
  { id: 2, title: 'Jazz Night Series', location: 'Blue Note Theater', date: 'June 20' },
  { id: 3, title: 'Rock Concert Live', location: 'Madison Square', date: 'June 25' },
  { id: 4, title: 'Electronic Music Fest', location: 'Rooftop Arena', date: 'July 1-3' },
  { id: 5, title: 'Acoustic Night', location: 'The Orange Hall', date: 'July 5' },
  { id: 6, title: 'Indie Showcase', location: 'The Nest', date: 'July 10' },
  { id: 7, title: 'Piano Recital', location: 'Steinway Hall', date: 'July 12' },
  { id: 8, title: 'Pop Star Live', location: 'City Stadium', date: 'July 15' },
];

const trendingVenues = [
  { id: 'v1', title: 'Metropolitan Arena', city: 'New York' },
  { id: 'v2', title: 'Riverside Amphitheater', city: 'Chicago' },
  { id: 'v3', title: 'Sunset Pavilion', city: 'Los Angeles' },
  { id: 'v4', title: 'Golden Gate Hall', city: 'San Francisco' },
  { id: 'v5', title: 'Crystal Palace', city: 'Miami' },
  { id: 'v6', title: 'Heritage Hall', city: 'Nashville' },
];

const sportsVenues = [
  { id: 'sv1', title: 'Champions Arena', sport: 'Basketball', city: 'New York' },
  { id: 'sv2', title: 'Field of Dreams', sport: 'Baseball', city: 'Chicago' },
  { id: 'sv3', title: 'Ice Hockey Hub', sport: 'Ice Hockey', city: 'Boston' },
  { id: 'sv4', title: 'Tennis Court Palace', sport: 'Tennis', city: 'Los Angeles' },
  { id: 'sv5', title: 'Football Stadium', sport: 'Football', city: 'Dallas' },
  { id: 'sv6', title: 'Soccer Complex', sport: 'Soccer', city: 'Seattle' },
];

function Section({
  title,
  items: initialItems,
  variant,
  baseRoute
}: {
  title: string;
  items: any[];
  variant: 'tall' | 'wide';
  baseRoute: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (initialItems.length === 0) return null;

  return (
    <section className="py-2 md:py-4 px-4 md:px-6 lg:px-12 group/section animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <div className="flex items-baseline gap-3 md:gap-4">
          <h2 className="text-xl md:text-3xl font-black tracking-tighter text-zinc-900">{title}</h2>
        </div>
        <div className="flex gap-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
          <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white border border-zinc-200 shadow-sm hover:bg-zinc-50 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white border border-zinc-200 shadow-sm hover:bg-zinc-50 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-8 scrollbar-hide px-2"
        >
          {initialItems.map((item) => (
            <Link key={item.id} href={`/${baseRoute}/${item.id}`}>
              <EventCard
                variant={variant}
                image={item.image}
                title={item.title}
                location={item.location || item.city}
                date={item.date || item.sport}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = [
    { icon: <Music size={18} />, label: 'Music Festivals', category: 'event' },
    { icon: <Trophy size={18} />, label: 'Sports Tournaments', category: 'sports' },
    { icon: <Building2 size={18} />, label: 'Premium Venues', category: 'venue' },
    { icon: <Ticket size={18} />, label: 'Last Minute Deals', category: 'deals' },
    { icon: <MapPin size={18} />, label: 'Events Nearby', category: 'nearby' },
  ];

  const filterItems = (items: any[]) => {
    return items.filter(item => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.location || item.city || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.sport || '').toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  };

  const filteredEvents = filterItems(featuredEvents);
  const filteredTrending = filterItems(trendingVenues);
  const filteredSports = filterItems(sportsVenues);

  const hasNoResults = searchQuery &&
    filteredEvents.length === 0 &&
    filteredTrending.length === 0 &&
    filteredSports.length === 0;

  return (
    <div className="min-h-screen bg-background font-sans transition-all duration-500">
      <Header />

      <main className="mx-auto max-w-[1440px]">

        {hasNoResults ? (
          <div className="py-32 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300">
              <Search size={48} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-zinc-900">No results found for "{searchQuery}"</h3>
              <p className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest mt-2">Try searching for something else</p>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="px-8 py-3 bg-zinc-100 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <>
            {(!activeFilter || activeFilter === 'event') && (
              <Section
                title="Featured Events"
                items={filteredEvents}
                variant="tall"
                baseRoute="event"
              />
            )}

            {(!activeFilter || activeFilter === 'venue') && (
              <Section
                title="Trending in your City"
                items={filteredTrending}
                variant="wide"
                baseRoute="venue"
              />
            )}

            {(!activeFilter || activeFilter === 'sports') && (
              <>
                <Section
                  title="All Sports Venues"
                  items={filteredSports}
                  variant="wide"
                  baseRoute="sports"
                />
                <div className="px-4 md:px-6 lg:px-12 py-8">
                  <div className="rounded-[2rem] overflow-hidden border border-[#5331EA] shadow-xl">
                    <img
                      src="/ticpin-pass.png"
                      alt="Ticpin Pass"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
