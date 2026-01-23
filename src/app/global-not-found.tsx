import type { Metadata } from 'next'
import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import {
  OrganizationStructuredData,
  WebSiteStructuredData,
} from '@/shared/lib/structured-data'
import { NotFoundContent } from '@/shared/ui/not-found-content'
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
          <NotFoundContent />
        </main>
      </body>
    </html>
  )
}
