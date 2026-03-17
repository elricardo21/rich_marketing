import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://richmarketing.cz"),
  title: "RICH_MARKETING | Senior Marketing Technologist",
  description:
    "Kde se marketing a technologie potkávají s člověčinou. PPC, Shoptet, AI, marketingová strategie — komplexní vedení v online světě srozumitelně a bez omáčky.",
  keywords: [
    "marketing",
    "PPC",
    "Google Ads",
    "Meta Ads",
    "Sklik",
    "Shoptet",
    "Shoptet Partner",
    "e-commerce",
    "AI",
    "marketingová strategie",
    "online marketing",
    "správa kampaní",
    "XML feedy",
    "case studies",
    "Richard Stočes",
    "RICH_MARKETING",
  ],
  authors: [{ name: "Richard Stočes", url: "https://richmarketing.cz" }],
  creator: "Richard Stočes",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://richmarketing.cz",
    siteName: "RICH_MARKETING",
    title: "RICH_MARKETING | Senior Marketing Technologist",
    description:
      "PPC, Shoptet, AI, marketingová strategie — komplexní vedení v online světě srozumitelně a bez omáčky.",
    images: [
      {
        url: "/hero-photo-color.jpg",
        width: 1200,
        height: 630,
        alt: "Richard Stočes — RICH_MARKETING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RICH_MARKETING | Senior Marketing Technologist",
    description:
      "PPC, Shoptet, AI, marketingová strategie — komplexní vedení v online světě srozumitelně a bez omáčky.",
    images: ["/hero-photo-color.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://richmarketing.cz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "RICH_MARKETING",
              url: "https://richmarketing.cz",
              description:
                "Komplexní vedení v online světě — PPC, Shoptet, AI, marketingová strategie.",
              founder: {
                "@type": "Person",
                name: "Richard Stočes",
                jobTitle: "Senior Marketing Technologist",
                email: "richard@richmarketing.cz",
                telephone: "+420777443252",
                url: "https://www.linkedin.com/in/richardstoces/",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "CZ",
              },
              sameAs: [
                "https://www.linkedin.com/in/richardstoces/",
              ],
              areaServed: {
                "@type": "Country",
                name: "Czech Republic",
              },
              serviceType: [
                "PPC marketing",
                "Google Ads",
                "Shoptet e-commerce",
                "Shoptet Partner",
                "AI",
                "Marketingová strategie",
                "XML feedy",
                "Online marketing",
              ],
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
