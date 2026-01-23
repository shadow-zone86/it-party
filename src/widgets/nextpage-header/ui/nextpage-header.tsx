'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './nextpage-header.module.scss'

export function NextPageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.nextpageHeader}>
      <nav className={styles.nextpageHeader__nav}>
        <Link href="/" className={styles.nextpageHeader__logo}>
          Next<span>Page</span>
        </Link>
        <button
          className={styles.nextpageHeader__menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          className={`${styles.nextpageHeader__links} ${
            isMenuOpen ? styles.nextpageHeader__linksActive : ''
          }`}
        >
          <li>
            <a href="#services" onClick={closeMenu}>
              Услуги
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              О нас
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
