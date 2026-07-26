import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import aboutAsset from "@/assets/gloria-about.png.asset.json";

const about = aboutAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Acerca de mí — Gloria Reina" },
      { name: "description", content: "Gloria Reina. Estudié Realización de Proyectos Audiovisuales y Espectáculos, y más tarde Comunicación Audiovisual en la Universidad de Sevilla." },
      { property: "og:title", content: "Acerca de mí — Gloria Reina" },
      { property: "og:description", content: "Gloria Reina. Estudié Realización de Proyectos Audiovisuales y Espectáculos, y más tarde Comunicación Audiovisual en la Universidad de Sevilla." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});



function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <Reveal className="md:col-span-6">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={about}
                  alt="Portrait of Gloria Reina"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-6 md:pt-12">
              <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">Acerca de mí</p>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                Capturando la vida.
              </h1>
              <div className="mt-8 space-y-5 text-sm md:text-base font-light leading-relaxed text-foreground/80">
                <p>
                  Estudié Realización de Proyectos Audiovisuales y Espectáculos en el IES Néstor Almendros y, más tarde, Comunicación Audiovisual en la Universidad de Sevilla. Durante ese recorrido descubrí que lo que más me interesaba era capturar la vida a través de la imagen.
                </p>
                <p>
                  Trabajo principalmente con fotografía y vídeo, aunque también disfruto del montaje, el diseño y la creación de contenido para redes sociales. Me gusta cuidar tanto la parte técnica como la creativa de cada proyecto.
                </p>
              </div>


            </Reveal>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
