'use client'

import styles from './webcraft-process.module.scss'
import { STEPS } from '../config/constants'

export function WebCraftProcess() {
  return (
    <section className={styles.webcraftProcess} id="process">
      <div className={styles.webcraftContainer}>
        <div className={styles.webcraftSectionHeader}>
          <h2 className={styles.webcraftSectionHeader__title}>Как мы работаем</h2>
          <p className={styles.webcraftSectionHeader__description}>
            Прозрачный процесс разработки от идеи до запуска проекта
          </p>
        </div>
        <div className={styles.webcraftProcess__steps}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.webcraftProcessStep}>
              <div className={styles.webcraftProcessStep__number}>
                {step.number}
              </div>
              <h3 className={styles.webcraftProcessStep__title}>{step.title}</h3>
              <p className={styles.webcraftProcessStep__description}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
