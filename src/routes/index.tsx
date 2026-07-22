import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gloria Reina — Photographer" },
      {
        name: "description",
        content:
          "Editorial black-and-white photography by Gloria Reina — portraits, weddings, travel, and personal work.",
      },
      { property: "og:title", content: "Gloria Reina — Photographer" },
      {
        property: "og:description",
        content:
          "Editorial black-and-white photography by Gloria Reina — portraits, weddings, travel, and personal work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar transparent />
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="Woman in flowing dress under dramatic light"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p className="gr-fade text-[11px] uppercase tracking-widest-plus opacity-80" style={{ animationDelay: "200ms" }}>
            Photographer · Est. 2014
          </p>
          <h1 className="gr-fade-up mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-none" style={{ animationDelay: "400ms" }}>
            Gloria Reina
          </h1>
          <p className="gr-fade mt-8 max-w-md text-sm md:text-base font-light opacity-90" style={{ animationDelay: "900ms" }}>
            Quiet frames. Honest light. A record of the ordinary made luminous.
          </p>
          <Link
            to="/galleries"
            className="gr-fade mt-14 inline-block border-b border-white/70 pb-1 text-[11px] uppercase tracking-widest-plus hover:border-white transition"
            style={{ animationDelay: "1200ms" }}
          >
            View the work
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest-plus text-white/60 gr-fade" style={{ animationDelay: "1500ms" }}>
          Scroll
        </div>
      </section>
    </div>
  );
}
