'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/cases" className={styles.navLink}>
          КЕЙСЫ
        </Link>
        <Link href="/services" className={styles.navLink}>
          УСЛУГИ
        </Link>

        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="IT Party"
            width={187}
            height={52}
            priority
          />
        </div>

        <Link href="/solutions" className={styles.navLink}>
          БАЗА РЕШЕНИЙ
        </Link>
        <Link href="/contacts" className={styles.navLink}>
          КОНТАКТЫ
        </Link>

        <button className={styles.menuButton} aria-label="Меню">
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
      </nav>
    </header>
  )
}
