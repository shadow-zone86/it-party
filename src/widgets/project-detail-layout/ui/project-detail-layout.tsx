import type { ReactNode } from 'react'
import { SmoothScroll } from '@/features/smooth-scroll'
import styles from './project-detail-layout.module.scss'

interface ProjectDetailLayoutProps {
  /** Дочерние элементы */
  children: ReactNode
  /** Нужен ли smooth scroll (для специальных проектов) */
  enableSmoothScroll?: boolean
}

export function ProjectDetailLayout({
  children,
  enableSmoothScroll = false,
}: ProjectDetailLayoutProps) {
  return (
    <main className={styles.layout}>
      {enableSmoothScroll && <SmoothScroll />}
      <div
        className={`${styles.layout__content} ${
          enableSmoothScroll ? styles.layout__contentWithSpacing : ''
        }`}
      >
        {children}
      </div>
    </main>
  )
}
