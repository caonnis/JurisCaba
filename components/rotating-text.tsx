"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RotatingTextProps {
  texts: string[]
  duration?: number // Duración en milisegundos para cada texto
  className?: string
}

export function RotatingText({ texts, duration = 3000, className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false) // Controla el desvanecimiento

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true) // Inicia el desvanecimiento (opacity-0)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsFading(false) // Termina el desvanecimiento, inicia la aparición (opacity-100)
      }, 300) // Duración del desvanecimiento (debe coincidir con la duración de la animación CSS)
    }, duration)

    return () => clearInterval(interval)
  }, [texts, duration])

  return (
    <div
      className={cn(
        "inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium overflow-hidden relative h-8",
        className,
      )}
    >
      <span
        className={cn(
          "transition-opacity duration-300", // Aplica la transición de opacidad
          isFading ? "opacity-0" : "opacity-100", // Controla la opacidad directamente
        )}
      >
        {texts[currentIndex]}
      </span>
    </div>
  )
}
