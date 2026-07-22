import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gloria Reina" },
      { name: "description", content: "Gloria Reina is an editorial photographer based between Madrid and New York, working in portrait, wedding, and travel photography." },
      { property: "og:title", content: "About — Gloria Reina" },
      { property: "og:description", content: "Gloria Reina is an editorial photographer based between Madrid and New York, working in portrait, wedding, and travel photography." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const press = [
  "Vogue Italia",
  "The New York Times Magazine",
  "AnOther",
  "Kinfolk",
  "Hermès",
  "Aesop",
];

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
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-6 md:pt-12">
              <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">About</p>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                A quiet way of seeing.
              </h1>
              <div className="mt-8 space-y-5 text-sm md:text-base font-light leading-relaxed text-foreground/80">
                <p>
                  Gloria Reina is an editorial and documentary photographer based between Madrid and New York.
                  Her work is grounded in a slow, observational approach — portraits made with patience, weddings
                  captured without direction, landscapes met on their own terms.
                </p>
                <p>
                  Trained in analog black-and-white printing, she carries that discipline into everything she
                  makes: attention to light, restraint in composition, and a preference for what is real over
                  what is arranged.
                </p>
                <p>
                  She has photographed for magazines, brands, and private commissions across Europe and North
                  America. Selected clients and press below.
                </p>
              </div>

              <div className="mt-14">
                <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">
                  Selected clients & press
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 font-serif text-lg md:text-xl">
                  {press.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
