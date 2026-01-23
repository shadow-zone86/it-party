'use client'

import styles from './nextpage-hero.module.scss'

export function NextPageHero() {
  return (
    <section className={styles.nextpageHero}>
      <div className={styles.nextpageHero__content}>
        <div className={styles.nextpageHero__logo}>
          <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" style={{ stopColor: '#2c3e50' }} />
                <stop offset="100%" style={{ stopColor: '#3498db' }} />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="55"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="52"
              fontWeight="700"
              fill="url(#textGradient)"
            >
              NextPage
            </text>
            <path
              d="M80 65 Q120 55 160 65"
              stroke="#3498db"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
        <p className={styles.nextpageHero__slogan}>
          «Следующая страница вашего бизнеса»
        </p>
        <h1 className={styles.nextpageHero__title}>
          Открываем новые возможности для вашего бизнеса
        </h1>
        <p className={styles.nextpageHero__description}>
          Мы помогаем компаниям расти и развиваться, создавая инновационные
          решения для цифровой трансформации
        </p>
        <a href="#contact" className={styles.nextpageHero__cta}>
          Начать сотрудничество
        </a>
      </div>
    </section>
  )
}
