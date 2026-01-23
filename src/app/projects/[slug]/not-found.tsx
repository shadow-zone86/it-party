import { NotFoundContent } from '@/shared/ui/not-found-content'
import styles from '../../not-found.module.scss'

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <NotFoundContent
        subtitle="Проект не найден"
        description="Запрашиваемый проект не существует или был удален."
      />
    </main>
  )
}
