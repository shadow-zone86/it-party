'use client'

import styles from './nextpage-services.module.scss'
import { SERVICES } from '../config/constants'

export function NextPageServices() {
  return (
    <section className={styles.nextpageServices} id="services">
      <h2 className={styles.nextpageServices__title}>Наши услуги</h2>
      <div className={styles.nextpageServices__grid}>
        {SERVICES.map((service, index) => (
          <div key={index} className={styles.nextpageServices__card}>
            <div className={styles.nextpageServices__icon}>{service.icon}</div>
            <h3 className={styles.nextpageServices__cardTitle}>
              {service.title}
            </h3>
            <p className={styles.nextpageServices__cardDescription}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
