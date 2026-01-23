import type { ProjectDetail } from '@/entities/project/model/types'

/**
 * Конфигурация детализации проектов.
 * Каждый проект может иметь уникальную структуру блоков.
 */
export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  '1': {
    projectId: '1',
    slug: 'nextpage',
    meta: {
      title: 'NextPage — Следующая страница вашего бизнеса | IT Party',
      description:
        'Разработка современного веб-сайта для компании NextPage с уникальным дизайном и функциональностью',
    },
    blocks: [
      {
        type: 'nextpage-header',
        data: {},
      },
      {
        type: 'nextpage-hero',
        data: {},
      },
      {
        type: 'nextpage-services',
        data: {},
      },
      {
        type: 'nextpage-about',
        data: {},
      },
      {
        type: 'nextpage-contact',
        data: {},
      },
      {
        type: 'nextpage-footer',
        data: {},
      },
    ],
  },
  '2': {
    projectId: '2',
    slug: 'webcraft-studio',
    meta: {
      title: 'WebCraft Studio — Создаём цифровые решения, которые работают | IT Party',
      description:
        'Разработка современного веб-сайта для компании WebCraft Studio с полным спектром услуг',
    },
    blocks: [
      {
        type: 'webcraft-header',
        data: {},
      },
      {
        type: 'webcraft-hero',
        data: {},
      },
      {
        type: 'webcraft-services',
        data: {},
      },
      {
        type: 'webcraft-process',
        data: {},
      },
      {
        type: 'webcraft-portfolio',
        data: {},
      },
      {
        type: 'webcraft-stats',
        data: {},
      },
      {
        type: 'webcraft-contact',
        data: {},
      },
      {
        type: 'webcraft-footer',
        data: {},
      },
    ],
  },
  '3': {
    projectId: '3',
    slug: 'pixel-forge',
    meta: {
      title: 'PixelForge — От идеи до запуска — один клик | IT Party',
      description:
        'Разработка современного веб-сайта для компании PixelForge с уникальным дизайном в зеленых тонах',
    },
    blocks: [
      {
        type: 'pixelforge-header',
        data: {},
      },
      {
        type: 'pixelforge-hero',
        data: {},
      },
      {
        type: 'pixelforge-services',
        data: {},
      },
      {
        type: 'pixelforge-about',
        data: {},
      },
      {
        type: 'pixelforge-contact',
        data: {},
      },
      {
        type: 'pixelforge-footer',
        data: {},
      },
    ],
  },
}

/**
 * Получить детализацию проекта по slug
 */
export function getProjectDetailBySlug(slug: string): ProjectDetail | undefined {
  if (!slug) {
    return undefined
  }
  
  const detail = Object.values(PROJECT_DETAILS).find(
    (detail) => detail.slug === slug.toLowerCase().trim()
  )
  
  return detail
}

/**
 * Получить детализацию проекта по ID (для обратной совместимости)
 */
export function getProjectDetail(projectId: string): ProjectDetail | undefined {
  return PROJECT_DETAILS[projectId]
}
