'use client'

import { useEffect } from 'react'
import Link from 'next/link'
// Client component, metadata не поддерживается
import {
  OrganizationStructuredData,
  WebSiteStructuredData,
} from '@/shared/lib/structured-data'
import './globals.scss'
import styles from './error.module.scss'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

/**
 * Глобальная страница ошибок без header и footer
 * Используется для критических ошибок приложения
 */
export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Логирование ошибки в консоль или сервис мониторинга
    console.error('Application error:', error)
  }, [error])

  return (
    <html lang="ru">
      <head>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body>
        <main className={styles.error}>
          <div className={styles.error__content}>
            <h1 className={styles.error__title}>500</h1>
            <h2 className={styles.error__subtitle}>Произошла ошибка</h2>
            <p className={styles.error__description}>
              Что-то пошло не так. Пожалуйста, попробуйте обновить страницу или
              вернуться на главную.
            </p>
            <div className={styles.error__actions}>
              <button onClick={reset} className={styles.error__button}>
                Попробовать снова
              </button>
              <Link href="/" className={styles.error__link}>
                Вернуться на главную
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
