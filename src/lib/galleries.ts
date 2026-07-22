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
    slug: "portrait",
    name: "Portrait",
    cover: portrait,
    description: "Studies of light, gesture, and quiet presence.",
    images: makeImages("Portrait"),
  },
  {
    slug: "weddings",
    name: "Weddings",
    cover: weddings,
    description: "Unposed moments from the days that matter most.",
    images: makeImages("Weddings"),
  },
  {
    slug: "editorial",
    name: "Editorial",
    cover: editorial,
    description: "Commissioned work for magazines and brands.",
    images: makeImages("Editorial"),
  },
  {
    slug: "travel",
    name: "Travel",
    cover: travel,
    description: "Notes from places, weather, and long roads.",
    images: makeImages("Travel"),
  },
  {
    slug: "black-and-white",
    name: "Black & White",
    cover: bw,
    description: "A personal archive in shadow and light.",
    images: makeImages("Black & White"),
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
