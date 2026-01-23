import { PixelForgeHeader } from '@/entities/project/ui/pixelforge-header'
import { PixelForgeHero } from '@/entities/project/ui/pixelforge-hero'
import { PixelForgeServices } from '@/entities/project/ui/pixelforge-services'
import { PixelForgeAbout } from '@/entities/project/ui/pixelforge-about'
import { PixelForgeContact } from '@/entities/project/ui/pixelforge-contact'
import { PixelForgeFooter } from '@/entities/project/ui/pixelforge-footer'
import { ContactForm } from '@/features/contact-form'
import { MobileMenu } from '@/features/mobile-menu'
import { NAVIGATION_LINKS } from '../config/constants'

/**
 * Виджет детализации проекта PixelForge
 * Объединяет все секции проекта в единый компонент
 */
export function PixelForgeDetail() {
  return (
    <>
      <PixelForgeHeader menu={<MobileMenu links={NAVIGATION_LINKS} />} />
      <PixelForgeHero />
      <PixelForgeServices />
      <PixelForgeAbout />
      <PixelForgeContact form={<ContactForm />} />
      <PixelForgeFooter />
    </>
  )
}
