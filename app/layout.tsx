import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oriontech.com.br"),
  title: {
    default: "Orion Tech — Sistemas sob medida e documentos profissionais",
    template: "%s | Orion Tech",
  },
  description:
    "A Orion Tech desenvolve sistemas web sob medida, automações e integrações, além de currículos, planilhas e documentos profissionais bem-feitos. Tecnologia, soluções e inovação.",
  keywords: [
    "desenvolvimento de sistemas",
    "sistemas web sob medida",
    "automação de processos",
    "currículo profissional",
    "planilhas inteligentes",
    "documentos profissionais",
    "Orion Tech",
  ],
  authors: [{ name: "Orion Tech" }],
  openGraph: {
    title: "Orion Tech — Sistemas sob medida e documentos profissionais",
    description:
      "Tecnologia, soluções e inovação: sistemas web sob medida, automações, integrações e documentos profissionais.",
    url: "https://oriontech.com.br",
    siteName: "Orion Tech",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
// Everithing up to date.
export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-void-900 font-body">{children}</body>
    </html>
  );
}
