import type { ReactNode } from 'react'
import type { ProjectDetailBlock } from '@/entities/project/model/types'
import { NextPageHeader } from '@/widgets/nextpage-header'
import { NextPageHero } from '@/widgets/nextpage-hero'
import { NextPageServices } from '@/widgets/nextpage-services'
import { NextPageAbout } from '@/widgets/nextpage-about'
import { NextPageContact } from '@/widgets/nextpage-contact'
import { NextPageFooter } from '@/widgets/nextpage-footer'
import { WebCraftHeader } from '@/widgets/webcraft-header'
import { WebCraftHero } from '@/widgets/webcraft-hero'
import { WebCraftServices } from '@/widgets/webcraft-services'
import { WebCraftProcess } from '@/widgets/webcraft-process'
import { WebCraftPortfolio } from '@/widgets/webcraft-portfolio'
import { WebCraftStats } from '@/widgets/webcraft-stats'
import { WebCraftContact } from '@/widgets/webcraft-contact'
import { WebCraftFooter } from '@/widgets/webcraft-footer'
import { PixelForgeHeader } from '@/widgets/pixelforge-header'
import { PixelForgeHero } from '@/widgets/pixelforge-hero'
import { PixelForgeServices } from '@/widgets/pixelforge-services'
import { PixelForgeAbout } from '@/widgets/pixelforge-about'
import { PixelForgeContact } from '@/widgets/pixelforge-contact'
import { PixelForgeFooter } from '@/widgets/pixelforge-footer'
import { HeroBlock } from '@/shared/ui/hero-block'
import { TextBlock } from '@/shared/ui/text-block'

/**
 * Маппинг типов блоков на компоненты
 * Регистрация происходит на уровне страницы (app), что соответствует FSD
 */
export const BLOCK_REGISTRY: Record<
  string,
  (block: ProjectDetailBlock, index: number) => ReactNode
> = {
  'nextpage-header': () => <NextPageHeader />,
  'nextpage-hero': () => <NextPageHero />,
  'nextpage-services': () => <NextPageServices />,
  'nextpage-about': () => <NextPageAbout />,
  'nextpage-contact': () => <NextPageContact />,
  'nextpage-footer': () => <NextPageFooter />,
  'webcraft-header': () => <WebCraftHeader />,
  'webcraft-hero': () => <WebCraftHero />,
  'webcraft-services': () => <WebCraftServices />,
  'webcraft-process': () => <WebCraftProcess />,
  'webcraft-portfolio': () => <WebCraftPortfolio />,
  'webcraft-stats': () => <WebCraftStats />,
  'webcraft-contact': () => <WebCraftContact />,
  'webcraft-footer': () => <WebCraftFooter />,
  'pixelforge-header': () => <PixelForgeHeader />,
  'pixelforge-hero': () => <PixelForgeHero />,
  'pixelforge-services': () => <PixelForgeServices />,
  'pixelforge-about': () => <PixelForgeAbout />,
  'pixelforge-contact': () => <PixelForgeContact />,
  'pixelforge-footer': () => <PixelForgeFooter />,
  hero: (block, index) => {
    const heroImage = block.data.image as string | undefined
    const heroTitle = block.data.title as string
    const heroSubtitle = block.data.subtitle as string | undefined
    return (
      <HeroBlock
        image={heroImage}
        title={heroTitle}
        subtitle={heroSubtitle}
        priority={index === 0}
      />
    )
  },
  text: (block) => {
    const textContent = block.data.content as string
    return <TextBlock content={textContent} />
  },
}
