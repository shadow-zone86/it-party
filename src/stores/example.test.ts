import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useExampleStore } from './example'

describe('useExampleStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with count 0', () => {
    const store = useExampleStore()
    expect(store.count).toBe(0)
  })

  it('should increment count', () => {
    const store = useExampleStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('should decrement count', () => {
    const store = useExampleStore()
    store.count = 5
    store.decrement()
    expect(store.count).toBe(4)
  })

  it('should handle multiple increments', () => {
    const store = useExampleStore()
    store.increment()
    store.increment()
    store.increment()
    expect(store.count).toBe(3)
  })

  it('should handle multiple decrements', () => {
    const store = useExampleStore()
    store.count = 10
    store.decrement()
    store.decrement()
    expect(store.count).toBe(8)
  })

  it('should handle increment and decrement together', () => {
    const store = useExampleStore()
    store.increment()
    store.increment()
    store.decrement()
    expect(store.count).toBe(1)
  })
})
