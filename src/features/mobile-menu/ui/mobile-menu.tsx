'use client'

import { useMobileMenu } from '../lib/use-mobile-menu'
import styles from './mobile-menu.module.scss'

interface MobileMenuProps {
  links: Array<{ href: string; label: string }>
  onLinkClick?: () => void
}

export function MobileMenu({ links, onLinkClick }: MobileMenuProps) {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()

  const handleLinkClick = (): void => {
    closeMenu()
    onLinkClick?.()
  }

  return (
    <>
      <button
        className={styles.mobileMenu__toggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        className={`${styles.mobileMenu__links} ${
          isMenuOpen ? styles.mobileMenu__linksActive : ''
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
