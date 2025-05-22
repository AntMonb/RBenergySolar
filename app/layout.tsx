import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RB Energía Solar | Paneles Solares en Montería, Córdoba",
  description:
    "RB Energía Solar es una empresa especializada en instalaciones fotovoltaicas y eléctricas en Montería, Córdoba. Ofrecemos diseño, dimensionamiento, instalación, puesta en marcha y trámites legales para sistemas solares. Expertos en energía renovable en Colombia.",
  keywords: [
    "energía solar Montería",
    "paneles solares Córdoba",
    "instalaciones fotovoltaicas Colombia",
    "diseño de sistemas solares",
    "trámites energía solar Montería",
    "Inversor solar Montería",
    "panel solar en Montería",
    "energía renovable Montería",
    "RB Energía Solar",
    "instalaciones eléctricas Montería",
    "instalaciones solares Córdoba",
    "paneles solares Montería",
    "empresa energía solar Colombia",
    "ingeniería eléctrica Montería",
  ],
  authors: [{ name: "RB Energía Solar", url: "https://r-benergy-solar.vercel.app" }],
  creator: "RB Energía Solar",
  publisher: "RB Energía Solar",
  robots: "index, follow",
  alternates: {
    canonical: "https://r-benergy-solar.vercel.app",
  },
  openGraph: {
    title: "RB Energía Solar | Soluciones Fotovoltaicas en Montería",
    description:
      "Expertos en energía solar en Montería. Instalación de paneles solares, ingeniería eléctrica, trámites legales, y más.",
    url: "https://r-benergy-solar.vercel.app",
    siteName: "RB Energía Solar",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RB Energía Solar | Energía Fotovoltaica en Montería, Córdoba",
    description:
      "Soluciones de energía solar en Montería. Instalaciones, diseños eléctricos, trámites legales y más.",
    creator: "@tucuenta", // Opcional: reemplaza con tu cuenta real
  },
  category: "Energía Renovable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD para datos estructurados de negocio local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RB Energía Solar",
              image: "https://r-benergy-solar.vercel.app/logo.png",
              address: {
                "@type": "230004,
                addressLocality: "Montería",
                addressRegion: "Córdoba",
                addressCountry: "CO",
              },
              url: "https://r-benergy-solar.vercel.app",
              telephone: "+57 302 608 8408",
              description:
                "Instalaciones Fotovoltaicas e Instalaciones Eléctricas basados en NORMA NTC 2050, RETIE Y NORMA INTERNACIONAL , Diseño y dimensionamiento, Puesta en marcha y trámites legales para tu instalación en Montería, Córdoba y por todo nuestro pais Colombia",
              areaServed: "Montería, Córdoba, Colombia",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

