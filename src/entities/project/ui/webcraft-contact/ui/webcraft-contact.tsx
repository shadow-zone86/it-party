import { ReactNode } from 'react'
import styles from './webcraft-contact.module.scss'

interface WebCraftContactProps {
  form: ReactNode
}

export function WebCraftContact({ form }: WebCraftContactProps) {
  return (
    <section className={styles.webcraftContact} id="contact">
      <div className={styles.webcraftContainer}>
        <div className={styles.webcraftSectionHeader}>
          <h2 className={styles.webcraftSectionHeader__title}>
            Свяжитесь с нами
          </h2>
          <p className={styles.webcraftSectionHeader__description}>
            Расскажите о вашем проекте, и мы предложим лучшее решение
          </p>
        </div>
        <div className={styles.webcraftContact__wrapper}>
          <div className={styles.webcraftContact__info}>
            <h3 className={styles.webcraftContact__infoTitle}>
              Готовы обсудить ваш проект?
            </h3>
            <p className={styles.webcraftContact__infoDescription}>
              Оставьте заявку, и наш менеджер свяжется с вами в течение часа для
              обсуждения деталей
            </p>
            <div className={styles.webcraftContact__details}>
              <div className={styles.webcraftContactItem}>
                <div className={styles.webcraftContactItem__icon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className={styles.webcraftContactItem__text}>
                  <h4>Телефон</h4>
                  <p>+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className={styles.webcraftContactItem}>
                <div className={styles.webcraftContactItem__icon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className={styles.webcraftContactItem__text}>
                  <h4>Email</h4>
                  <p>hello@webcraft.studio</p>
                </div>
              </div>
              <div className={styles.webcraftContactItem}>
                <div className={styles.webcraftContactItem__icon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className={styles.webcraftContactItem__text}>
                  <h4>Адрес</h4>
                  <p>Москва, ул. Примерная, 123</p>
                </div>
              </div>
            </div>
          </div>
          {form}
        </div>
      </div>
    </section>
  )
}
