import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "AI a marketing — ChatGPT, GEO & AEO | RICH_MARKETING",
  description:
    "Jak využít AI v marketingu a jak se zobrazovat v AI chatbotech jako ChatGPT. Generative Engine Optimization (GEO), Answer Engine Optimization (AEO) a moderní AI-first marketing.",
  robots: { index: true, follow: true },
};

export default function AiAMarketing() {
  return (
    <ServiceLP
      badge="AI & GEO/AEO"
      badgeColor="#3b82f6"
      headline="Buďte vidět tam, kde lidé hledají — i v AI chatbotech"
      highlightedWord="i v AI chatbotech"
      description="Lidé už nehledají jen na Googlu. Ptají se ChatGPT, Claude, Perplexity. Pokud tam váš brand chybí, přicházíte o zákazníky. Pomohu vám se zobrazovat v AI odpovědích a zároveň využít AI pro efektivnější marketing."
      benefits={[
        "GEO — Generative Engine Optimization pro AI vyhledávače",
        "AEO — Answer Engine Optimization pro chatboty a AI asistenty",
        "Optimalizace obsahu pro zobrazení v ChatGPT, Perplexity, Claude",
        "Structured data a schema markup pro AI crawlery",
        "AI-first content strategie pro váš brand",
        "Využití ChatGPT a AI nástrojů ve vašem marketingu",
      ]}
      detailHeadline="Marketing se mění — AI je nový vyhledávač"
      detailText="Stále více lidí se ptá AI chatbotů místo Googlu. GEO a AEO je nová disciplína — optimalizace pro AI odpovědi. Jde o to, aby váš brand byl součástí odpovědí, které AI generuje. A zároveň můžete AI využít jako nástroj pro efektivnější marketing."
      bulletPoints={[
        {
          title: "GEO — Generative Engine Optimization",
          text: "Optimalizace webu a obsahu tak, aby AI modely váš brand znaly a doporučovaly.",
        },
        {
          title: "AEO — Answer Engine Optimization",
          text: "Strukturovaná data, FAQ, autoritativní obsah — vše co AI potřebuje k citaci.",
        },
        {
          title: "AI v marketingu",
          text: "ChatGPT pro tvorbu obsahu, analýzu dat, automatizaci a personalizaci kampaní.",
        },
        {
          title: "Strategie a implementace",
          text: "Kompletní plán jak AI integrovat do vašeho marketingového workflow.",
        },
      ]}
      ctaText="Chci být vidět i v AI"
    />
  );
}
