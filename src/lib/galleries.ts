import portrait from "@/assets/cat-portrait.jpg";
import weddings from "@/assets/cat-weddings.jpg";
import editorial from "@/assets/cat-editorial.jpg";
import travel from "@/assets/cat-travel.jpg";
import bw from "@/assets/cat-bw.jpg";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import r2 from "@/assets/retratos/r2.png.asset.json";
import r3 from "@/assets/retratos/r3.png.asset.json";
import r4 from "@/assets/retratos/r4.png.asset.json";
import r5 from "@/assets/retratos/r5.png.asset.json";
import r6 from "@/assets/retratos/r6.png.asset.json";
import r7 from "@/assets/retratos/r7.png.asset.json";
import r8 from "@/assets/retratos/r8.png.asset.json";
import r9 from "@/assets/retratos/r9.png.asset.json";
import rUntitled from "@/assets/retratos/Untitled.png.asset.json";
import p1 from "@/assets/paisajes/p1.png.asset.json";
import p2 from "@/assets/paisajes/p2.png.asset.json";
import p3 from "@/assets/paisajes/p3.png.asset.json";
import p4 from "@/assets/paisajes/p4.png.asset.json";
import p5 from "@/assets/paisajes/p5.png.asset.json";
import p6 from "@/assets/paisajes/p6.png.asset.json";
import p7 from "@/assets/paisajes/p7.png.asset.json";
import p8 from "@/assets/paisajes/p8.png.asset.json";
import p9 from "@/assets/paisajes/p9.png.asset.json";
import p10 from "@/assets/paisajes/p10.png.asset.json";
import p11 from "@/assets/paisajes/p11.png.asset.json";
import p12 from "@/assets/paisajes/p12.png.asset.json";

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

const retratosImages = [rUntitled, r2, r3, r4, r5, r6, r7, r8, r9].map((a, i) => ({
  src: a.url,
  alt: `Retratos — imagen ${i + 1}`,
}));

const paisajesImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12].map((a, i) => ({
  src: a.url,
  alt: `Paisajes — imagen ${i + 1}`,
}));

export const categories: Category[] = [
  {
    slug: "retratos",
    name: "Retratos",
    cover: rUntitled.url,
    description: "Estudios de luz, gesto y presencia silenciosa.",
    images: retratosImages,
  },
  {
    slug: "paisajes",
    name: "Paisajes",
    cover: p1.url,
    description: "Notas de lugares, clima y caminos largos.",
    images: paisajesImages,
  },
  {
    slug: "cortometrajes",
    name: "Cortometrajes",
    cover: editorial,
    description: "Narrativas breves contadas en movimiento.",
    images: makeImages("Cortometrajes"),
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

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

// --- Groups: the 3 main sections shown on /galleries ---
// Each group bundles one or more of the categories above.
// A group with exactly one category (e.g. "trabajo-personal") is
// treated as standalone: visiting the group goes straight to the
// gallery instead of showing a subcategory picker first.
export type Group = {
  slug: string;
  name: string;
  description: string;
  categorySlugs: string[];
};

export const groups: Group[] = [
  {
    slug: "fotografia",
    name: "Fotografía",
    description: "Retratos y paisajes.",
    categorySlugs: ["retratos", "paisajes"],
  },
  {
    slug: "video",
    name: "Video",
    description: "Cortometrajes y documentales.",
    categorySlugs: ["cortometrajes", "documentales"],
  },
  {
    slug: "trabajo-personal",
    name: "Trabajo Personal",
    description: "Proyectos propios, sin encargo ni cliente.",
    categorySlugs: ["trabajo-personal"],
  },
];

export const getGroup = (slug: string) => groups.find((g) => g.slug === slug);

export const getGroupCategories = (group: Group) =>
  group.categorySlugs.map((slug) => getCategory(slug)).filter((c): c is Category => Boolean(c));

// Cover image shown for the group tile on /galleries — uses the
// first category's cover as a stand-in.
export const getGroupCover = (group: Group) => getGroupCategories(group)[0]?.cover ?? about;

export const isStandaloneGroup = (group: Group) => group.categorySlugs.length === 1;