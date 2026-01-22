'use client'

import { useEffect, useRef, useState } from 'react'

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    delay = 0,
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Если уже анимировали и once = true, не создаем observer
    if (hasAnimated && once) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true)
                if (once) {
                  setHasAnimated(true)
                }
              }, delay)
            } else {
              setIsVisible(true)
              if (once) {
                setHasAnimated(true)
              }
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, once, delay, hasAnimated])

  return { ref: elementRef, isVisible }
}
