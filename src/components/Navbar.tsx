import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/galleries", label: "Galleries" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-wide transition-colors ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          Gloria Reina
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[11px] uppercase tracking-widest-plus transition-colors hover:opacity-60 ${
                solid ? "text-foreground" : "text-white"
              }`}
              activeProps={{ className: "opacity-60" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className={`md:hidden ${solid ? "text-foreground" : "text-white"}`}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex h-[100dvh] w-screen flex-col bg-background md:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-xl">Gloria Reina</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-8 px-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl leading-none"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-8 pb-10 text-[10px] uppercase tracking-widest-plus text-muted-foreground">
            Gloria Reina — Photography
          </div>
        </div>
      )}
    </header>
  );
}
