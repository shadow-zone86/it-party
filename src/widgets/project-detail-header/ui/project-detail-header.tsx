import Link from 'next/link'
import styles from './project-detail-header.module.scss'

interface ProjectDetailHeaderProps {
  /** Показывать ли кнопку "Назад" */
  showBackButton?: boolean
}

export function ProjectDetailHeader({
  showBackButton = true,
}: ProjectDetailHeaderProps) {
  if (!showBackButton) {
    return null
  }

  return (
    <div className={styles.header}>
      <Link href="/" className={styles.header__backLink}>
        ← Назад к проектам
      </Link>
    </div>
  )
}
