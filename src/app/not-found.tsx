import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h1 className={styles.notFound__title}>404</h1>
        <h2 className={styles.notFound__subtitle}>Страница не найдена</h2>
        <p className={styles.notFound__description}>
          Запрашиваемая страница не существует или была удалена.
        </p>
        <Link href="/" className={styles.notFound__link}>
          Вернуться на главную
        </Link>
      </div>
    </main>
  )
}
