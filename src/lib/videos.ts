import about from "@/assets/about.jpg";
import cortometraje01 from "@/assets/videos/cortometraje01.jpg";
import rematecover from "@/assets/videos/rematecover.png";
import galletacover from "@/assets/videos/galletacover.png";
import menosuno from "@/assets/videos/menosunocover.png";
import ondacapital from "@/assets/videos/ondacapitalcover.png";
import oprah from "@/assets/videos/oprahcover.png";
import ensayo from "@/assets/videos/ensayocover.png";


export type VideoEntry = {
  title: string;
  description: string;
  coverImage: string;
  videoUrl: string;
};

export const videosByCategory: Record<string, VideoEntry[]> = {
  cortometrajes: [
    {
      title: "Cortometraje documental: La exclusión social en la 3ª edad",
      description:
        "Trabajo Final de Grado. Producción, realización y montaje completas.",
      coverImage: cortometraje01,
      videoUrl: "https://www.youtube.com/watch?v=ZjTsC7W074o",
    },
    {
      title: "Cortometraje Remate",
      description: "Proyecto universitario. Participación en la dirección de actores, dirección de fotografía, grabación y montaje completo del vídeo.",
      coverImage: rematecover,
      videoUrl: "https://www.youtube.com/watch?v=MFr7LK4hJJs",
    },
    {
      title: "Cortometraje: Galleta de la fortuna",
      description: "Trabajo Final de C.F.G.S. Producción, realización y montaje.",
      coverImage: galletacover,
      videoUrl: "https://www.youtube.com/watch?v=_eNzxJgwm2s",
    },
    {
      title: "Cortometraje Menos uno",
      description: "Proyecto para C.F.G.S. Participación en el guion y en el montaje.",
      coverImage: menosuno,
      videoUrl: "https://www.youtube.com/watch?v=rz90jHJUvhk",
    },
  ],
  documentales: [
    {
      title: "Reportaje para Onda Capital",
      description: "Participación en el montaje completo del vídeo.",
      coverImage: ondacapital,
      videoUrl: "https://www.youtube.com/watch?v=wFMurhfmYPA",
    },
    {
      title: "Videoensayo \"Películas Slasher de Terror: La desigualdad de género a la hora de morir y cómo cala en el espectador\"",
      description: "Proyecto universitario. Participación en el montaje completo del vídeo.",
      coverImage: ensayo,
      videoUrl: "https://www.youtube.com/watch?v=W5D6kv542iM",
    },
    {
      title: "Oprah Winfrey: El Documental",
      description: "Proyecto universitario. Documental ficticio sobre la vida de oprah winfrey. Participación en el guion, y montaje completo del video.",
      coverImage: oprah,
      videoUrl: "https://www.youtube.com/watch?v=_YrcVsVr1eU",
    },
  ],
};

// silence unused import warnings when swapping placeholders later
export const _placeholderPool = [about];

export const getVideosForCategory = (slug: string): VideoEntry[] => videosByCategory[slug] ?? [];