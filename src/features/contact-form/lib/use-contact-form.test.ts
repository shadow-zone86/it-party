import { renderHook, act, waitFor } from '@testing-library/react'
import { useContactForm } from './use-contact-form'

describe('useContactForm', () => {
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
    const { result } = renderHook(() => useContactForm())

    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.showMessage).toBe(false)
    expect(result.current.handleSubmit).toBeDefined()
  })

  it('должен устанавливать isSubmitting в true при вызове handleSubmit', () => {
    const { result } = renderHook(() => useContactForm())

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

  it('должен сбрасывать форму после отправки', async () => {
    const { result } = renderHook(() => useContactForm())

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

    // Ждем завершения первого таймаута (1000ms)
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => {
      expect(resetMock).toHaveBeenCalled()
    })
  })

  it('должен устанавливать isSubmitting в false и showMessage в true после отправки', async () => {
    const { result } = renderHook(() => useContactForm())

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

    // Ждем завершения первого таймаута (1000ms)
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => {
      expect(result.current.isSubmitting).toBe(false)
      expect(result.current.showMessage).toBe(true)
    })
  })

  it('должен скрывать сообщение через 3 секунды после показа', async () => {
    const { result } = renderHook(() => useContactForm())

    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        reset: jest.fn(),
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    // Завершаем первый таймаут (1000ms) - форма отправлена
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => {
      expect(result.current.showMessage).toBe(true)
    })

    // Ждем второй таймаут (3000ms) - сообщение должно скрыться
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    await waitFor(() => {
      expect(result.current.showMessage).toBe(false)
    })
  })

  it('должен корректно обрабатывать полный цикл отправки формы', async () => {
    const { result } = renderHook(() => useContactForm())

    const resetMock = jest.fn()
    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        reset: resetMock,
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    // Начальное состояние
    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.showMessage).toBe(false)

    // Отправка формы
    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    expect(result.current.isSubmitting).toBe(true)
    expect(result.current.showMessage).toBe(false)

    // После 1000ms - форма отправлена
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => {
      expect(result.current.isSubmitting).toBe(false)
      expect(result.current.showMessage).toBe(true)
      expect(resetMock).toHaveBeenCalled()
    })

    // После еще 3000ms - сообщение скрыто
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    await waitFor(() => {
      expect(result.current.showMessage).toBe(false)
    })
  })

  it('должен предотвращать стандартное поведение формы', () => {
    const { result } = renderHook(() => useContactForm())

    const preventDefaultMock = jest.fn()
    const mockEvent = {
      preventDefault: preventDefaultMock,
      currentTarget: {
        reset: jest.fn(),
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    expect(preventDefaultMock).toHaveBeenCalled()
  })

  it('должен возвращать функцию handleSubmit', () => {
    const { result } = renderHook(() => useContactForm())

    expect(typeof result.current.handleSubmit).toBe('function')
  })
})
