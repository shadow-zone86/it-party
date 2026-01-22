import Image from 'next/image'
import styles from './clients.module.scss'

const COMPANY_LOGOS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/company-${i + 1}.jpeg`,
  alt: `Company ${i + 1}`,
}))

export function Clients() {
  return (
    <section className={styles.clients}>
      <h2 className={styles.clients__title}>Клиенты</h2>
      <p className={styles.clients__description}>
        Мы работаем с ведущими компаниями и брендами из различных отраслей
      </p>
      <div className={styles.clients__grid}>
        {COMPANY_LOGOS.map((logo) => (
          <div key={logo.id} className={styles.clients__logo}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={100}
              className={styles.clients__image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
