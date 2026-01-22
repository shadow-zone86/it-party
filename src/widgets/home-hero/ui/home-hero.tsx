'use client'

import { useEffect, useRef } from 'react'
import { ScrollAnimation } from '@/shared/ui/scroll-animation'
import styles from './home-hero.module.scss'

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroElement = heroRef.current
    if (!heroElement || !overlayRef.current) return

    const handleMouseEnter = (): void => {
      document.body.style.cursor = 'url(/cursor.svg) 12 12, pointer'
    }

    const handleMouseLeave = (): void => {
      document.body.style.cursor = 'default'
    }

    heroElement.addEventListener('mouseenter', handleMouseEnter)
    heroElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      heroElement.removeEventListener('mouseenter', handleMouseEnter)
      heroElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section ref={heroRef} className={styles.hero}>
      <video
        className={styles.hero__video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/blurry_laptop.mp4" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <div ref={overlayRef} className={styles.hero__overlay} />
      <div className={styles.hero__content}>
        <ScrollAnimation animation="fade-up" delay={0} once={false}>
          <h1 className={styles.hero__title}>Соцсети. Приложения. Web.</h1>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={200} once={false}>
          <h2 className={styles.hero__subtitle}>Мобильная разработка.</h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={400} once={false}>
          <p className={styles.hero__description}>
            Проектируем и дизайним <span className={styles.hero__accent}>со вкусом</span>
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
