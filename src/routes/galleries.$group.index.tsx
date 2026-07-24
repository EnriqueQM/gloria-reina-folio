import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { getGroup, getGroupCategories, isStandaloneGroup, groups } from "@/lib/galleries";

export const Route = createFileRoute("/galleries/$group/")({
  loader: ({ params }) => {
    const group = getGroup(params.group);
    if (!group) throw notFound();
    return { group };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Galería — Gloria Reina" }, { name: "robots", content: "noindex" }],
      };
    }
    const g = loaderData.group;
    const title = `${g.name} — Gloria Reina`;
    return {
      meta: [
        { title },
        { name: "description", content: g.description },
        { property: "og:title", content: title },
        { property: "og:description", content: g.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: GroupIndex,
  notFoundComponent: NotFound,
});

function GroupIndex() {
  const { group } = Route.useLoaderData();
  const cats = getGroupCategories(group);
  const standalone = isStandaloneGroup(group);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal>
            <Link
              to="/galleries"
              className="text-[11px] uppercase tracking-widest-plus text-muted-foreground hover:text-foreground transition"
            >
              ← Todas las galerías
            </Link>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl">{group.name}</h1>
            <p className="mt-4 max-w-xl text-sm md:text-base font-light text-muted-foreground">
              {group.description}
            </p>
          </Reveal>

          {standalone ? (
            <div className="mt-16 md:mt-20">
              <Reveal>
                <Gallery images={cats[0]?.images ?? []} />
              </Reveal>
            </div>
          ) : (
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {cats.map((c, i) => (
                <Reveal key={c.slug} delay={i * 80}>
                  <Link
                    to="/galleries/$group/$slug"
                    params={{ group: group.slug, slug: c.slug }}
                    className="group block relative overflow-hidden"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={c.cover}
                        alt={c.name}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                      <p className="text-[10px] uppercase tracking-widest-plus opacity-80">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-3 font-serif text-3xl md:text-5xl">{c.name}</h2>
                      <p className="mt-4 text-[11px] uppercase tracking-widest-plus opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                        Ver serie
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-24 flex items-center justify-between border-t border-border/60 pt-8 text-[11px] uppercase tracking-widest-plus text-muted-foreground">
            <span>
              {standalone ? `${cats[0]?.images.length ?? 0} works` : `${cats.length} series`}
            </span>
            <div className="flex gap-6">
              {groups
                .filter((g) => g.slug !== group.slug)
                .map((g) => (
                  <Link
                    key={g.slug}
                    to="/galleries/$group"
                    params={{ group: g.slug }}
                    className="hover:text-foreground transition"
                  >
                    {g.name} →
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">404</p>
        <h1 className="mt-4 font-serif text-4xl">Galería no encontrada</h1>
        <Link
          to="/galleries"
          className="mt-8 inline-block border-b border-foreground pb-1 text-[11px] uppercase tracking-widest-plus"
        >
          Volver a galerías
        </Link>
      </div>
    </div>
  );
}
