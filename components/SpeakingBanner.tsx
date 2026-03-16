"use client";

import { BlurFade } from "@/components/ui/blur-fade";

export function SpeakingBanner() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade inView delay={0.1}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#f95738] text-sm tracking-widest uppercase mb-3">
                Social proof
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Mohli jste mě vidět
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Přednáška o online marketingu a e-commerce na Vysoké škole
                ekonomie a managementu (VŠEM).
              </p>
            </div>

            {/* Video thumbnail */}
            <a
              href="https://www.youtube.com/watch?v=G-HB8yMReeE"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 group"
            >
              <div className="relative w-56 sm:w-64 aspect-video rounded-lg overflow-hidden border border-border/50 group-hover:border-[#f95738]/50 transition-all duration-300">
                <img
                  src="https://img.youtube.com/vi/G-HB8yMReeE/hqdefault.jpg"
                  alt="Přednáška na VŠEM"
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#f95738] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
