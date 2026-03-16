"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Mail, Phone, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <BlurFade inView delay={0.1}>
          <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#3b82f6]/30">
            <Image
              src="/hero-photo-color.jpg"
              alt="Richard – RICH_MARKETING"
              fill
              className="object-cover object-top"
            />
          </div>
          <p className="text-[#f95738] text-sm tracking-widest uppercase mb-3">Kontakt</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Richard Stočes
          </h2>
          <p className="text-muted-foreground text-sm mb-6">RICH_MARKETING</p>
          <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Pokud hledáte seniorního markeťáka, který mluví normálním jazykem,
            dává věci do kontextu a spojuje je dohromady — ozvěte se.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:richard@richmarketing.cz" className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border hover:border-[#3b82f6]/50 transition-all duration-300">
              <Mail className="h-5 w-5 text-[#3b82f6]" />
              <span className="text-sm font-medium group-hover:text-[#3b82f6] transition-colors">
                richard@richmarketing.cz
              </span>
            </a>
            <a href="tel:+420777443252" className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border hover:border-[#f95738]/50 transition-all duration-300">
              <Phone className="h-5 w-5 text-[#f95738]" />
              <span className="text-sm font-medium group-hover:text-[#f95738] transition-colors">
                +420 777 443 252
              </span>
            </a>
            <a href="https://www.linkedin.com/in/richardstoces/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border hover:border-[#3b82f6]/50 transition-all duration-300">
              <Linkedin className="h-5 w-5 text-[#3b82f6]" />
              <span className="text-sm font-medium group-hover:text-[#3b82f6] transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
