import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "Kompletní správa online marketingu | RICH_MARKETING",
  description:
    "Celý online marketing pod jednou střechou — PPC, e-commerce, tracking, AI, Shoptet. Jeden člověk místo celé agentury, bez zbytečných mezičlánků.",
  robots: { index: true, follow: true },
};

export default function KompletniSprava() {
  return (
    <ServiceLP
      badge="Marketing na klíč"
      badgeColor="#f95738"
      headline="Kompletní marketing v jednom člověku — bez omáčky"
      highlightedWord="bez omáčky"
      description="Nepotřebujete agenturu s pěti lidmi, z nichž každý zná jen svůj kousek. Potřebujete jednoho seniora, který vidí celý obrázek a spojuje věci dohromady."
      benefits={[
        "PPC kampaně — Google Ads, Meta Ads, Sklik",
        "Shoptet správa a technické úpravy",
        "GA4, GTM a konverzní tracking",
        "XML feedy a porovnávače",
        "AI automatizace a moderní workflow",
        "Strategické poradenství a pravidelný reporting",
      ]}
      detailHeadline="Agentura v jednom člověku"
      detailText="Mám za sebou 5+ let v marketingu, vlastní projekty a stovky klientů. Díky tomu vidím věci z pozice podnikatele — neřeším jen prokliky, ale reálný byznys a marži."
      bulletPoints={[
        {
          title: "Jeden kontaktní bod",
          text: "Žádné přeposílání mezi account manažerem a specialistou. Mluvíte přímo se mnou.",
        },
        {
          title: "Holistický pohled",
          text: "PPC, tracking, UX, feedy — vše propojené a konzistentní.",
        },
        {
          title: "Rychlost a flexibilita",
          text: "Bez zbytečné byrokracie a schvalovacích procesů. Řeším věci v řádu hodin.",
        },
        {
          title: "Férové podmínky",
          text: "Transparentní ceník, žádné skryté poplatky, měsíční výpovědní lhůta.",
        },
      ]}
      ctaText="Chci marketing pod jednou střechou"
    />
  );
}
