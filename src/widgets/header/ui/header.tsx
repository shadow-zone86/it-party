'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Закрываем меню при клике на ссылку
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: '/cases', label: 'КЕЙСЫ' },
    { href: '/services', label: 'УСЛУГИ' },
    { href: '/solutions', label: 'БАЗА РЕШЕНИЙ' },
    { href: '/contacts', label: 'КОНТАКТЫ' },
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Десктопное меню */}
        <div className={styles.desktopMenu}>
          <Link href="/cases" className={styles.navLink}>
            КЕЙСЫ
          </Link>
          <Link href="/services" className={styles.navLink}>
            УСЛУГИ
          </Link>
        </div>

        <Link href="/" className={styles.logo} onClick={handleLinkClick}>
          <Image
            src="/logo.svg"
            alt="IT Party"
            width={187}
            height={52}
            priority
          />
        </Link>

        <div className={styles.desktopMenu}>
          <Link href="/solutions" className={styles.navLink}>
            БАЗА РЕШЕНИЙ
          </Link>
          <Link href="/contacts" className={styles.navLink}>
            КОНТАКТЫ
          </Link>
        </div>

        {/* Гамбургер кнопка */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
      </nav>

      {/* Мобильное меню */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <div className={styles.mobileMenuContent}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay для затемнения фона */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
