import { NextPageHeader } from '@/entities/project/ui/nextpage-header'
import { NextPageHero } from '@/entities/project/ui/nextpage-hero'
import { NextPageServices } from '@/entities/project/ui/nextpage-services'
import { NextPageAbout } from '@/entities/project/ui/nextpage-about'
import { NextPageContact } from '@/entities/project/ui/nextpage-contact'
import { NextPageFooter } from '@/entities/project/ui/nextpage-footer'
import { ContactForm } from '@/features/contact-form'
import { MobileMenu } from '@/features/mobile-menu'
import { NAVIGATION_LINKS } from '../config/constants'

/**
 * Виджет детализации проекта NextPage
 * Объединяет все секции проекта в единый компонент
 */
export function NextPageDetail() {
  return (
    <>
      <NextPageHeader menu={<MobileMenu links={NAVIGATION_LINKS} />} />
      <NextPageHero />
      <NextPageServices />
      <NextPageAbout />
      <NextPageContact form={<ContactForm />} />
      <NextPageFooter />
    </>
  )
}
