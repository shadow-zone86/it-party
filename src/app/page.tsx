import { HomeHero } from '@/widgets/home-hero'
import { Projects } from '@/widgets/projects'
import { Clients } from '@/widgets/clients'
import { Analytics } from '@/widgets/analytics'

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
