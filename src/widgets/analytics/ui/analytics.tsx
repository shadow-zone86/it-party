import { ANALYTICS_CARDS } from '../config/constants'
import type { AnalyticsCard } from '../model/types'
import styles from './analytics.module.scss'

export function Analytics() {
  return (
    <section className={styles.analytics}>
      <h2 className={styles.analytics__title}>Аналитика</h2>
      <p className={styles.analytics__description}>
        Наш продукт — это наша компания. Процессы, технологии и методы.
        Сохранение и передача компетенций. Система разработки проектов и
        развития команды.
      </p>
      <div className={styles.analytics__grid}>
        {ANALYTICS_CARDS.map((card: AnalyticsCard) => (
          <div key={card.id} className={styles.analytics__card}>
            <div className={styles.analytics__number}>{card.number}</div>
            <h3 className={styles.analytics__cardTitle}>{card.title}</h3>
            <p className={styles.analytics__cardDescription}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
