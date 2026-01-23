'use client'

import styles from './webcraft-portfolio.module.scss'
import { PORTFOLIO_ITEMS } from '../config/constants'

export function WebCraftPortfolio() {
  return (
    <section className={styles.webcraftPortfolio} id="portfolio">
      <div className={styles.webcraftContainer}>
        <div className={styles.webcraftSectionHeader}>
          <h2 className={styles.webcraftSectionHeader__title}>Наши работы</h2>
          <p className={styles.webcraftSectionHeader__description}>
            Избранные проекты, которыми мы гордимся
          </p>
        </div>
        <div className={styles.webcraftPortfolio__grid}>
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={index} className={styles.webcraftPortfolioItem}>
              <div className={styles.webcraftPortfolioItem__image}>
                <svg viewBox="0 0 80 80" fill="white">
                  {index === 0 && (
                    <>
                      <rect
                        x="10"
                        y="15"
                        width="60"
                        height="40"
                        rx="4"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                      <rect x="30" y="55" width="20" height="5" fill="white" />
                      <rect x="25" y="60" width="30" height="3" fill="white" />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <rect
                        x="25"
                        y="5"
                        width="30"
                        height="55"
                        rx="4"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle cx="40" cy="53" r="3" fill="white" />
                      <rect
                        x="30"
                        y="12"
                        width="20"
                        height="35"
                        fill="white"
                        opacity="0.3"
                      />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <rect
                        x="10"
                        y="20"
                        width="60"
                        height="45"
                        rx="4"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                      <line
                        x1="10"
                        y1="35"
                        x2="70"
                        y2="35"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <circle cx="18" cy="27" r="3" fill="white" />
                      <circle cx="28" cy="27" r="3" fill="white" />
                      <circle cx="38" cy="27" r="3" fill="white" />
                    </>
                  )}
                </svg>
              </div>
              <div className={styles.webcraftPortfolioItem__info}>
                <h3 className={styles.webcraftPortfolioItem__title}>
                  {item.title}
                </h3>
                <p className={styles.webcraftPortfolioItem__description}>
                  {item.description}
                </p>
                <div className={styles.webcraftPortfolioItem__tags}>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.webcraftTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
