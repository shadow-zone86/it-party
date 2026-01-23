import styles from './webcraft-hero.module.scss'

export function WebCraftHero() {
  return (
    <section className={styles.webcraftHero}>
      <div className={styles.webcraftHero__content}>
        <div className={styles.webcraftHero__logo}>
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="70" height="70" rx="12" fill="#e94560" />
            <path
              d="M20 20h15v15h-15zM45 20h15v15h-15zM20 45h15v15h-15zM45 45h15v15h-15z"
              fill="white"
              opacity="0.9"
            />
            <path d="M32 32h16v16h-16z" fill="white" />
          </svg>
        </div>
        <h1 className={styles.webcraftHero__title}>
          Web<span>Craft</span> Studio
        </h1>
        <p className={styles.webcraftHero__slogan}>
          Создаём цифровые решения, которые работают
        </p>
        <p className={styles.webcraftHero__description}>
          Разрабатываем современные сайты, веб-приложения и цифровые продукты,
          которые помогают бизнесу расти и достигать целей
        </p>
        <div className={styles.webcraftHero__buttons}>
          <a href="#contact" className={`${styles.webcraftBtn} ${styles.webcraftBtnPrimary}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Обсудить проект
          </a>
          <a href="#portfolio" className={`${styles.webcraftBtn} ${styles.webcraftBtnSecondary}`}>
            Наши работы
          </a>
        </div>
      </div>
    </section>
  )
}
