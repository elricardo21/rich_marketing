import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "XML feedy a porovnávače cen | RICH_MARKETING",
  description:
    "Správa XML feedů pro Heureka, Zboží.cz, Google Shopping a další porovnávače. Optimalizace feedů pro maximální výkon a viditelnost produktů.",
  robots: { index: true, follow: true },
};

export default function XmlFeedy() {
  return (
    <ServiceLP
      badge="Feedy & Porovnávače"
      badgeColor="#3b82f6"
      headline="XML feedy, které vytěží maximum z porovnávačů"
      highlightedWord="maximum"
      description="Porovnávače cen jsou pro české e-shopy klíčový kanál. Nastavím a optimalizuji vaše feedy tak, aby produkty měly správná data, kategorie a parametry."
      benefits={[
        "XML feedy pro Heureka.cz a Zboží.cz",
        "Google Merchant Center a Shopping feedy",
        "Optimalizace titulků, popisků a parametrů",
        "Správné kategorizace a mapování",
        "Řešení zamítnutých produktů a chyb",
        "Propojení feedů s PPC kampaněmi",
      ]}
      detailHeadline="Proč na feedech záleží"
      detailText="Kvalita feedu přímo ovlivňuje, jestli se vaše produkty zobrazí — a za kolik. Špatný feed = vyšší CPC, méně zobrazení, zamítnuté produkty. Správný feed = více prodejů za méně peněz."
      bulletPoints={[
        {
          title: "Audit feedů",
          text: "Kontrola struktury, chybějících atributů, duplicit a chyb v Merchant Center.",
        },
        {
          title: "Optimalizace",
          text: "Titulky s klíčovými slovy, správné kategorie, kvalitní popisky.",
        },
        {
          title: "Technické řešení",
          text: "Napojení na Shoptet, vlastní transformace, filtrování produktů.",
        },
        {
          title: "Porovnávače",
          text: "Heureka, Zboží.cz, Google Shopping — vše na jednom místě.",
        },
      ]}
    />
  );
}
