import { SERVICES } from '../config/constants'
import styles from './webcraft-services.module.scss'

export function WebCraftServices() {
  return (
    <section className={styles.webcraftServices} id="services">
      <div className={styles.webcraftContainer}>
        <div className={styles.webcraftSectionHeader}>
          <h2 className={styles.webcraftSectionHeader__title}>Наши услуги</h2>
          <p className={styles.webcraftSectionHeader__description}>
            Полный спектр услуг для создания и развития вашего цифрового
            присутствия
          </p>
        </div>
        <div className={styles.webcraftServices__grid}>
          {SERVICES.map((service, index) => (
            <div key={index} className={styles.webcraftServiceCard}>
              <div className={styles.webcraftServiceCard__icon}>
                {service.icon}
              </div>
              <h3 className={styles.webcraftServiceCard__title}>
                {service.title}
              </h3>
              <p className={styles.webcraftServiceCard__description}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
