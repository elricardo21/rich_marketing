"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/95 dark:bg-background/90" />
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <BlurFade delay={0.2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6 text-foreground text-balance">
              Kde se marketing a technologie potkávají
              s <span className="text-[#f95738]">člověčinou.</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Komplexní vedení v online světě srozumitelně a bez omáčky.
              PPC, Shoptet, AI automatizace — vše pod jednou střechou, bez zbytečných mezičlánků.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ShimmerButton
                onClick={() =>
                  document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Začněme spolupráci →
              </ShimmerButton>
              <button
                onClick={() =>
                  document.querySelector("#sluzby")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-300"
              >
                Co nabízím
              </button>
            </div>
          </BlurFade>
        </div>

        {/* Photo — hidden on mobile */}
        <BlurFade delay={0.3} className="flex-shrink-0 hidden lg:block">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-[#3b82f6]/20">
            <Image
              src="/hero-photo-color.jpg"
              alt="Richard Stočes"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </BlurFade>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  );
}
