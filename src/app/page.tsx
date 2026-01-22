import { HomeHero } from '@/widgets/home-hero'
import { Projects } from '@/widgets/projects'
import { Clients } from '@/widgets/clients'
import { Analytics } from '@/widgets/analytics'
import { generateMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Главная',
  description:
    'IT Party — создаем digital-продукты на базе стратегии, креатива и технологий. Разработка веб-приложений, мобильных решений, UX/UI-дизайн и HR-платформы.',
})

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <Projects />
      <Clients />
      <Analytics />
    </main>
  )
}
