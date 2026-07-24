import { useState } from "react";
import { Lightbox } from "./Lightbox";

export type GalleryImage = { src: string; alt: string };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="mb-4 md:mb-6 block w-full break-inside-avoid overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {index !== null && (
        <Lightbox
          images={images}
          index={index}
          onClose={() => setIndex(null)}
          onPrev={() => setIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))}
          onNext={() => setIndex((i) => (i === null ? 0 : (i + 1) % images.length))}
        />
      )}
    </>
  );
}
