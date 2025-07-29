"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(threshold = 0.1, rootMargin = "0px") {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Opcional: Desconectar el observador una vez que el elemento es visible
          // observer.disconnect();
        } else {
          // Opcional: Si quieres que la animación se repita cada vez que entra en vista
          // setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isInView }
}
