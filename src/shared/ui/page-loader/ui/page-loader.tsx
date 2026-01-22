'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './page-loader.module.scss'
import clsx from 'clsx'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Анимация прогресса
    const spinnerProgress = progressRef.current
    if (!spinnerProgress) return

    let startTime: number | null = null
    let e: boolean = false // флаг загрузки страницы
    const duration = 5000 // 5 секунд
    const from = 0
    const to = 75

    const animate = (currentTime: number): void => {
      if (!startTime) {
        startTime = currentTime
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const width = Math.floor(progress * (to - from) + from)

      spinnerProgress.style.width = width + '%'

      // Если страница загрузилась, сразу 100%
      if (e) {
        spinnerProgress.style.width = '100%'
        return
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)

    // Скрываем спиннер после загрузки страницы
    const handleLoad = (): void => {
      e = true
      if (spinnerProgress) {
        spinnerProgress.style.width = '100%'
      }
      // Увеличиваем задержку для более плавного скрытия
      setTimeout(() => {
        setIsLoading(false)
      }, 600)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Fallback: скрываем через 5 секунд максимум
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timeout)
    }
  }, [])

  if (!isLoading) {
    return null
  }

  return (
    <div
      id="spinner"
      className={clsx(styles.pageLoader, {
        [styles['pageLoader--hidden']]: !isLoading,
      })}
    >
      <div className={styles.loadingLogo}>
        {/* Фоновый логотип (полупрозрачный, серый) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Loading"
          width={187}
          height={52}
          className={styles.logoBg}
        />
        {/* Прогресс-бар с закрашиванием слева направо */}
        <div
          ref={progressRef}
          className={styles.progress}
          style={{ width: '0%' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Loading"
            width={187}
            height={52}
            className={styles.logoFg}
          />
        </div>
      </div>
    </div>
  )
}
