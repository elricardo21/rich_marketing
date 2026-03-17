"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight, ShoppingBag, Megaphone, BarChart3 } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Badge } from "@/components/ui/badge";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  url: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  description: string;
  situation: string;
  tasks: string[];
  result: string;
  stat: { value: number; suffix: string; label: string };
  gridClass: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "pmn-nerez",
    title: "Kompletní migrace na Shoptet",
    client: "PMN Nerez",
    url: "https://www.pmn-nerez.cz/",
    badge: "Shoptet",
    badgeColor: "#f95738",
    icon: <ShoppingBag className="w-5 h-5" />,
    description: "E-shop s nerezovým sortimentem a B2B prodejem.",
    situation: "E-shop běžel na zastaralém řešení, které brzdilo růst. Nepřehledná správa produktů, žádné B2B ceníky, ruční práce všude.",
    tasks: [
      "Kompletní migrace na Shoptet — produkty, kategorie, SEO, obsah",
      "Nastavení B2B cenových skupin a rozšíření",
      "Custom úpravy kódu šablony",
      "Napojení ERP systému",
      "Příprava a správa XML feedů",
    ],
    result: "Funkční, moderní e-shop na Shoptetu — s čistou strukturou, automatizovanými procesy a napojením na interní systémy.",
    stat: { value: 100, suffix: "%", label: "migrace z Presty na Shoptet" },
    gridClass: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    slug: "artvillas",
    title: "Strategie pro globální brand",
    client: "ArtVillas",
    url: "https://artvillas.com/",
    badge: "Strategie & Content",
    badgeColor: "#3b82f6",
    icon: <Megaphone className="w-5 h-5" />,
    description: "Prémiový travel brand s luxusními vilami v zahraničí.",
    situation: "Chyběla ucelená marketingová strategie a konzistentní obsahová linka. Sociální sítě bez jasného směru.",
    tasks: [
      "Návrh celkové marketingové strategie",
      "Řízení obsahu pro sociální sítě",
      "Instagram jako hlavní kanál",
      "Úpravy webu",
      "Koordinace v rámci globálního projektu",
    ],
    result: "Prémiový brand s živou komunitou 100k+ na Instagramu, jasnou vizuální identitou na sítích a konzistentní obsahovou strategií.",
    stat: { value: 100000, suffix: "+", label: "sledujících na Instagramu" },
    gridClass: "col-span-1",
  },
  {
    slug: "kouzelny-obchudek",
    title: "PPC škálování z tisíců na miliony",
    client: "Kouzelný Obchůdek",
    url: "https://www.kouzelnyobchudek.cz/",
    badge: "PPC",
    badgeColor: "#3b82f6",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "E-shop na Shoptetu.",
    situation: "E-shop s obratem v řádu tisíců korun měsíčně. PPC kampaně v základním nastavení, bez škálovací strategie.",
    tasks: [
      "Kompletní správa PPC kampaní",
      "Postupné škálování rozpočtů",
      "Optimalizace podle reálných dat",
    ],
    result: "Z pár tisíc měsíčně na obraty přes 1 000 000 Kč. Stabilní růst postavený na datech a systematické práci s PPC.",
    stat: { value: 1000000, suffix: " Kč", label: "měsíční obrat" },
    gridClass: "col-span-1",
  },
];

function CaseStudyDetail({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0f172a] p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <Badge
              variant="outline"
              style={{ borderColor: `${study.badgeColor}50`, color: study.badgeColor }}
              className="text-xs mb-3"
            >
              {study.badge}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold">{study.client}</h3>
            <p className="text-muted-foreground text-sm mt-1">{study.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stat */}
        <div className="rounded-xl bg-black/40 border border-white/10 p-6 mb-6 text-center">
          <div className="text-3xl sm:text-4xl font-bold" style={{ color: study.badgeColor }}>
            <NumberTicker value={study.stat.value} suffix={study.stat.suffix} delay={0.3} />
          </div>
          <p className="text-muted-foreground text-sm mt-1">{study.stat.label}</p>
        </div>

        {/* Výchozí stav */}
        <div className="mb-6">
          <h4 className="text-sm tracking-widest uppercase mb-2" style={{ color: study.badgeColor }}>
            Výchozí stav
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{study.situation}</p>
        </div>

        {/* Co jsem řešil */}
        <div className="mb-6">
          <h4 className="text-sm tracking-widest uppercase mb-3" style={{ color: study.badgeColor }}>
            Co jsem řešil
          </h4>
          <ul className="space-y-2">
            {study.tasks.map((task) => (
              <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span style={{ color: study.badgeColor }} className="mt-0.5 flex-shrink-0">▸</span>
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Výsledek */}
        <div className="mb-6">
          <h4 className="text-sm tracking-widest uppercase mb-2" style={{ color: study.badgeColor }}>
            Výsledek
          </h4>
          <p className="text-sm leading-relaxed">{study.result}</p>
        </div>

        {/* Link */}
        <a
          href={study.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
          style={{ color: study.badgeColor }}
        >
          Navštívit web <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </motion.div>
  );
}

export function CaseStudyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <AnimatePresence>
      {open && !selectedStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0f172a] p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[#f95738] text-sm tracking-widest uppercase mb-2">Case Studies</p>
                <h2 className="text-2xl sm:text-3xl font-bold">Jak to vypadá v praxi</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudies.map((study) => (
                <button
                  key={study.slug}
                  onClick={() => setSelectedStudy(study)}
                  className={`${study.gridClass} group relative flex flex-col justify-between overflow-hidden rounded-xl bg-black/40 border border-white/10 p-6 text-left transition-all duration-300 hover:border-white/20 hover:shadow-lg`}
                >
                  {/* Badge + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      style={{ borderColor: `${study.badgeColor}50`, color: study.badgeColor }}
                      className="text-xs"
                    >
                      {study.badge}
                    </Badge>
                    <div style={{ color: study.badgeColor }} className="opacity-60 group-hover:opacity-100 transition-opacity">
                      {study.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">
                      {study.client}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{study.title}</p>
                  </div>

                  {/* Stat preview */}
                  <div className="mb-4 rounded-lg bg-white/5 px-4 py-3">
                    <span className="text-xl font-bold" style={{ color: study.badgeColor }}>
                      {study.stat.value === 1000000
                        ? "1 000 000 Kč"
                        : study.stat.value === 100000
                          ? "100 000+"
                          : study.stat.value.toString()}
                    </span>
                    <span className="text-muted-foreground text-xs ml-2">{study.stat.label}</span>
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
                    style={{ color: study.badgeColor }}
                  >
                    Číst více <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {selectedStudy && (
        <CaseStudyDetail
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </AnimatePresence>
  );
}
