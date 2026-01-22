import Image from 'next/image'
import { ScrollAnimation } from '@/shared/ui/scroll-animation'
import styles from './clients.module.scss'

const COMPANY_LOGOS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/company-${i + 1}.jpeg`,
  alt: `Company ${i + 1}`,
}))

export function Clients() {
  return (
    <section className={styles.clients}>
      <ScrollAnimation animation="fade-up" delay={0}>
        <h2 className={styles.clients__title}>Клиенты</h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={100}>
        <p className={styles.clients__description}>
          Мы работаем с ведущими компаниями и брендами из различных отраслей
        </p>
      </ScrollAnimation>
      <div className={styles.clients__grid}>
        {COMPANY_LOGOS.map((logo, index) => (
          <ScrollAnimation
            key={logo.id}
            animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            delay={200 + index * 50}
          >
            <div className={styles.clients__logo}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className={styles.clients__image}
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
