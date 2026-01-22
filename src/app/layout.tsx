import type { Metadata } from 'next'
import { PageLoader } from '@/shared/ui/page-loader'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { CookieBanner } from '@/widgets/cookie-banner'
import './globals.scss'

export const metadata: Metadata = {
  title: 'IT Party',
  description: 'IT Party application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
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
