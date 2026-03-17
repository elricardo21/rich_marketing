"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Performance Marketing",
    badge: "PPC",
    color: "#3b82f6",
    items: [
      "Google Ads — kompletní správa na seniorní úrovni",
      "Meta Ads — kampaně zaměřené na výkon",
      "Sklik — český trh",
      "Zaměření na ROI a reálnou návratnost",
    ],
  },
  {
    title: "Shoptet Expertíza",
    badge: "E-commerce",
    color: "#f95738",
    items: [
      "Hloubková znalost platformy",
      "Úpravy šablon přes HTML/CSS",
      "Napojování doplňků a integrací",
      "Certifikovaný Shoptet Partner",
    ],
  },
  {
    title: "AI & Automatizace",
    badge: "AI-Native",
    color: "#3b82f6",
    items: [
      "Implementace AI nástrojů do procesů",
      "Tvorba landing pages přes AI",
      "Vývoj automatizačních skriptů",
      "Vibecoding — rychlé technické řešení",
    ],
  },
  {
    title: "Analytika & Tracking",
    badge: "Data",
    color: "#f95738",
    items: [
      "GA4 + GTM implementace",
      "Search Console",
      "Práce s XML feedy",
      "Čistá data pro správná rozhodnutí",
    ],
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-24" style={{ backgroundColor: "var(--background-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade inView delay={0.1}>
          <p className="text-[#f95738] text-sm tracking-widest uppercase mb-3">Služby</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Co dělám</h2>
          <p className="text-muted-foreground max-w-xl mb-16 text-base">
            Kompletní spektrum digitálního marketingu pod jednou střechou.
          </p>
        </BlurFade>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <BlurFade key={service.title} inView delay={0.15 + i * 0.1}>
              <Card className="h-full border-border/50 bg-black/40 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      style={{ borderColor: `${service.color}50`, color: service.color }}
                      className="text-xs"
                    >
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#3b82f6] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
