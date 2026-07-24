import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Gloria Reina" },
      { name: "description", content: "Ponte en contacto con Gloria Reina para encargos, proyectos editoriales y consultas de impresión." },
      { property: "og:title", content: "Contacto — Gloria Reina" }, 
      { property: "og:description", content: "Ponte en contacto con Gloria Reina para encargos, proyectos editoriales y consultas de impresión." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">Contacto</p>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Hablemos.</h1>
              <p className="mt-6 text-sm md:text-base font-light text-foreground/80 leading-relaxed max-w-sm">
                Para encargos, proyectos editoriales, sesiones — escríbeme. Respondo personalmente en pocos días.
              </p>

              <div className="mt-12 space-y-6 text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Correo</p>
                  <a href="mailto:gloriareinaypunto@gmail.com" className="mt-2 block font-serif text-xl hover:opacity-60 transition">
                    gloriareinaypunto@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Teléfono</p>
                  <p className="mt-2 font-light">+34 652 78 55 96</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Redes</p>
                  <div className="mt-2 flex gap-6 text-[11px] uppercase tracking-widest-plus">
                    <a href="https://www.instagram.com/glxriareina/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition border-b border-foreground pb-0.5">Instagram</a>
                    <a href="https://www.linkedin.com/in/gloria-reina-mart%C3%ADn-6212b826b/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition border-b border-foreground pb-0.5">LinkedIn</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-10"
              >
                <Field label="Nombre" name="name" required />
                <Field label="Correo" name="email" type="email" required />
                <Field label="Asunto" name="subject" />
                <div>
                  <label className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Mensaje</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 font-light text-base focus:border-foreground focus:outline-none resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sent}
                  className="border-b border-foreground pb-1 text-[11px] uppercase tracking-widest-plus hover:opacity-60 transition disabled:opacity-40"
                >
                  {sent ? "Mensaje enviado — gracias" : "Enviar mensaje →"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 font-light text-base focus:border-foreground focus:outline-none transition-colors"
      />
    </div>
  );
}
