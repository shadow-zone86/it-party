import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './nextpage-header.module.scss'

interface NextPageHeaderProps {
  menu: ReactNode
}

export function NextPageHeader({ menu }: NextPageHeaderProps) {
  return (
    <header className={styles.nextpageHeader}>
      <nav className={styles.nextpageHeader__nav}>
        <Link href="/" className={styles.nextpageHeader__logo}>
          Next<span>Page</span>
        </Link>
        {menu}
      </nav>
    </header>
  )
}
