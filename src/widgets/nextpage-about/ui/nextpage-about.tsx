'use client'

import styles from './nextpage-about.module.scss'
import { STATS } from '../config/constants'

export function NextPageAbout() {
  return (
    <section className={styles.nextpageAbout} id="about">
      <div className={styles.nextpageAbout__content}>
        <h2 className={styles.nextpageAbout__title}>О компании NextPage</h2>
        <p className={styles.nextpageAbout__text}>
          Мы — команда профессионалов, которая помогает бизнесу открывать новые
          страницы развития. Наш опыт и экспертиза позволяют находить
          эффективные решения для самых сложных задач.
        </p>
        <p className={styles.nextpageAbout__text}>
          Каждый проект для нас — это возможность создать что-то уникальное и
          ценное для наших клиентов.
        </p>
        <div className={styles.nextpageAbout__stats}>
          {STATS.map((stat, index) => (
            <div key={index} className={styles.nextpageAbout__statItem}>
              <span className={styles.nextpageAbout__statNumber}>
                {stat.number}
              </span>
              <span className={styles.nextpageAbout__statLabel}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
