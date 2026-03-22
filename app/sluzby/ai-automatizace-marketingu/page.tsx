import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "AI automatizace marketingu | RICH_MARKETING",
  description:
    "Implementace AI nástrojů do marketingových procesů. Automatizace, rychlejší workflow a technická řešení díky AI — bez nutnosti vlastního vývojáře.",
  robots: { index: true, follow: true },
};

export default function AiAutomatizace() {
  return (
    <ServiceLP
      badge="AI-Native Workflow"
      badgeColor="#3b82f6"
      headline="AI automatizace, která šetří čas i peníze"
      highlightedWord="šetří čas i peníze"
      description="Využívám AI nástroje denně — ne jako buzzword, ale jako reálný pracovní nástroj. Pomohu vám implementovat AI do procesů tak, abyste byli rychlejší a efektivnější."
      benefits={[
        "Implementace AI nástrojů do firemních procesů",
        "Automatizace opakujících se marketingových úkolů",
        "Tvorba obsahu a kreativ s asistencí AI",
        "Vibecoding — rychlé technické řešení bez vývojáře",
        "Vlastní automatizační skripty a workflow",
        "Školení a konzultace pro váš tým",
      ]}
      detailHeadline="Jak AI reálně využívám"
      detailText="AI není magie — je to nástroj, který potřebuje správné zadání a zkušeného člověka. Pracuji s Claude Code, ChatGPT a dalšími nástroji denně a vím, kde mají limity a kde vám ušetří dny práce."
      bulletPoints={[
        {
          title: "Audit procesů",
          text: "Identifikuju, kde AI ušetří nejvíc času — a kde naopak nemá smysl.",
        },
        {
          title: "Implementace",
          text: "Nastavení AI workflow přesně pro vaše potřeby, ne generické řešení.",
        },
        {
          title: "Automatizace",
          text: "Skripty a nástroje, které běží na pozadí a šetří hodiny týdně.",
        },
        {
          title: "Předání a školení",
          text: "Naučím váš tým pracovat s AI tak, aby to zvládali sami.",
        },
      ]}
    />
  );
}
