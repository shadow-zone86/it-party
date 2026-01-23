import styles from './text-block.module.scss'

interface TextBlockProps {
  /** Текст контента */
  content: string
}

export function TextBlock({ content }: TextBlockProps) {
  return (
    <section className={styles.text}>
      <div className={styles.text__content}>
        <p>{content}</p>
      </div>
    </section>
  )
}
