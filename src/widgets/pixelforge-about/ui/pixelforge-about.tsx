'use client'

import styles from './pixelforge-about.module.scss'
import { STATS } from '../config/constants'

export function PixelForgeAbout() {
  return (
    <section className={styles.pixelforgeAbout} id="about">
      <div className={styles.pixelforgeAbout__content}>
        <h2 className={styles.pixelforgeAbout__title}>О компании PixelForge</h2>
        <p className={styles.pixelforgeAbout__text}>
          Мы — команда профессионалов, которая помогает бизнесу превращать
          идеи в успешные цифровые продукты. Наш опыт и экспертиза позволяют
          находить эффективные решения для самых сложных задач.
        </p>
        <p className={styles.pixelforgeAbout__text}>
          Каждый проект для нас — это возможность создать что-то уникальное и
          ценное для наших клиентов, от идеи до запуска.
        </p>
        <div className={styles.pixelforgeAbout__stats}>
          {STATS.map((stat, index) => (
            <div key={index} className={styles.pixelforgeAbout__statItem}>
              <span className={styles.pixelforgeAbout__statNumber}>
                {stat.number}
              </span>
              <span className={styles.pixelforgeAbout__statLabel}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
