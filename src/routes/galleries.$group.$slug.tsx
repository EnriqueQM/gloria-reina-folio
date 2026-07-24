import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { getGroup, getGroupCategories, getCategory } from "@/lib/galleries";

export const Route = createFileRoute("/galleries/$group/$slug")({
  loader: ({ params }) => {
    const group = getGroup(params.group);
    const category = getCategory(params.slug);
    if (!group || !category || !group.categorySlugs.includes(category.slug)) {
      throw notFound();
    }
    return { group, category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Galería — Gloria Reina" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const title = `${category.name} — Gloria Reina`;
    return {
      meta: [
        { title },
        { name: "description", content: category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: category.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: GalleryPage,
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
});

function GalleryPage() {
  const { group, category } = Route.useLoaderData();
  const siblings = getGroupCategories(group).filter((c) => c.slug !== category.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal>
            <Link
              to="/galleries/$group"
              params={{ group: group.slug }}
              className="text-[11px] uppercase tracking-widest-plus text-muted-foreground hover:text-foreground transition"
            >
              ← {group.name}
            </Link>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl">{category.name}</h1>
            <p className="mt-4 max-w-xl text-sm md:text-base font-light text-muted-foreground">
              {category.description}
            </p>
          </Reveal>

          <div className="mt-16 md:mt-20">
            <Reveal>
              <Gallery images={category.images} />
            </Reveal>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-border/60 pt-8 text-[11px] uppercase tracking-widest-plus text-muted-foreground">
            <span>{category.images.length} works</span>
            <div className="flex gap-6">
              {siblings.slice(0, 2).map((c) => (
                <Link
                  key={c.slug}
                  to="/galleries/$group/$slug"
                  params={{ group: group.slug, slug: c.slug }}
                  className="hover:text-foreground transition"
                >
                  {c.name} →
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

function ErrorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <p className="font-serif text-2xl">Algo salió mal.</p>
    </div>
  );
}
