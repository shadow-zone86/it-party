import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectDetailBySlug } from '@/widgets/projects/config/project-details'
import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'
import { NextPageDetail } from '@/widgets/nextpage-detail'
import { WebCraftDetail } from '@/widgets/webcraft-detail'
import { PixelForgeDetail } from '@/widgets/pixelforge-detail'
import styles from './page.module.scss'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
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
  const projectDetail = getProjectDetailBySlug(slug)

  if (!projectDetail) {
    notFound()
  }

  return (
    <main className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Назад к проектам
          </Link>
        </div>
        {projectDetail.projectId === '1' && <NextPageDetail />}
        {projectDetail.projectId === '2' && <WebCraftDetail />}
        {projectDetail.projectId === '3' && <PixelForgeDetail />}
      </div>
    </main>
  )
}
