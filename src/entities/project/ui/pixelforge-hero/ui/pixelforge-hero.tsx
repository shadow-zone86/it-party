import styles from './pixelforge-hero.module.scss'

export function PixelForgeHero() {
  return (
    <section className={styles.pixelforgeHero}>
      <div className={styles.pixelforgeHero__content}>
        <div className={styles.pixelforgeHero__logo}>
          <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="pixelforgeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" style={{ stopColor: '#2d5016' }} />
                <stop offset="100%" style={{ stopColor: '#4ade80' }} />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="55"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="52"
              fontWeight="700"
              fill="url(#pixelforgeGradient)"
            >
              PixelForge
            </text>
            <path
              d="M80 65 Q120 55 160 65"
              stroke="#4ade80"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
        <p className={styles.pixelforgeHero__slogan}>
          «От идеи до запуска — один клик»
        </p>
        <h1 className={styles.pixelforgeHero__title}>
          Превращаем ваши идеи в цифровую реальность
        </h1>
        <p className={styles.pixelforgeHero__description}>
          Мы создаём современные веб-решения и приложения, которые помогают
          бизнесу достигать новых высот в цифровом мире
        </p>
        <a href="#contact" className={styles.pixelforgeHero__cta}>
          Начать проект
        </a>
      </div>
    </section>
  )
}
