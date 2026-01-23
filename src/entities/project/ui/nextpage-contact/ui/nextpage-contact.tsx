import { ReactNode } from 'react'
import styles from './nextpage-contact.module.scss'

interface NextPageContactProps {
  form: ReactNode
}

export function NextPageContact({ form }: NextPageContactProps) {
  return (
    <section className={styles.nextpageContact} id="contact">
      <div className={styles.nextpageContact__container}>
        <h2 className={styles.nextpageContact__title}>Свяжитесь с нами</h2>
        {form}
      </div>
    </section>
  )
}
