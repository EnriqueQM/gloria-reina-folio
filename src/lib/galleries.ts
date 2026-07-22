import portrait from "@/assets/cat-portrait.jpg";
import weddings from "@/assets/cat-weddings.jpg";
import editorial from "@/assets/cat-editorial.jpg";
import travel from "@/assets/cat-travel.jpg";
import bw from "@/assets/cat-bw.jpg";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export type Category = {
  slug: string;
  name: string;
  cover: string;
  description: string;
  images: { src: string; alt: string }[];
};

// Placeholder image pool — user will swap for their own work later.
const pool = [portrait, weddings, editorial, travel, bw, hero, about];

const makeImages = (name: string, count = 9) =>
  Array.from({ length: count }).map((_, i) => ({
    src: pool[i % pool.length],
    alt: `${name} — image ${i + 1}`,
  }));

export const categories: Category[] = [
  {
    slug: "retratos",
    name: "Retratos",
    cover: portrait,
    description: "Estudios de luz, gesto y presencia silenciosa.",
    images: makeImages("Retratos"),
  },
  {
    slug: "paisajes",
    name: "Paisajes",
    cover: travel,
    description: "Notas de lugares, clima y caminos largos.",
    images: makeImages("Paisajes"),
  },
  {
    slug: "cortometrajes",
    name: "Cortometrajes",
    cover: editorial,
    description: "Narrativas breves contadas en movimiento.",
    images: makeImages("Cortometrajes"),
  },
  {
    slug: "reportaje",
    name: "Reportaje",
    cover: weddings,
    description: "Momentos sin dirección, tal como suceden.",
    images: makeImages("Reportaje"),
  },
  {
    slug: "documentales",
    name: "Documentales",
    cover: bw,
    description: "Un archivo personal en sombra y luz.",
    images: makeImages("Documentales"),
  },
  {
    slug: "trabajo-personal",
    name: "Trabajo Personal",
    cover: about,
    description: "Proyectos propios, sin encargo ni cliente.",
    images: makeImages("Trabajo Personal"),
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
