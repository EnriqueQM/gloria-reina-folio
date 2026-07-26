export type LinkedImage = { src: string; href: string };

export function LinkedGallery({ images }: { images: LinkedImage[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
      {images.map((img, i) => (
        
          key={i}
          href={img.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mb-4 md:mb-6 block w-full break-inside-avoid overflow-hidden group"
          aria-label="Ver en Instagram"
        >
          <img
            src={img.src}
            alt=""
            loading="lazy"
            className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
