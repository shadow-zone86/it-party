export interface PortfolioItem {
  title: string
  description: string
  tags: string[]
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: 'E-commerce платформа',
    description:
      'Интернет-магазин электроники с интеграцией платёжных систем и CRM',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Мобильное приложение',
    description:
      'Приложение для службы доставки с real-time отслеживанием заказов',
    tags: ['React Native', 'Firebase', 'Maps API'],
  },
  {
    title: 'Корпоративный портал',
    description:
      'Внутренняя система управления документами и задачами для компании',
    tags: ['Vue.js', 'Python', 'Docker'],
  },
]
