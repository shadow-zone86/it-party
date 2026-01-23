'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './pixelforge-header.module.scss'

export function PixelForgeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.pixelforgeHeader}>
      <nav className={styles.pixelforgeHeader__nav}>
        <Link href="/" className={styles.pixelforgeHeader__logo}>
          Pixel<span>Forge</span>
        </Link>
        <button
          className={styles.pixelforgeHeader__menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          className={`${styles.pixelforgeHeader__links} ${
            isMenuOpen ? styles.pixelforgeHeader__linksActive : ''
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
