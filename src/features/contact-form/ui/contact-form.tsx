'use client'

import { useContactForm } from '../lib/use-contact-form'
import { DEFAULT_FIELDS } from '../config/constants'
import type { ContactFormField } from '../model/types'
import styles from './contact-form.module.scss'

interface ContactFormProps {
  fields?: ContactFormField[]
  submitLabel?: string
  submittingLabel?: string
  successMessage?: string
}

export function ContactForm({
  fields = DEFAULT_FIELDS,
  submitLabel = 'Отправить заявку',
  submittingLabel = 'Отправка...',
  successMessage = 'Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.',
}: ContactFormProps) {
  const { isSubmitting, showMessage, handleSubmit } = useContactForm()

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className={styles.contactForm__group}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={5}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className={styles.contactForm__submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? submittingLabel : submitLabel}
      </button>
      {showMessage && (
        <div className={styles.contactForm__message}>{successMessage}</div>
      )}
    </form>
  )
}
