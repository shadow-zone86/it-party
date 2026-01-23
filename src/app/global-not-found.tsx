import Link from 'next/link'
import type { Metadata } from 'next'
import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import {
  OrganizationStructuredData,
  WebSiteStructuredData,
} from '@/shared/lib/structured-data'
import './globals.scss'
import styles from './not-found.module.scss'

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: '404 - Страница не найдена',
    description: 'Запрашиваемая страница не существует',
  }),
}

/**
 * Глобальная страница 404 без header и footer
 * Использует experimental.globalNotFound из next.config.ts
 */
export default function GlobalNotFound() {
  return (
    <html lang="ru">
      <head>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body>
        <main className={styles.notFound}>
          <div className={styles.notFound__content}>
            <h1 className={styles.notFound__title}>404</h1>
            <h2 className={styles.notFound__subtitle}>Страница не найдена</h2>
            <p className={styles.notFound__description}>
              Запрашиваемая страница не существует или была удалена.
            </p>
            <Link href="/" className={styles.notFound__link}>
              Вернуться на главную
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
