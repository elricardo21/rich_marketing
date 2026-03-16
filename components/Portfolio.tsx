"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "PMN Nerez", url: "https://www.pmn-nerez.cz/", desc: "Shoptet e-shop, nerezové produkty", logo: "/clients/pmn-nerez.png", invert: false },
  { name: "Dellinger", url: "https://www.dellinger.cz/", desc: "Shoptet e-shop, nože a příslušenství", logo: "/clients/dellinger.png", invert: false },
  { name: "Nože Zvostra", url: "https://www.noze-zvostra.cz/", desc: "Shoptet e-shop, prémiové nože", logo: "/clients/noze-zvostra.jpg", invert: false },
  { name: "Hitra", url: "https://www.hitra.cz/", desc: "Shoptet e-shop", logo: "/clients/hitra.png", invert: true },
  { name: "Voodoo Cycles", url: "https://www.voodoocycles.cz/", desc: "Shoptet e-shop, cyklistika", logo: "/clients/voodoo-cycles.png", invert: false },
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
        {projects.map((project, i) => (
          <BlurFade key={project.name} inView delay={0.15 + i * 0.08} className="h-full">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <Card className="h-full border-border/50 bg-black/40 hover:border-[#f95738]/50 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-5 flex flex-col gap-4">
                  <div className="h-10 flex items-center">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={120}
                      height={40}
                      className={`h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity ${project.invert ? "brightness-0 invert" : ""}`}
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-[#f95738] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-xs">{project.desc}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[#f95738] transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </BlurFade>
        ))}

        <BlurFade inView delay={0.55} className="h-full">
          <Card className="h-full border-dashed border-border/50 bg-black/40 flex items-center justify-center">
            <CardContent className="p-5 text-center text-muted-foreground text-sm">
              <div className="text-2xl mb-2">+</div>
              <p>a další...</p>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
      </div>
    </section>
  );
}
