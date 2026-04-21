import type { Metadata } from "next";
import { Bodoni_Moda, Instrument_Serif, Outfit } from "next/font/google";
import { site } from "@/content/global/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ToolsDock } from "@/components/ui/ToolsDock";
import { JsonLd } from "@/components/ui/JsonLd";
import { medicalSpaSchema } from "@/lib/schema";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.shortName }],
  keywords: ["medspa Chicago", "Chicago medspa", "Edgebrook", "Botox", "facials", "massage"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.shortName,
    title: site.name,
    description: site.description,
    images: ["/images/og/home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/og/home.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${instrument.variable} ${outfit.variable}`}
    >
      <body className="bg-essence-black text-essence-white-off antialiased">
        <SmoothScroll />
        <TopBar />
        <Header />
        <main className="relative z-0">{children}</main>
        <ToolsDock />
        <Footer />
        <JsonLd data={medicalSpaSchema()} />
      </body>
    </html>
  );
}
