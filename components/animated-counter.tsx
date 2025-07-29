"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  duration: number
  suffix?: string
}

export function AnimatedCounter({ from, to, duration, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let start: number | null = null
    const animate = (currentTime: number) => {
      if (!start) start = currentTime
      const progress = (currentTime - start) / duration

      if (progress < 1) {
        setCount(Math.floor(from + progress * (to - from)))
        requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    requestAnimationFrame(animate)
  }, [from, to, duration])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
