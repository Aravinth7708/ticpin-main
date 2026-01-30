import Image from 'next/image'
import type { Venue } from '@/data/venues'

interface VenueCardProps {
  venue: Venue
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden cursor-pointer">
      <div className="relative w-full aspect-video">
        <Image
          src={venue.image || "/placeholder.svg"}
          alt={venue.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-foreground font-semibold text-sm sm:text-base line-clamp-1">{venue.name}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-1">{venue.location}</p>
        <div className="mt-2 sm:mt-3 inline-block">
          <span className="text-[10px] sm:text-xs bg-muted text-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            {venue.category}
          </span>
        </div>
      </div>
    </div>
  )
}
