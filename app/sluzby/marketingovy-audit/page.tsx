import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "Marketingový audit e-shopu | RICH_MARKETING",
  description:
    "Kompletní audit vašeho online marketingu — PPC, tracking, UX, feedy, konkurence. Konkrétní doporučení a priority, ne obecné fráze.",
  robots: { index: true, follow: true },
};

export default function MarketingovyAudit() {
  return (
    <ServiceLP
      badge="Audit"
      badgeColor="#f95738"
      headline="Marketingový audit, který odhalí reálné problémy"
      highlightedWord="reálné problémy"
      description="Žádný 50stránkový dokument plný obecností. Dostanete konkrétní seznam problémů seřazený podle priority — a jasný plán, co s tím dělat."
      benefits={[
        "Audit PPC kampaní (Google Ads, Meta, Sklik)",
        "Kontrola trackingu a měření konverzí",
        "Analýza UX a konverzní cesty e-shopu",
        "Audit XML feedů a porovnávačů",
        "Konkurenční analýza v placených kanálech",
        "Prioritizovaný akční plán s konkrétními kroky",
      ]}
      detailHeadline="Co audit zahrnuje"
      detailText="Projdu váš marketing od A do Z očima člověka, který dělá PPC, tracking i e-commerce denně. Neřeším teorii — hledám konkrétní díry, kde unikají peníze nebo příležitosti."
      bulletPoints={[
        {
          title: "PPC účty",
          text: "Struktura, cílení, kvalita reklam, negativní KW, plýtvání rozpočtem.",
        },
        {
          title: "Tracking",
          text: "GA4, GTM, konverze — měříte správně? Nemáte duplicity nebo díry?",
        },
        {
          title: "E-shop a UX",
          text: "Konverzní cesta, rychlost, mobilní verze, produktové stránky.",
        },
        {
          title: "Akční plán",
          text: "Seřazený seznam doporučení s odhadem dopadu. Žádné obecnosti.",
        },
      ]}
      ctaText="Chci audit svého marketingu"
    />
  );
}
