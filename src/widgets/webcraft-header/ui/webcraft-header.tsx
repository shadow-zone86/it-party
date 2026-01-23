'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './webcraft-header.module.scss'

export function WebCraftHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.webcraftHeader}>
      <div className={styles.webcraftHeader__container}>
        <Link href="/" className={styles.webcraftHeader__logo}>
          <svg
            className={styles.webcraftHeader__logoIcon}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" y="5" width="40" height="40" rx="8" fill="#e94560" />
            <path
              d="M15 15h8v8h-8zM27 15h8v8h-8zM15 27h8v8h-8zM27 27h8v8h-8z"
              fill="white"
              opacity="0.9"
            />
            <path d="M22 22h6v6h-6z" fill="white" />
          </svg>
          <span className={styles.webcraftHeader__logoText}>
            Web<span>Craft</span> Studio
          </span>
        </Link>
        <button
          className={styles.webcraftHeader__menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`${styles.webcraftHeader__nav} ${
            isMenuOpen ? styles.webcraftHeader__navActive : ''
          }`}
          id="mainNav"
        >
          <a href="#services" onClick={closeMenu}>
            Услуги
          </a>
          <a href="#portfolio" onClick={closeMenu}>
            Портфолио
          </a>
          <a href="#process" onClick={closeMenu}>
            Процесс
          </a>
          <a href="#contact" onClick={closeMenu}>
            Контакты
          </a>
        </nav>
      </div>
    </header>
  )
}
