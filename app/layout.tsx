import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

// Configurar la fuente Roboto
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Juris Caba | Abogados Expertos en Civil, Penal y Laboral en CABA",
  description:
    "Asesoramiento legal experto en Buenos Aires. Especialistas en Derecho Civil, Penal, Laboral, Familiar e Inmobiliario. Consulta sin compromiso.",
  keywords: [
    "abogados Buenos Aires",
    "estudio jurídico CABA",
    "derecho civil",
    "derecho penal",
    "derecho laboral",
    "abogado de familia",
    "derecho inmobiliario",
    "asesoramiento legal",
    "divorcio Buenos Aires",
    "despidos laborales",
    "delitos penales",
    "contratos civiles",
    "compraventa de inmuebles",
  ],
  authors: [{ name: "Juris Caba" }],
  creator: "Juris Caba",
  publisher: "Juris Caba",
  openGraph: {
    title: "Juris Caba | Abogados Expertos en Civil, Penal y Laboral en CABA",
    description:
      "Asesoramiento legal experto en Buenos Aires. Especialistas en Derecho Civil, Penal, Laboral, Familiar e Inmobiliario. Consulta sin compromiso.",
    url: "https://www.juriscaba.com",
    siteName: "Juris Caba",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juris Caba - Abogados Expertos en Buenos Aires",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juris Caba | Abogados Expertos en Civil, Penal y Laboral en CABA",
    description:
      "Abogados en Buenos Aires para casos civiles, penales, laborales y familiares. Defendemos tus derechos con experiencia y compromiso.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.juriscaba.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-86PKX1Z6YR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-86PKX1Z6YR');
            `,
          }}
        />

        {/* Schema.org Structured Data para Abogados — ¡Con tus datos reales! */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Attorney",
              "name": "Juris Caba",
              "image": "https://www.juriscaba.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ciudad Autónoma de Buenos Aires",
                "addressRegion": "CABA",
                "addressCountry": "AR"
              },
              "telephone": "+5191161179711",
              "url": "https://www.juriscaba.com",
              "description": "Estudio jurídico en Buenos Aires especializado en derecho civil, penal, laboral, familiar e inmobiliario. Asesoramiento legal con enfoque personalizado.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/juriscaba/",
                "https://www.linkedin.com/feed/"
              ]
            })
          }}
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
