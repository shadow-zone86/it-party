'use client'

import styles from './webcraft-stats.module.scss'
import { STATS } from '../config/constants'

export function WebCraftStats() {
  return (
    <section className={styles.webcraftStats}>
      <div className={styles.webcraftContainer}>
        <div className={styles.webcraftStats__grid}>
          {STATS.map((stat, index) => (
            <div key={index} className={styles.webcraftStatItem}>
              <h3 className={styles.webcraftStatItem__number}>{stat.number}</h3>
              <p className={styles.webcraftStatItem__label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
