import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { groups, getGroupCover } from "@/lib/galleries";

export const Route = createFileRoute("/galleries/")({
  head: () => ({
    meta: [
      { title: "Galleries — Gloria Reina" },
      {
        name: "description",
        content:
          "Selected work across portrait, weddings, editorial, travel, and personal black-and-white photography.",
      },
      { property: "og:title", content: "Galleries — Gloria Reina" },
      {
        property: "og:description",
        content:
          "Selected work across portrait, weddings, editorial, travel, and personal black-and-white photography.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleriesIndex,
});

function GalleriesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">
              Colecciones
            </p>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl">Galerías</h1>
            <p className="mt-6 max-w-xl text-sm md:text-base font-light text-muted-foreground">
              Un conjunto de trabajos entre encargos y proyectos personales. Elige una serie para
              entrar.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {groups.map((g, i) => (
              <Reveal key={g.slug} delay={i * 80}>
                <Link
                  to="/galleries/$group"
                  params={{ group: g.slug }}
                  className="group block relative overflow-hidden"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={getGroupCover(g)}
                      alt={g.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                    <p className="text-[10px] uppercase tracking-widest-plus opacity-80">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 font-serif text-3xl md:text-5xl">{g.name}</h2>
                    <p className="mt-4 text-[11px] uppercase tracking-widest-plus opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                      Ver serie
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
