import { notFound } from 'next/navigation'
import {
  getProjectDetailBySlug,
  getProjectDetail,
} from '@/widgets/projects/config/project-details'
import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'
import { ProjectDetailLayout } from '@/widgets/project-detail-layout'
import { ProjectDetailHeader } from '@/widgets/project-detail-header'
import { ProjectDetailBlocks } from '@/widgets/project-detail-blocks'
import { BLOCK_REGISTRY } from './config/block-registry'
import type { ProjectDetailBlock } from '@/entities/project/model/types'

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

  const isSpecialProject = ['1', '2', '3'].includes(projectDetail.projectId)

  const renderBlock = (block: ProjectDetailBlock, index: number) => {
    const renderer = BLOCK_REGISTRY[block.type]
    if (!renderer) {
      return null
    }
    return renderer(block, index)
  }

  return (
    <ProjectDetailLayout enableSmoothScroll={isSpecialProject}>
      <ProjectDetailHeader showBackButton={!isSpecialProject} />
      <ProjectDetailBlocks blocks={projectDetail.blocks} renderBlock={renderBlock} />
    </ProjectDetailLayout>
  )
}
