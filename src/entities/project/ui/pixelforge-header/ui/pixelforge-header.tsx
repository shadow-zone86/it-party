import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './pixelforge-header.module.scss'

interface PixelForgeHeaderProps {
  menu: ReactNode
}

export function PixelForgeHeader({ menu }: PixelForgeHeaderProps) {
  return (
    <header className={styles.pixelforgeHeader}>
      <nav className={styles.pixelforgeHeader__nav}>
        <Link href="/" className={styles.pixelforgeHeader__logo}>
          Pixel<span>Forge</span>
        </Link>
        {menu}
      </nav>
    </header>
  )
}
