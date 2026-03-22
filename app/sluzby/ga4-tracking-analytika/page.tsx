import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "GA4, GTM & Tracking pro e-shopy | RICH_MARKETING",
  description:
    "Profesionální nastavení GA4, Google Tag Manageru a konverzního trackingu. Čistá data pro správná rozhodnutí — bez hádání, s přesnými čísly.",
  robots: { index: true, follow: true },
};

export default function Ga4Tracking() {
  return (
    <ServiceLP
      badge="Analytika & Data"
      badgeColor="#f95738"
      headline="Tracking a analytika, na kterou se můžete spolehnout"
      highlightedWord="spolehnout"
      description="Bez správných dat děláte rozhodnutí naslepo. Nastavím vám GA4, GTM a konverzní tracking tak, abyste přesně věděli, co funguje a co ne."
      benefits={[
        "Kompletní GA4 implementace od nuly",
        "Google Tag Manager — tagy, triggery, proměnné",
        "Enhanced e-commerce tracking pro Shoptet",
        "Konverzní tracking pro Google Ads a Meta",
        "Search Console nastavení a propojení",
        "Audit stávajícího trackingu a oprava chyb",
      ]}
      detailHeadline="Proč je tracking základ všeho"
      detailText="Můžete mít nejlepší kampaně na světě — ale pokud nemáte čistá data, nepoznáte co funguje. Tracking je základ, na kterém stojí každé další marketingové rozhodnutí."
      bulletPoints={[
        {
          title: "GA4 Setup",
          text: "Správná konfigurace propertyí, eventů, konverzí a e-commerce trackingu.",
        },
        {
          title: "GTM implementace",
          text: "Čistý kontejner, správná struktura tagů, verzování a debugging.",
        },
        {
          title: "Konverzní měření",
          text: "Propojení s Google Ads, Meta Pixel, Conversions API.",
        },
        {
          title: "Audit a opravy",
          text: "Identifikace duplicit, chybějících eventů a špatně měřených konverzí.",
        },
      ]}
    />
  );
}
