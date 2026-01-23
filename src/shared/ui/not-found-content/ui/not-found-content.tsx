import Link from 'next/link'
import styles from './not-found-content.module.scss'

interface NotFoundContentProps {
  title?: string
  subtitle?: string
  description?: string
}

export function NotFoundContent({
  title = '404',
  subtitle = 'Страница не найдена',
  description = 'Запрашиваемая страница не существует или была удалена.',
}: NotFoundContentProps) {
  return (
    <div className={styles.notFound__content}>
      <h1 className={styles.notFound__title}>{title}</h1>
      <h2 className={styles.notFound__subtitle}>{subtitle}</h2>
      <p className={styles.notFound__description}>{description}</p>
      <Link href="/" className={styles.notFound__link}>
        Вернуться на главную
      </Link>
    </div>
  )
}
