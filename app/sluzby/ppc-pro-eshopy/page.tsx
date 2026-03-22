import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "PPC reklama pro e-shopy | RICH_MARKETING",
  description:
    "Specializace na PPC kampaně pro e-shopy. Google Ads, Meta Ads, Shopping kampaně a remarketing — vše zaměřené na objednávky a ROAS.",
  robots: { index: true, follow: true },
};

export default function PpcProEshopy() {
  return (
    <ServiceLP
      badge="E-commerce PPC"
      badgeColor="#3b82f6"
      headline="PPC pro e-shopy zaměřené na objednávky"
      highlightedWord="objednávky"
      description="E-shop potřebuje jiný přístup než služby. Shopping kampaně, feedy, remarketing, dynamické reklamy — to všechno řeším pod jednou střechou s důrazem na ROAS."
      benefits={[
        "Google Shopping a Performance Max kampaně",
        "Meta katalogové a dynamické reklamy",
        "XML feedy optimalizované pro maximální výkon",
        "Remarketing na zákazníky i opuštěné košíky",
        "Propojení s Shoptet, WooCommerce a dalšími",
        "Měření reálného ROAS a marže, ne jen obratu",
      ]}
      detailHeadline="E-commerce je můj domovský terén"
      detailText="Mám za sebou desítky e-shopů od malých po střední. Vím, jak funguje nákupní cyklus, sezónnost, skladové zásoby a jak to všechno propojit s PPC kampaněmi."
      bulletPoints={[
        {
          title: "Audit a strategie",
          text: "Analýza sortimentu, marží a konkurence. Návrh mediálního mixu.",
        },
        {
          title: "Shopping & PMax",
          text: "Optimalizované feedy, správná struktura kampaní, bidding strategie.",
        },
        {
          title: "Remarketing",
          text: "Dynamický remarketing, cross-sell, up-sell — vytěžení existujícího trafficu.",
        },
        {
          title: "Měření a reporting",
          text: "ROAS na úrovni produktů a kategorií. Data, která dávají smysl.",
        },
      ]}
    />
  );
}
