import editorial from "@/assets/cat-editorial.jpg";
import bw from "@/assets/cat-bw.jpg";
import travel from "@/assets/cat-travel.jpg";
import portrait from "@/assets/cat-portrait.jpg";
import weddings from "@/assets/cat-weddings.jpg";
import about from "@/assets/about.jpg";

export type VideoEntry = {
  title: string;
  description: string;
  coverImage: string;
  videoUrl: string;
};

export const videosByCategory: Record<string, VideoEntry[]> = {
  cortometrajes: [
    {
      title: "Título del cortometraje 01",
      description:
        "Una breve descripción del cortometraje. Reemplaza este texto con la sinopsis real.",
      coverImage: editorial,
      videoUrl: "#",
    },
    {
      title: "Título del cortometraje 02",
      description: "Sinopsis de ejemplo para el segundo cortometraje.",
      coverImage: bw,
      videoUrl: "#",
    },
    {
      title: "Título del cortometraje 03",
      description: "Sinopsis de ejemplo para el tercer cortometraje.",
      coverImage: travel,
      videoUrl: "#",
    },
  ],
  documentales: [
    {
      title: "Título del documental 01",
      description: "Descripción breve del documental. Sustituye por el texto real.",
      coverImage: bw,
      videoUrl: "#",
    },
    {
      title: "Título del documental 02",
      description: "Descripción de ejemplo para el segundo documental.",
      coverImage: portrait,
      videoUrl: "#",
    },
    {
      title: "Título del documental 03",
      description: "Descripción de ejemplo para el tercer documental.",
      coverImage: weddings,
      videoUrl: "#",
    },
  ],
};

// silence unused import warnings when swapping placeholders later
export const _placeholderPool = [about];

export const getVideosForCategory = (slug: string): VideoEntry[] =>
  videosByCategory[slug] ?? [];
