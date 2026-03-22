import type { Metadata } from "next";
import { ServiceLP } from "@/components/ServiceLP";

export const metadata: Metadata = {
  title: "Shoptet Partner — Správa a úpravy e-shopu | RICH_MARKETING",
  description:
    "Certifikovaný Shoptet Partner. Hloubková znalost platformy, úpravy šablon, napojení doplňků, tracking a kompletní marketingová podpora pro váš Shoptet.",
  robots: { index: true, follow: true },
};

export default function ShoptetPartner() {
  return (
    <ServiceLP
      badge="E-commerce — Shoptet"
      badgeColor="#f95738"
      headline="Váš Shoptet v rukou certifikovaného partnera"
      highlightedWord="certifikovaného partnera"
      description="Hloubková znalost Shoptetu od šablon přes doplňky až po tracking. Nepotřebujete agenturu — potřebujete jednoho člověka, který tomu rozumí celkově."
      benefits={[
        "Certifikovaný Shoptet Partner",
        "Úpravy šablon přes HTML/CSS",
        "Napojování doplňků a integrací",
        "Nastavení trackingu (GA4, GTM, konverze)",
        "XML feedy pro Heureka, Zboží.cz a další",
        "Propojení s PPC kampaněmi pro maximální výkon",
      ]}
      detailHeadline="Co pro váš Shoptet udělám"
      detailText="Nestavím Shoptety na míru od nuly — ale pokud máte běžící e-shop a potřebujete ho dotáhnout, optimalizovat a napojit na marketing, jsem ten správný člověk."
      bulletPoints={[
        {
          title: "Audit e-shopu",
          text: "Projdu váš Shoptet od UX přes rychlost po konverzní cestu a tracking.",
        },
        {
          title: "Technické úpravy",
          text: "HTML/CSS úpravy šablon, vlastní kódy, napojení doplňků.",
        },
        {
          title: "Marketing a feedy",
          text: "Nastavení XML feedů, propojení s porovnávači a PPC kampaněmi.",
        },
        {
          title: "Průběžná podpora",
          text: "Nejsem jednorázový dodavatel — jsem váš dlouhodobý marketing partner.",
        },
      ]}
    />
  );
}
