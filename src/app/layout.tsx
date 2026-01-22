import type { Metadata } from 'next'
import { PageLoader } from '@/shared/ui/page-loader'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { CookieBanner } from '@/widgets/cookie-banner'
import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import {
  OrganizationStructuredData,
  WebSiteStructuredData,
} from '@/shared/lib/structured-data'
import './globals.scss'

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: undefined, // Используется дефолтный title из конфига
    description: undefined, // Используется дефолтный description из конфига
  }),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#1a1a1a',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body>
        <PageLoader />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
