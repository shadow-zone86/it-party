import type { Project } from '../model/types'

export const PROJECTS: Project[] = [
  {
    id: '1',
    companyName: 'People company MN',
    projectName: 'HR-платформа People company MN',
    description:
      'Разработка, UX/UI-дизайн и развитие айдентики для HR-платформы и карьерного портала',
    tags: ['Продуктовый дизайн', 'Интеграции', 'Карьерные порталы'],
    imageSrc: '/project-1.jpeg',
  },
  {
    id: '2',
    companyName: 'Forest Atom',
    projectName: 'Экологическая платформа Forest Atom',
    description:
      'Разработка веб-платформы и мобильного приложения для мониторинга экологических показателей и управления устойчивыми проектами',
    tags: ['Дизайн', 'Разработка'],
    imageSrc: '/project-3.jpeg',
  },
  {
    id: '3',
    companyName: 'Minnesota',
    projectName: 'Платформа управления данными Minnesota',
    description:
      'Разработка мобильного приложения и веб-платформы для управления бизнес-процессами и аналитики',
    tags: ['Мобильная разработка', 'UX/UI'],
    imageSrc: '/project-2.jpeg',
  },
]
