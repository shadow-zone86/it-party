'use client'

import { useState, FormEvent } from 'react'

export function useWebCraftContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowMessage(false)

    setTimeout(() => {
      setIsSubmitting(false)
      setShowMessage(true)
      setMessageType('success')
      e.currentTarget.reset()

      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    }, 1500)
  }

  return {
    isSubmitting,
    showMessage,
    messageType,
    handleSubmit,
  }
}
