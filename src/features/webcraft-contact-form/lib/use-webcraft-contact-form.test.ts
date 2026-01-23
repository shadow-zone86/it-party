import { renderHook, act, waitFor } from '@testing-library/react'
import { useWebCraftContactForm } from './use-webcraft-contact-form'

describe('useWebCraftContactForm', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })

  it('должен возвращать начальное состояние', () => {
    const { result } = renderHook(() => useWebCraftContactForm())

    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.showMessage).toBe(false)
    expect(result.current.messageType).toBe('success')
    expect(result.current.handleSubmit).toBeDefined()
  })

  it('должен устанавливать isSubmitting в true при вызове handleSubmit', () => {
    const { result } = renderHook(() => useWebCraftContactForm())

    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        reset: jest.fn(),
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    expect(result.current.isSubmitting).toBe(true)
    expect(result.current.showMessage).toBe(false)
    expect(mockEvent.preventDefault).toHaveBeenCalled()
  })

  it('должен устанавливать isSubmitting в false и showMessage в true после отправки', async () => {
    const { result } = renderHook(() => useWebCraftContactForm())

    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        reset: jest.fn(),
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    expect(result.current.isSubmitting).toBe(true)
    expect(result.current.showMessage).toBe(false)

    act(() => {
      jest.advanceTimersByTime(1500)
    })

    await waitFor(() => {
      expect(result.current.isSubmitting).toBe(false)
      expect(result.current.showMessage).toBe(true)
      expect(result.current.messageType).toBe('success')
    })
  })

  it('должен скрывать сообщение через 5 секунд после показа', async () => {
    const { result } = renderHook(() => useWebCraftContactForm())

    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        reset: jest.fn(),
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    act(() => {
      jest.advanceTimersByTime(1500)
    })

    await waitFor(() => {
      expect(result.current.showMessage).toBe(true)
    })

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    await waitFor(() => {
      expect(result.current.showMessage).toBe(false)
    })
  })

  it('должен сбрасывать форму после отправки', async () => {
    const { result } = renderHook(() => useWebCraftContactForm())

    const resetMock = jest.fn()
    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        reset: resetMock,
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    act(() => {
      jest.advanceTimersByTime(1500)
    })

    await waitFor(() => {
      expect(resetMock).toHaveBeenCalled()
    })
  })
})
