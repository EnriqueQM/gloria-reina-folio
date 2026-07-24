import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const current = images[index];
  if (!current) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto overscroll-contain gr-fade">
      <button
        onClick={onClose}
        aria-label="Close"
        className="fixed top-6 right-6 z-10 text-white/80 hover:text-white transition"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button
        onClick={onNext}
        aria-label="Next"
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition"
      >
        <ChevronRight className="h-10 w-10" />
      </button>
      <div className="min-h-full flex items-center justify-center py-12 px-4">
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-[92vw] h-auto object-contain"
        />
      </div>
      <div className="fixed bottom-6 left-0 right-0 text-center text-[11px] uppercase tracking-widest-plus text-white/60 pointer-events-none">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
