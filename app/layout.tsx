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
  title: "Juris Caba - Abogados en Buenos Aires | Defensa Legal Integral",
  description:
    "Estudio jurídico en CABA especializado en Derecho Corporativo, Civil, Penal & Laboral. Asesoramiento legal integral y defensa de tus derechos en la Ciudad Autónoma de Buenos Aires.",
  keywords:
    "abogados, derecho, legal, CABA, Buenos Aires, civil, penal, laboral, comercial, familia, inmobiliario, asesoramiento legal, estudio jurídico, defensa de derechos",
  authors: [{ name: "Juris Caba" }],
  creator: "Juris Caba",
  publisher: "Juris Caba",
  openGraph: {
    title: "Juris Caba - Abogados en Buenos Aires | Defensa Legal Integral",
    description:
      "Estudio jurídico en CABA especializado en Derecho Corporativo, Civil, Penal & Laboral. Asesoramiento legal integral y defensa de tus derechos en la Ciudad Autónoma de Buenos Aires.",
    url: "https://www.juriscaba.com",
    siteName: "Juris Caba",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Juris Caba - Abogados en Buenos Aires",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juris Caba - Abogados en Buenos Aires | Defensa Legal Integral",
    description:
      "Estudio jurídico en CABA especializado en Derecho Civil, Penal, Laboral, Comercial, Familia e Inmobiliario. Asesoramiento legal integral y defensa de tus derechos en la Ciudad Autónoma de Buenos Aires.",
    images: ["/placeholder.svg?height=675&width=1200"],
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
