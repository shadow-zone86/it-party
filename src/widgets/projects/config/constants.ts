import type { Project } from '@/entities/project/model/types'

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'nextpage',
    companyName: 'NextPage',
    projectName: 'NextPage',
    description:
      'Разработка корпоративного сайта, UX/UI-дизайн, адаптивная верстка',
    tags: ['Веб-разработка', 'UX/UI', 'Дизайн'],
    imageSrc: '/project-1.jpeg',
  },
  {
    id: '2',
    slug: 'webcraft-studio',
    companyName: 'WebCraft Studio',
    projectName: 'WebCraft Studio',
    description:
      'Создание сайта-портфолио, разработка интерфейсов, настройка форм обратной связи',
    tags: ['Веб-разработка', 'Мобильные приложения', 'Автоматизация'],
    imageSrc: '/project-3.jpeg',
  },
  {
    id: '3',
    slug: 'pixel-forge',
    companyName: 'PixelForge',
    projectName: 'PixelForge',
    description:
      'Проектирование веб-платформы, разработка с нуля, интеграция сервисов',
    tags: ['Веб-разработка', 'UX/UI', 'Консалтинг'],
    imageSrc: '/project-2.jpeg',
  },
]
