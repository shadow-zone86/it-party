import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Left Section */}
        <div className={styles.footer__left}>
          <button className={styles.footer__ctaButton} type="button">
            Начать проект
          </button>

          <div className={styles.footer__social}>
            <button className={styles.footer__socialButton} type="button">
              be
            </button>
            <button className={styles.footer__socialButton} type="button">
              dp
            </button>
            <button className={styles.footer__socialButton} type="button">
              tg
            </button>
            <button className={styles.footer__socialButton} type="button">
              vk
            </button>
          </div>

          <div className={styles.footer__copyright}>
            <p>© 2014 - 2026</p>
            <Link href="/privacy" className={styles.footer__privacyLink}>
              Политика конфиденциальности
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.footer__right}>
          <div className={styles.footer__logo}>
            <Image
              src="/logo.svg"
              alt="IT Party"
              width={187}
              height={52}
            />
          </div>

          <p className={styles.footer__tagline}>
            Создаем digital-продукт на базе стратегии, креатива и технологий
          </p>

          <div className={styles.footer__contacts}>
            <a href="mailto:hello@design_gnk" className={styles.footer__link}>
              hello@design_gnk
            </a>
            <a href="tel:+74959999999" className={styles.footer__link}>
              +7 (495) 999 99 99
            </a>
          </div>
        </div>

        <div className={styles.footer__slogan}>
          creative digital production
        </div>
      </div>
    </footer>
  )
}
