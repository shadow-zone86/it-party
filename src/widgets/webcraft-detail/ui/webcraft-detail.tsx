import { WebCraftHeader } from '@/entities/project/ui/webcraft-header'
import { WebCraftHero } from '@/entities/project/ui/webcraft-hero'
import { WebCraftServices } from '@/entities/project/ui/webcraft-services'
import { WebCraftProcess } from '@/entities/project/ui/webcraft-process'
import { WebCraftPortfolio } from '@/entities/project/ui/webcraft-portfolio'
import { WebCraftStats } from '@/entities/project/ui/webcraft-stats'
import { WebCraftContact } from '@/entities/project/ui/webcraft-contact'
import { WebCraftFooter } from '@/entities/project/ui/webcraft-footer'
import { MobileMenu } from '@/features/mobile-menu'
import { WebCraftContactForm } from '@/features/webcraft-contact-form'
import { NAVIGATION_LINKS } from '../config/constants'

/**
 * Виджет детализации проекта WebCraft Studio
 * Объединяет все секции проекта в единый компонент
 */
export function WebCraftDetail() {
  return (
    <>
      <WebCraftHeader menu={<MobileMenu links={NAVIGATION_LINKS} />} />
      <WebCraftHero />
      <WebCraftServices />
      <WebCraftProcess />
      <WebCraftPortfolio />
      <WebCraftStats />
      <WebCraftContact form={<WebCraftContactForm />} />
      <WebCraftFooter />
    </>
  )
}
