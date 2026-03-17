"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

type Tag = "PPC" | "Shoptet" | "Content" | "Kód" | "Mailing";

const tagColors: Record<Tag, string> = {
  PPC:     "bg-[#0f172a] text-[#3b82f6] border border-[#3b82f6]/30",
  Shoptet: "bg-[#0f172a] text-[#f95738] border border-[#f95738]/30",
  Content: "bg-[#0f172a] text-[#3b82f6] border border-[#3b82f6]/20",
  Kód:     "bg-[#0f172a] text-[#f95738] border border-[#f95738]/20",
  Mailing: "bg-[#0f172a] text-[#3b82f6] border border-[#3b82f6]/20",
};

const projects: { name: string; logo: string; tags: Tag[] }[] = [
  { name: "PMN Nerez",        logo: "/clients/1.png",  tags: ["Content", "Shoptet", "Kód"] },
  { name: "Dellinger",        logo: "/clients/2.png",  tags: ["Shoptet", "Mailing", "Kód"] },
  { name: "Voodoo Cycles",    logo: "/clients/3.png",  tags: ["Shoptet", "PPC"] },
  { name: "Kouzelný Obchůdek",logo: "/clients/4.png",  tags: ["PPC"] },
  { name: "Art Villas",       logo: "/clients/5.png",  tags: ["Content"] },
  { name: "Polep AUT",        logo: "/clients/6.png",  tags: ["Content", "PPC"] },
  { name: "VESTA",            logo: "/clients/7.png",  tags: ["PPC"] },
  { name: "Expan Migua",      logo: "/clients/8.png",  tags: ["Shoptet", "Kód"] },
  { name: "Weco Travel",      logo: "/clients/9.png",  tags: ["Content", "PPC"] },
  { name: "Hustý Stavby",     logo: "/clients/10.png", tags: ["PPC"] },
  { name: "Contraband Zone",  logo: "/clients/11.png", tags: ["PPC"] },
  { name: "Garden Spirit",    logo: "/clients/12.png", tags: ["PPC"] },
];


export function Portfolio() {
  return (
    <section id="portfolio" className="py-24" style={{ backgroundColor: "var(--background-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade inView delay={0.1}>
          <p className="text-[#3b82f6] text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vybrané projekty</h2>
          <p className="text-muted-foreground max-w-xl mb-16 text-base">
            Shoptet projekty a e-shopy, které mám za sebou. 100+ klientů v historii správy PPC.
          </p>
        </BlurFade>
      </div>

      <BlurFade inView delay={0.2}>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:35s] [--gap:1.5rem]">
            {projects.map((project) => (
              <div
                key={project.name}
                className="relative flex items-center justify-center rounded-xl bg-white/60 w-44 h-44 sm:w-48 sm:h-48 hover:bg-white transition-all duration-300 group"
              >
                {/* Tags */}
                <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${tagColors[tag]} text-[9px] font-semibold px-1.5 py-0.5 rounded leading-tight`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={120}
                  height={120}
                  className="w-28 h-28 object-contain"
                />
              </div>
            ))}
          </Marquee>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background-alt)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background-alt)] to-transparent" />
        </div>
      </BlurFade>
    </section>
  );
}
