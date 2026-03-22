import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "Správa Google Ads | RICH_MARKETING",
  description:
    "Seniorní správa Google Ads kampaní zaměřená na výkon a reálnou návratnost. 100+ klientů, MCC účet, kompletní servis od auditu po optimalizaci.",
  robots: { index: true, follow: true },
};

export default function SpravaGoogleAds() {
  return (
    <ServiceLP
      badge="PPC — Google Ads"
      badgeColor="#3b82f6"
      headline="Správa Google Ads, která řeší výsledky, ne prokliky"
      highlightedWord="výsledky"
      description="Kompletní správa Google Ads kampaní na seniorní úrovni. Zaměřuji se na reálnou návratnost investice — ne na vanity metriky. Od auditu přes nastavení až po průběžnou optimalizaci."
      benefits={[
        "Kompletní správa přes profesionální MCC účet",
        "Zaměření na ROI a reálnou marži, ne prokliky",
        "Search, Shopping, PMax, Display i remarketing",
        "Pravidelný reporting srozumitelnou řečí",
        "Zkušenost s 100+ klienty včetně zahraničních",
        "Propojení s GA4, GTM a konverzním trackingem",
      ]}
      detailHeadline="Jak to funguje"
      detailText="Neřeším jen technické nastavení kampaní — dívám se na celý obchodní kontext. Díky vlastní zkušenosti z obchodu a e-commerce chápu, co znamená reálný prodej, ne jen proklik."
      bulletPoints={[
        {
          title: "Audit stávajících kampaní",
          text: "Kompletní analýza účtu, identifikace plýtvání rozpočtem a nevyužitých příležitostí.",
        },
        {
          title: "Nastavení a struktura",
          text: "Čistá struktura kampaní, správné cílení, relevantní reklamy a rozšíření.",
        },
        {
          title: "Průběžná optimalizace",
          text: "Pravidelné úpravy na základě dat — bidding, negativní KW, A/B testy.",
        },
        {
          title: "Reporting a komunikace",
          text: "Měsíční reporty bez omáčky. Jasná čísla, jasné závěry, jasné kroky.",
        },
      ]}
    />
  );
}
