import { ANALYTICS_CARDS } from '../config/constants'
import { ScrollAnimation } from '@/shared/ui/scroll-animation'
import type { AnalyticsCard } from '../model/types'
import styles from './analytics.module.scss'

export function Analytics() {
  return (
    <section className={styles.analytics}>
      <ScrollAnimation animation="fade-up" delay={0}>
        <h2 className={styles.analytics__title}>Аналитика</h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={100}>
        <p className={styles.analytics__description}>
          Наш продукт — это наша компания. Процессы, технологии и методы.
          Сохранение и передача компетенций. Система разработки проектов и
          развития команды.
        </p>
      </ScrollAnimation>
      <div className={styles.analytics__grid}>
        {ANALYTICS_CARDS.map((card: AnalyticsCard, index) => (
          <ScrollAnimation
            key={card.id}
            animation="fade-up"
            delay={200 + index * 100}
          >
            <div className={styles.analytics__card}>
              <div className={styles.analytics__number}>{card.number}</div>
              <h3 className={styles.analytics__cardTitle}>{card.title}</h3>
              <p className={styles.analytics__cardDescription}>
                {card.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
