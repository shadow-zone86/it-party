'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './cookie-banner.module.scss'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Image
            src="/cookie.svg"
            alt="Cookie"
            width={40}
            height={40}
            className={styles.icon}
          />
          <h3 className={styles.title}>Cookies</h3>
        </div>

        <p className={styles.text}>
          Продолжая работу с сайтом, вы соглашаетесь
          <br />
          на использование cookies
        </p>

        <button
          className={styles.button}
          onClick={() => setIsVisible(false)}
          type="button"
        >
          Окей
        </button>

        <p className={styles.disclaimer}>
          Нажимая кнопку «Окей» я соглашаюсь на обработку своих персональных
          данных по условиям{' '}
          <Link href="/privacy" className={styles.link}>
            Политики конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  )
}
