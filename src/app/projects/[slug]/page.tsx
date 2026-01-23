import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectDetail } from '@/widgets/projects/model/types'
import {
  getProjectDetailBySlug,
  getProjectDetail,
} from '@/widgets/projects/config/project-details'
import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'
import { NextPageHeader } from '@/widgets/nextpage-header'
import { NextPageHero } from '@/widgets/nextpage-hero'
import { NextPageServices } from '@/widgets/nextpage-services'
import { NextPageAbout } from '@/widgets/nextpage-about'
import { NextPageContact } from '@/widgets/nextpage-contact'
import { NextPageFooter } from '@/widgets/nextpage-footer'
import { NextPageSmoothScroll } from '@/widgets/nextpage-smooth-scroll'
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
import styles from './page.module.scss'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams(): Promise<{ slug: string; }[]> {
  const { PROJECT_DETAILS } = await import(
    '@/widgets/projects/config/project-details'
  )
  return Object.values(PROJECT_DETAILS).map((detail) => ({
    slug: detail.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const projectDetail = getProjectDetailBySlug(slug)

  if (!projectDetail) {
    return generateSeoMetadata({
      title: 'Проект не найден',
      description: 'Запрашиваемый проект не существует',
    })
  }

  return generateSeoMetadata({
    title: projectDetail.meta.title,
    description: projectDetail.meta.description,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  // Пробуем найти по slug
  let projectDetail = getProjectDetailBySlug(slug)

  // Если не найдено по slug, пробуем найти по id (для обратной совместимости)
  if (!projectDetail) {
    projectDetail = getProjectDetail(slug)
  }

  if (!projectDetail) {
    notFound()
  }

  const isNextPageProject = projectDetail.projectId === '1'
  const isWebCraftProject = projectDetail.projectId === '2'
  const isPixelForgeProject = projectDetail.projectId === '3'

  const renderBlock = (block: ProjectDetail['blocks'][0], index: number) => {
    switch (block.type) {
      case 'nextpage-header':
        return <NextPageHeader key={index} />

      case 'nextpage-hero':
        return <NextPageHero key={index} />

      case 'nextpage-services':
        return <NextPageServices key={index} />

      case 'nextpage-about':
        return <NextPageAbout key={index} />

      case 'nextpage-contact':
        return <NextPageContact key={index} />

      case 'nextpage-footer':
        return <NextPageFooter key={index} />

      case 'webcraft-header':
        return <WebCraftHeader key={index} />

      case 'webcraft-hero':
        return <WebCraftHero key={index} />

      case 'webcraft-services':
        return <WebCraftServices key={index} />

      case 'webcraft-process':
        return <WebCraftProcess key={index} />

      case 'webcraft-portfolio':
        return <WebCraftPortfolio key={index} />

      case 'webcraft-stats':
        return <WebCraftStats key={index} />

      case 'webcraft-contact':
        return <WebCraftContact key={index} />

      case 'webcraft-footer':
        return <WebCraftFooter key={index} />

      case 'pixelforge-header':
        return <PixelForgeHeader key={index} />

      case 'pixelforge-hero':
        return <PixelForgeHero key={index} />

      case 'pixelforge-services':
        return <PixelForgeServices key={index} />

      case 'pixelforge-about':
        return <PixelForgeAbout key={index} />

      case 'pixelforge-contact':
        return <PixelForgeContact key={index} />

      case 'pixelforge-footer':
        return <PixelForgeFooter key={index} />

      case 'hero':
        const heroImage = block.data.image as string | undefined
        const heroTitle = block.data.title as string
        const heroSubtitle = block.data.subtitle as string | undefined
        return (
          <section key={index} className={styles.hero}>
            {heroImage && (
              <div className={styles.hero__imageWrap}>
                <Image
                  src={heroImage}
                  alt={heroTitle}
                  fill
                  className={styles.hero__image}
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            )}
            <div className={styles.hero__content}>
              <h1 className={styles.hero__title}>{heroTitle}</h1>
              {heroSubtitle && (
                <p className={styles.hero__subtitle}>{heroSubtitle}</p>
              )}
            </div>
          </section>
        )

      case 'text':
        const textContent = block.data.content as string
        return (
          <section key={index} className={styles.text}>
            <div className={styles.text__content}>
              <p>{textContent}</p>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <main className={styles.detail}>
      {(isNextPageProject ||
        isWebCraftProject ||
        isPixelForgeProject) && <NextPageSmoothScroll />}
      {!isNextPageProject &&
        !isWebCraftProject &&
        !isPixelForgeProject && (
          <div className={styles.detail__back}>
            <Link href="/" className={styles.detail__backLink}>
              ← Назад к проектам
            </Link>
          </div>
        )}
      <article
        className={`${styles.detail__content} ${
          isNextPageProject ||
          isWebCraftProject ||
          isPixelForgeProject
            ? styles.detail__contentWithSpacing
            : ''
        }`}
      >
        {projectDetail.blocks.map((block, index) => renderBlock(block, index))}
      </article>
    </main>
  )
}
