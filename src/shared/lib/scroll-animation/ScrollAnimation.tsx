'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from './useScrollAnimation'
import styles from './scroll-animation.module.scss'
import clsx from 'clsx'

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in'
  | 'zoom-in-up'
  | 'slide-up'
  | 'slide-down'

export interface ScrollAnimationProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
  className?: string
}

export function ScrollAnimation({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  rootMargin = '-50px',
  once = true,
  className,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    once,
    delay,
  })

  return (
    <div
      ref={ref}
      className={clsx(
        styles.scrollAnimation,
        styles[`animation-${animation}`],
        isVisible && styles.visible,
        className
      )}
      style={{
        '--animation-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
