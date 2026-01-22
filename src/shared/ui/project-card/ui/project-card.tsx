import Image from 'next/image'
import styles from './project-card.module.scss'

export interface ProjectCardProps {
  /** Название компании */
  companyName: string
  /** Название проекта */
  projectName: string
  /** Краткое описание */
  description: string
  /** Теги (разное количество и наименования) */
  tags: string[]
  /** Путь к фоновому изображению */
  imageSrc: string
  /** Alt для изображения */
  imageAlt?: string
}

export function ProjectCard({
  companyName,
  projectName,
  description,
  tags,
  imageSrc,
  imageAlt = '',
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.card__imageWrap}>
        <Image
          src={imageSrc}
          alt={imageAlt || projectName}
          fill
          className={styles.card__image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.card__content}>
        <span className={styles.card__company}>{companyName}</span>
        <h3 className={styles.card__title}>{projectName}</h3>
        <p className={styles.card__description}>{description}</p>
        {tags.length > 0 && (
          <ul className={styles.card__tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.card__tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
