import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gloria Reina" },
      { name: "description", content: "Get in touch with Gloria Reina for commissions, editorial assignments, and print inquiries." },
      { property: "og:title", content: "Contact — Gloria Reina" },
      { property: "og:description", content: "Get in touch with Gloria Reina for commissions, editorial assignments, and print inquiries." },
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
              <p className="text-[11px] uppercase tracking-widest-plus text-muted-foreground">Contact</p>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Say hello.</h1>
              <p className="mt-6 text-sm md:text-base font-light text-foreground/80 leading-relaxed max-w-sm">
                For commissions, editorial assignments, prints, and press — please write. I reply personally within a few days.
              </p>

              <div className="mt-12 space-y-6 text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Email</p>
                  <a href="mailto:studio@gloriareina.com" className="mt-2 block font-serif text-xl hover:opacity-60 transition">
                    studio@gloriareina.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Studio</p>
                  <p className="mt-2 font-light">Madrid · New York</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Elsewhere</p>
                  <div className="mt-2 flex gap-6 text-[11px] uppercase tracking-widest-plus">
                    <a href="#" className="hover:opacity-60 transition border-b border-foreground pb-0.5">Instagram</a>
                    <a href="#" className="hover:opacity-60 transition border-b border-foreground pb-0.5">Are.na</a>
                    <a href="#" className="hover:opacity-60 transition border-b border-foreground pb-0.5">Behance</a>
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
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Subject" name="subject" />
                <div>
                  <label className="text-[10px] uppercase tracking-widest-plus text-muted-foreground">Message</label>
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
                  {sent ? "Message sent — thank you" : "Send message →"}
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
