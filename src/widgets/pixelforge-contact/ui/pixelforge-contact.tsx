'use client'

import { useState, FormEvent } from 'react'
import styles from './pixelforge-contact.module.scss'

export function PixelForgeContact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    // Симуляция отправки формы
    setTimeout(() => {
      setIsSubmitting(false)
      setShowMessage(true)
      e.currentTarget.reset()

      setTimeout(() => {
        setShowMessage(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className={styles.pixelforgeContact} id="contact">
      <div className={styles.pixelforgeContact__container}>
        <h2 className={styles.pixelforgeContact__title}>Свяжитесь с нами</h2>
        <form
          className={styles.pixelforgeContact__form}
          onSubmit={handleSubmit}
          id="contactForm"
        >
          <div className={styles.pixelforgeContact__formGroup}>
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Введите ваше имя"
            />
          </div>
          <div className={styles.pixelforgeContact__formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@mail.com"
            />
          </div>
          <div className={styles.pixelforgeContact__formGroup}>
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Расскажите о вашем проекте..."
              rows={5}
            />
          </div>
          <button
            type="submit"
            className={styles.pixelforgeContact__submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>
          {showMessage && (
            <div className={styles.pixelforgeContact__message}>
              Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в
              ближайшее время.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
