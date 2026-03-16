"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Úvodní konzultace",
    desc: "Zdarma si probereme vaši situaci, cíle a očekávání. Bez závazků zjistíme, jestli vám můžu reálně pomoct.",
    color: "#f95738",
  },
  {
    number: "02",
    title: "Návrh řešení",
    desc: "Připravím konkrétní plán — co, jak a proč. Srozumitelně, bez buzzwordů. Dostanete jasnou nabídku s cenou.",
    color: "#3b82f6",
  },
  {
    number: "03",
    title: "Realizace & správa",
    desc: "Pustím se do práce. Pravidelný reporting, transparentní komunikace. Vždy víte, za co platíte a co to přináší.",
    color: "#f95738",
  },
];

export function Process() {
  return (
    <section id="jak-to-funguje" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade inView delay={0.1}>
          <p className="text-[#f95738] text-sm tracking-widest uppercase mb-3">Jak to funguje</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Od prvního kontaktu k výsledkům
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 text-base leading-relaxed">
            Žádné složité procesy ani měsíce čekání. Spolupráce se mnou je přímočará — tak, jak to má být.
          </p>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <BlurFade key={step.number} inView delay={0.15 + i * 0.12}>
              <Card className="h-full border-border/50 bg-black/40 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <span
                    className="text-4xl font-bold block mb-4"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
