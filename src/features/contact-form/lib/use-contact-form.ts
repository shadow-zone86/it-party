'use client'

import { useState, FormEvent } from 'react'

export function useContactForm() {
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

  return {
    isSubmitting,
    showMessage,
    handleSubmit,
  }
}
