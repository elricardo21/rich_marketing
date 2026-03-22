import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "Správa Meta Ads (Facebook & Instagram) | RICH_MARKETING",
  description:
    "Profesionální správa Facebook a Instagram reklamy. Kampaně zaměřené na výkon, konverze a reálné výsledky pro e-shopy i služby.",
  robots: { index: true, follow: true },
};

export default function SpravaMetaAds() {
  return (
    <ServiceLP
      badge="PPC — Meta Ads"
      badgeColor="#3b82f6"
      headline="Meta Ads kampaně, které přináší reálné objednávky"
      highlightedWord="reálné objednávky"
      description="Facebook a Instagram reklama zaměřená na výkon. Žádné boosted posty — profesionální kampaně s jasnou strategií, cílením a měřením výsledků."
      benefits={[
        "Správa přes Meta Business Manager jako Partner",
        "Kampaně zaměřené na konverze a ROAS",
        "Remarketing, lookalike audiences, katalogové kampaně",
        "Kreativy a copy optimalizované na výkon",
        "Propojení s produktovým katalogem e-shopu",
        "A/B testování a průběžná optimalizace",
      ]}
      detailHeadline="Proč Meta Ads se mnou"
      detailText="Meta Ads nejsou jen o hezké grafice — je to o správné kombinaci cílení, kreativy a nabídky. Díky zkušenosti s desítkami e-shopů vím, co funguje a co je jen pálení rozpočtu."
      bulletPoints={[
        {
          title: "Strategie a plán",
          text: "Analýza cílové skupiny, návrh funnelu a komunikační strategie.",
        },
        {
          title: "Profesionální setup",
          text: "Pixel, Conversions API, katalog, správné event tracking.",
        },
        {
          title: "Kreativy a copy",
          text: "Reklamy, které zastavují scrollování. Testování formátů a sdělení.",
        },
        {
          title: "Optimalizace a škálování",
          text: "Data-driven rozhodování, škálování toho co funguje, vypínání toho co ne.",
        },
      ]}
    />
  );
}
