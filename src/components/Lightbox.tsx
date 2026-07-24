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
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center gr-fade">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-white/80 hover:text-white transition"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button
        onClick={onNext}
        aria-label="Next"
        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition"
      >
        <ChevronRight className="h-10 w-10" />
      </button>
      <img
        src={current.src}
        alt={current.alt}
        className="max-h-[88vh] max-w-[92vw] object-contain"
      />
      <div className="absolute bottom-6 left-0 right-0 text-center text-[11px] uppercase tracking-widest-plus text-white/60">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
