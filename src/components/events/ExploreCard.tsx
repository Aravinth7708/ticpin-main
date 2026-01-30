interface ExploreCardProps {
  name: string;
  image: string;
}

export default function ExploreCard({ name, image }: ExploreCardProps) {
  return (
    <div
      className="group bg-white rounded-[20px] flex flex-col cursor-pointer relative overflow-hidden shrink-0 items-center justify-center transition-all duration-300 hover:scale-105"
      style={{
        width: '134px',
        height: '177px',
        borderTop: '2px solid #708281ff',
        borderLeft: '2px solid #C8C8C8',
        borderBottom: '2px solid #C8C8C8',
        borderRight: '2px solid #686868ff'
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      </div>

      <div className="relative z-10 px-4 py-3">
        <h3 className="text-sm font-bold text-white text-center drop-shadow-md">{name}</h3>
      </div>
    </div>
  );
}
