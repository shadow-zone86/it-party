'use client'

import { useEffect } from 'react'
import {
  OrganizationStructuredData,
  WebSiteStructuredData,
} from '@/shared/lib/structured-data'
import { ErrorContent } from '@/shared/ui/error-content'
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
          <ErrorContent reset={reset} />
        </main>
      </body>
    </html>
  )
}
