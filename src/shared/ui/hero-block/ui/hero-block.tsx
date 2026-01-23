import Image from 'next/image'
import styles from './hero-block.module.scss'

interface HeroBlockProps {
  /** URL изображения */
  image?: string
  /** Заголовок */
  title: string
  /** Подзаголовок */
  subtitle?: string
  /** Приоритет загрузки изображения */
  priority?: boolean
}

export function HeroBlock({
  image,
  title,
  subtitle,
  priority = false,
}: HeroBlockProps) {
  return (
    <section className={styles.hero}>
      {image && (
        <div className={styles.hero__imageWrap}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.hero__image}
            priority={priority}
            sizes="100vw"
          />
        </div>
      )}
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>{title}</h1>
        {subtitle && (
          <p className={styles.hero__subtitle}>{subtitle}</p>
        )}
      </div>
    </section>
  )
}
