"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    number: "01",
    title: "Obchod & Akvizice",
    desc: "5 let v přímém prodeji, 10 000+ hovorů. Rozumím tomu, co potřebujete — protože jsem na vaší straně stál.",
    color: "#f95738",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "PPC & Tech Knowhow",
    desc: "Google Ads, Sklik, Shoptet, tracking, kódování. Technická stránka marketingu bez externích dodavatelů.",
    color: "#3b82f6",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Vlastní projekty",
    desc: "Zkušenosti z vlastních e-shopů a projektů. Vím, co funguje v praxi — ne jen v teorii.",
    color: "#f95738",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Agentura v jedné osobě",
    desc: "Vše pod jednou střechou — strategie, exekuce, AI automatizace. Bez zbytečných mezičlánků a omáčky.",
    color: "#3b82f6",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <section id="o-mne" className="py-24" style={{ backgroundColor: "var(--background-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade inView delay={0.1}>
          <p className="text-[#f95738] text-sm tracking-widest uppercase mb-3">Moje cesta</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Švýcarský nůž pro e-commerce
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 text-base leading-relaxed">
            Jsem kompletní agentura v jednom člověku. Grafika, nastavení, tracking, PPC, Shoptet —
            a hlavně přidaná hodnota je v normálním jednání. Vidím věci i z pozice klienta
            díky vlastním projektům.
          </p>
        </BlurFade>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-[#f95738]/30 via-[#3b82f6]/30 to-[#f95738]/30" />

          <div className="grid md:grid-cols-4 gap-10 md:gap-5">
            {steps.map((step, i) => (
              <BlurFade key={step.number} inView delay={0.15 + i * 0.12}>
                <div className="relative flex flex-col items-center text-center group">
                  <div
                    className="relative z-10 w-24 h-24 rounded-2xl bg-black/40 border flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ borderColor: `${step.color}30` }}
                  >
                    <div style={{ color: step.color }}>{step.icon}</div>
                  </div>

                  <span
                    className="text-xs tracking-widest font-bold mb-2"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>

                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>

                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:flex absolute top-12 -right-2.5 translate-x-1/2 -translate-y-1/2 z-20"
                      style={{ color: `${step.color}60` }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  {i < steps.length - 1 && (
                    <div
                      className="md:hidden flex justify-center mt-6"
                      style={{ color: `${step.color}60` }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="m5 12 7 7 7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Punchline */}
        <BlurFade inView delay={0.65}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#f95738]/40 bg-black/40 px-6 py-3 pulse-glow">
              <span className="text-[#f95738] text-lg font-bold">=</span>
              <span className="text-sm sm:text-base font-medium">
                Vaše výhoda — kompletní agentura bez mezičlánků
              </span>
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
