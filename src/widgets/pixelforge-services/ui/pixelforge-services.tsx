'use client'

import styles from './pixelforge-services.module.scss'
import { SERVICES } from '../config/constants'

export function PixelForgeServices() {
  return (
    <section className={styles.pixelforgeServices} id="services">
      <h2 className={styles.pixelforgeServices__title}>Наши услуги</h2>
      <div className={styles.pixelforgeServices__grid}>
        {SERVICES.map((service, index) => (
          <div key={index} className={styles.pixelforgeServiceCard}>
            <div className={styles.pixelforgeServiceCard__icon}>
              {service.icon}
            </div>
            <h3 className={styles.pixelforgeServiceCard__title}>
              {service.title}
            </h3>
            <p className={styles.pixelforgeServiceCard__description}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
