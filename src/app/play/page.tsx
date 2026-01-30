'use client'

import Navbar from '@/components/layout/Navbar'
import SportCard from '@/components/ui/cards/SportCard'
import VenueCard from '@/components/ui/cards/VenueCard'
import FilterPill from '@/components/ui/FilterPill'
import AppBanner from '@/components/layout/AppBanner'
import Footer from '@/components/layout/Footer'
import { sports } from '@/data/sports'
import { venues } from '@/data/venues'

export default function PlayPage() {
    const filterOptions = ['Filters', 'Top rated', 'Cricket', 'Pickleball', 'Badminton']

    return (
        <div
            className="min-h-screen"
            style={{ background: 'linear-gradient(180deg, #FFFCF0 0%, white 100%)' }}
        >
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-12">
                {/* Explore Sports Section */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Explore Sports</h2>

                    {/* Mobile View: Two-Row Horizontal Scroll (Handles 36 cards) */}
                    <div className="md:hidden overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 overflow-y-hidden">
                        <div className="grid grid-rows-2 grid-flow-col gap-6 w-max">
                            {sports.map((sport) => (
                                <SportCard key={sport.id} name={sport.name} />
                            ))}
                        </div>
                    </div>

                    {/* Desktop View: 6x6 Grid Implementation */}
                    <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 overflow-hidden">
                        {sports.map((sport) => (
                            <SportCard key={sport.id} name={sport.name} />
                        ))}
                    </div>
                </section>

                {/* All Sports Venues Section */}
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 text-foreground md:text-black">All Sports Venues</h2>

                    {/* Filter Pills */}
                    <div className="flex overflow-x-auto pb-4 gap-3 mb-6 sm:mb-8 scrollbar-hide">
                        {filterOptions.map((filter, index) => (
                            <div key={index} className="shrink-0">
                                <FilterPill
                                    label={filter}
                                    icon={index === 0}
                                    isActive={false}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Venues Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {venues.map((venue) => (
                            <VenueCard key={venue.id} venue={venue} />
                        ))}
                    </div>
                </section>

                <AppBanner
                    subtitle="Explore the best sports venues around you"
                />
            </main>
            <Footer />
        </div>
    )
}
