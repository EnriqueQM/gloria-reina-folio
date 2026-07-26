import type { VideoEntry } from "@/lib/videos";

export function VideoShowcase({ videos }: { videos: VideoEntry[] }) {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {videos.map((v, i) => {
        const reverse = i % 2 === 1;
        return (
          <article
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
              reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <a
              href={v.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-md mx-auto md:mx-0 w-full max-w-[320px]"
              aria-label={`Ver ${v.title}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={v.coverImage}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 translate-x-[2px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </a>

            <div className="flex flex-col">
              <h2 className="font-serif text-3xl md:text-4xl">{v.title}</h2>
              <p className="mt-4 text-sm md:text-base font-light text-muted-foreground max-w-md">
                {v.description}
              </p>
              <a
                href={v.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-fit border-b border-foreground pb-1 text-[11px] uppercase tracking-widest-plus hover:opacity-70 transition"
              >
                Ver vídeo →
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
