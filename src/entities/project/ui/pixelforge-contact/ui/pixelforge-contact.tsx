import { ReactNode } from 'react'
import styles from './pixelforge-contact.module.scss'

interface PixelForgeContactProps {
  form: ReactNode
}

export function PixelForgeContact({ form }: PixelForgeContactProps) {
  return (
    <section className={styles.pixelforgeContact} id="contact">
      <div className={styles.pixelforgeContact__container}>
        <h2 className={styles.pixelforgeContact__title}>Свяжитесь с нами</h2>
        {form}
      </div>
    </section>
  )
}
