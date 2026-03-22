"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Linkedin, Mail, Phone } from "lucide-react";

interface ServiceLPProps {
  badge: string;
  badgeColor?: string;
  headline: string;
  highlightedWord: string;
  description: string;
  benefits: string[];
  detailHeadline: string;
  detailText: string;
  bulletPoints: { title: string; text: string }[];
  ctaText?: string;
}

export function ServiceLP({
  badge,
  badgeColor = "#3b82f6",
  headline,
  highlightedWord,
  description,
  benefits,
  detailHeadline,
  detailText,
  bulletPoints,
  ctaText = "Chci nezávaznou konzultaci",
}: ServiceLPProps) {
  const headlineParts = headline.split(highlightedWord);

  return (
    <>
      {/* Navbar — simplified for LP */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            RICH_MARKETING
          </Link>
          <a
            href="mailto:richard@richmarketing.cz"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-[#f95738] hover:bg-[#f95738]/90 text-white transition-colors"
          >
            Kontakt
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

          <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
            <BlurFade delay={0.1}>
              <Badge
                variant="outline"
                style={{ borderColor: `${badgeColor}50`, color: badgeColor }}
                className="text-xs mb-6"
              >
                {badge}
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6 text-foreground text-balance">
                {headlineParts[0]}
                <span className="text-[#f95738]">{highlightedWord}</span>
                {headlineParts[1] || ""}
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                {description}
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex justify-center">
                <ShimmerButton
                  onClick={() =>
                    document.querySelector("#lp-kontakt")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {ctaText} →
                </ShimmerButton>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20" style={{ backgroundColor: "var(--background-alt)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <BlurFade inView delay={0.1}>
              <p className="text-[#f95738] text-sm tracking-widest uppercase mb-3">Proč já</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-10">
                Co dostanete
              </h2>
            </BlurFade>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <BlurFade key={benefit} inView delay={0.1 + i * 0.05}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Detail */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <BlurFade inView delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">{detailHeadline}</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-2xl">
                {detailText}
              </p>
            </BlurFade>

            <div className="grid sm:grid-cols-2 gap-6">
              {bulletPoints.map((point, i) => (
                <BlurFade key={point.title} inView delay={0.1 + i * 0.08}>
                  <Card className="h-full border-border/50 bg-black/40">
                    <CardContent className="pt-6">
                      <p className="text-[#3b82f6] font-semibold mb-2">{point.title}</p>
                      <p className="text-sm text-muted-foreground">{point.text}</p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-12" style={{ backgroundColor: "var(--background-alt)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#3b82f6]">100+</p>
                <p className="text-xs text-muted-foreground mt-1">klientů v historii</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#3b82f6]">10+ let</p>
                <p className="text-xs text-muted-foreground mt-1">praxe v marketingu</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#3b82f6]">1 člověk</p>
                <p className="text-xs text-muted-foreground mt-1">= celá agentura</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="lp-kontakt" className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <BlurFade inView delay={0.1}>
              <p className="text-[#f95738] text-sm tracking-widest uppercase mb-3">Kontakt</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pojďme to probrat</h2>
              <p className="text-muted-foreground text-base mb-10 max-w-xl mx-auto">
                Ozvěte se a domluvíme nezávaznou konzultaci. Žádné prázdné fráze — řekneme si, jestli vám můžu pomoct.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:richard@richmarketing.cz"
                  className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border hover:border-[#3b82f6]/50 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-[#3b82f6]" />
                  <span className="text-sm font-medium group-hover:text-[#3b82f6] transition-colors">
                    richard@richmarketing.cz
                  </span>
                </a>
                <a
                  href="tel:+420777443252"
                  className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border hover:border-[#f95738]/50 transition-all duration-300"
                >
                  <Phone className="h-5 w-5 text-[#f95738]" />
                  <span className="text-sm font-medium group-hover:text-[#f95738] transition-colors">
                    +420 777 443 252
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/richardstoces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border hover:border-[#3b82f6]/50 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-[#3b82f6]" />
                  <span className="text-sm font-medium group-hover:text-[#3b82f6] transition-colors">
                    LinkedIn
                  </span>
                </a>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10" style={{ backgroundColor: "var(--background-alt)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              RICH_MARKETING
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-muted-foreground">
              <p>IČO: 07452373</p>
              <span className="hidden sm:inline">·</span>
              <p>Nejsem plátce DPH</p>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Richard Stočes</p>
          </div>
        </div>
      </footer>
    </>
  );
}
