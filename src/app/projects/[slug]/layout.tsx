import type { Metadata } from 'next'
import { PageLoader } from '@/shared/ui/page-loader'
import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import '../../globals.scss'

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: undefined,
    description: undefined,
  }),
}

/**
 * Layout для страниц проектов
 * Не содержит Header и Footer, так как они не нужны для детальных страниц проектов
 * и страниц ошибок
 */
export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  )
}
