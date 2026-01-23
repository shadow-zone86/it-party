'use client'

import { useWebCraftContactForm } from '../lib/use-webcraft-contact-form'
import styles from './webcraft-contact-form.module.scss'

export function WebCraftContactForm() {
  const { isSubmitting, showMessage, messageType, handleSubmit } =
    useWebCraftContactForm()

  return (
    <form
      className={styles.webcraftContact__form}
      onSubmit={handleSubmit}
      id="contactForm"
    >
      {showMessage && (
        <div
          className={`${styles.webcraftContact__formStatus} ${
            messageType === 'success'
              ? styles.webcraftContact__formStatusSuccess
              : styles.webcraftContact__formStatusError
          }`}
        >
          {messageType === 'success'
            ? 'Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.'
            : 'Произошла ошибка. Пожалуйста, попробуйте еще раз.'}
        </div>
      )}
      <div className={styles.webcraftContact__formGroup}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Введите ваше имя"
        />
      </div>
      <div className={styles.webcraftContact__formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="example@mail.com"
        />
      </div>
      <div className={styles.webcraftContact__formGroup}>
        <label htmlFor="service">Интересующая услуга</label>
        <select id="service" name="service">
          <option value="">Выберите услугу</option>
          <option value="website">Разработка сайта</option>
          <option value="mobile">Мобильное приложение</option>
          <option value="automation">Автоматизация</option>
          <option value="design">UX/UI Дизайн</option>
          <option value="seo">SEO-продвижение</option>
          <option value="other">Другое</option>
        </select>
      </div>
      <div className={styles.webcraftContact__formGroup}>
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
        className={`${styles.webcraftBtn} ${styles.webcraftBtnPrimary}`}
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
      </button>
    </form>
  )
}
