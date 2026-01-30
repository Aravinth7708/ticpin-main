'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AppBanner from '@/components/layout/AppBanner';
import ExploreCard from '@/components/events/ExploreCard';
import ArtistAvatar from '@/components/events/ArtistAvatar';
import FilterButton from '@/components/events/FilterButton';
import EventCard from '@/components/events/EventCard';
import { exploreEvents, artists, events } from '../../data/mockData';

export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState('Today');

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Explore Events</h2>
                    <div className="flex gap-[30px] overflow-x-auto pb-4 scrollbar-hide">
                        {exploreEvents.map((event) => (
                            <ExploreCard
                                key={event.id}
                                name={event.name}
                                image={event.image}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-12 relative">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Artists</h2>
                    <div
                        id="artists-container"
                        className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    >
                        {artists.map((artist) => (
                            <ArtistAvatar
                                key={artist.id}
                                name={artist.name}
                                image={artist.image}
                            />
                        ))}
                    </div>
                    {/* Previous Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('artists-container');
                            if (container) {
                                container.scrollBy({ left: -300, behavior: 'smooth' });
                            }
                        }}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hidden md:flex"
                        aria-label="Previous artists"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    {/* Next Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('artists-container');
                            if (container) {
                                container.scrollBy({ left: 300, behavior: 'smooth' });
                            }
                        }}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hidden md:flex"
                        aria-label="Next artists"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </section>

                <section>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">All events</h2>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {['Filters', 'Today', 'Tomorrow', 'Music'].map((filter) => (
                                <FilterButton
                                    key={filter}
                                    label={filter}
                                    active={activeFilter === filter}
                                    onClick={() => setActiveFilter(filter)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
                        {events.map((event) => (
                            <EventCard
                                key={event.id}
                                name={event.name}
                                location={event.location}
                                date={event.date}
                                time={event.time}
                                ticketPrice={event.ticketPrice}
                                image={event.image}
                            />
                        ))}
                    </div>
                </section>

                <AppBanner
                    subtitle="Book your favorite events and shows now"
                />
            </main>

            <Footer />
        </div>
    );
}