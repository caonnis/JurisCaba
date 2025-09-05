import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google" // Importar Roboto
import "./globals.css"

// Configurar la fuente Roboto
const roboto = Roboto({
  weight: ["400", "700"], // Puedes ajustar los pesos según necesites
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Juris Caba - Abogados en Buenos Aires | Defensa Legal Integral", // Título actualizado y optimizado para SEO
  description:
    "Estudio jurídico en CABA especializado en Derecho Civil, Penal, Laboral, Comercial, Familia e Inmobiliario. Asesoramiento legal integral y defensa de tus derechos en la Ciudad Autónoma de Buenos Aires.", // Descripción detallada y optimizada
  keywords:
    "abogados, derecho, legal, CABA, Buenos Aires, civil, penal, laboral, comercial, familia, inmobiliario, asesoramiento legal, estudio jurídico, defensa de derechos", // Palabras clave relevantes
  authors: [{ name: "Juris Caba" }],
  creator: "Juris Caba",
  publisher: "Juris Caba",
  openGraph: {
    title: "Juris Caba - Abogados en Buenos Aires | Defensa Legal Integral",
    description:
      "Estudio jurídico en CABA especializado en Derecho Civil, Penal, Laboral, Comercial, Familia e Inmobiliario. Asesoramiento legal integral y defensa de tus derechos en la Ciudad Autónoma de Buenos Aires.",
    url: "https://www.juriscaba.com", // Asegúrate de que esta URL sea la de tu sitio web
    siteName: "Juris Caba",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Imagen para compartir en redes sociales
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
    images: ["/placeholder.svg?height=675&width=1200"], // Imagen para Twitter
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
  // Add other relevant metadata as needed
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
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
