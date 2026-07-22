import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif text-lg">Gloria Reina</p>
        <div className="flex gap-8 text-[11px] uppercase tracking-widest-plus text-muted-foreground">
          <Link to="/galleries" className="hover:text-foreground transition">Galerías</Link>
          <Link to="/about" className="hover:text-foreground transition">Sobre mí</Link>
          <Link to="/contact" className="hover:text-foreground transition">Contacto</Link>
        </div>
        <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
