"use client"

import Link from "next/link"
import Image from "next/image" // Importar el componente Image de Next.js

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/5491161179711" // Usamos el número de WhatsApp del footer
      target="_blank"
      rel="noopener noreferrer"
      // Eliminadas las clases de fondo, padding, forma redondeada y la sombra
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      {/* El icono de WhatsApp */}
      <Image src="/images/whatsapp-icon-new.png" alt="WhatsApp Icon" width={150} height={150} />
    </Link>
  )
}
