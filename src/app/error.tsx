'use client'

import { useEffect } from 'react'
import { ErrorContent } from '@/shared/ui/error-content'
import styles from './error.module.scss'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <main className={styles.error}>
      <ErrorContent reset={reset} />
    </main>
  )
}
