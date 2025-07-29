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
  title: "Juris Caba", // Título actualizado
  description: "Landing page for Juris Caba",
  generator: "v0.dev",
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
