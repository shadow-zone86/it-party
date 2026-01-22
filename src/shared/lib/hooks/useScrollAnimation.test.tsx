import React from 'react'
import { renderHook, waitFor, act, render } from '@testing-library/react'
import { useScrollAnimation } from './useScrollAnimation'

// Мокируем IntersectionObserver
class IntersectionObserverMock {
  observe = jest.fn()
  disconnect = jest.fn()
  unobserve = jest.fn()
  takeRecords = jest.fn(() => [])
  root: Element | Document | null = null
  rootMargin = ''
  thresholds: ReadonlyArray<number> = []

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit
  ) {}
}

// Глобальная переменная для управления observer
let mockObserver: IntersectionObserverMock | null = null
let triggerIntersection: (entries: IntersectionObserverEntry[]) => void

beforeEach(() => {
  mockObserver = null
  triggerIntersection = () => {}

  // Мокируем IntersectionObserver
  global.IntersectionObserver = jest.fn(
    (
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit
    ) => {
      mockObserver = new IntersectionObserverMock(callback, options)
      triggerIntersection = (entries: IntersectionObserverEntry[]) => {
        callback(entries, mockObserver as unknown as IntersectionObserver)
      }
      return mockObserver as unknown as IntersectionObserver
    }
  ) as jest.Mock

  // Мокируем IntersectionObserverEntry
  global.IntersectionObserverEntry = class IntersectionObserverEntry {
    constructor(
      public boundingClientRect: DOMRectReadOnly,
      public intersectionRatio: number,
      public intersectionRect: DOMRectReadOnly,
      public isIntersecting: boolean,
      public rootBounds: DOMRectReadOnly | null,
      public target: Element,
      public time: number
    ) {}
  } as unknown as typeof IntersectionObserverEntry
})

afterEach(() => {
  jest.clearAllMocks()
  jest.useRealTimers()
  document.body.innerHTML = ''
})

describe('useScrollAnimation', () => {
  it('должен возвращать ref и isVisible', () => {
    const { result } = renderHook(() => useScrollAnimation())

    expect(result.current.ref).toBeDefined()
    expect(result.current.isVisible).toBe(false)
  })

  it('должен устанавливать isVisible в true, когда элемент становится видимым', async () => {
    const TestComponent = () => {
      const { ref, isVisible } = useScrollAnimation()
      return <div ref={ref} data-testid="test-element" data-visible={isVisible} />
    }

    const { getByTestId } = render(<TestComponent />)
    const element = getByTestId('test-element')

    // Ждем, пока observer будет создан
    await waitFor(() => {
      expect(mockObserver).toBeTruthy()
    })

    // Триггерим intersection с isIntersecting = true
    const entry = {
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 1,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: true,
      rootBounds: null,
      target: element,
      time: Date.now(),
    } as IntersectionObserverEntry

    act(() => {
      triggerIntersection([entry])
    })

    await waitFor(() => {
      expect(element.getAttribute('data-visible')).toBe('true')
    })
  })

  it('должен применять задержку (delay) перед установкой isVisible', async () => {
    jest.useFakeTimers()
    const TestComponent = () => {
      const { ref, isVisible } = useScrollAnimation({ delay: 100 })
      return <div ref={ref} data-testid="test-element" data-visible={isVisible} />
    }

    const { getByTestId } = render(<TestComponent />)
    const element = getByTestId('test-element')

    await waitFor(() => {
      expect(mockObserver).toBeTruthy()
    })

    const entry = {
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 1,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: true,
      rootBounds: null,
      target: element,
      time: Date.now(),
    } as IntersectionObserverEntry

    act(() => {
      triggerIntersection([entry])
    })

    // До истечения задержки isVisible должен быть false
    expect(element.getAttribute('data-visible')).toBe('false')

    // После истечения задержки
    act(() => {
      jest.advanceTimersByTime(100)
    })

    await waitFor(() => {
      expect(element.getAttribute('data-visible')).toBe('true')
    })
  })

  it('должен устанавливать isVisible в false, когда элемент скрывается и once = false', async () => {
    const TestComponent = () => {
      const { ref, isVisible } = useScrollAnimation({ once: false })
      return <div ref={ref} data-testid="test-element" data-visible={isVisible} />
    }

    const { getByTestId } = render(<TestComponent />)
    const element = getByTestId('test-element')

    await waitFor(() => {
      expect(mockObserver).toBeTruthy()
    })

    // Элемент становится видимым
    const visibleEntry = {
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 1,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: true,
      rootBounds: null,
      target: element,
      time: Date.now(),
    } as IntersectionObserverEntry

    act(() => {
      triggerIntersection([visibleEntry])
    })

    await waitFor(() => {
      expect(element.getAttribute('data-visible')).toBe('true')
    })

    // Элемент скрывается
    const hiddenEntry = {
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 0,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: false,
      rootBounds: null,
      target: element,
      time: Date.now(),
    } as IntersectionObserverEntry

    act(() => {
      triggerIntersection([hiddenEntry])
    })

    await waitFor(() => {
      expect(element.getAttribute('data-visible')).toBe('false')
    })
  })

  it('не должен изменять isVisible, когда элемент скрывается и once = true', async () => {
    const TestComponent = () => {
      const { ref, isVisible } = useScrollAnimation({ once: true })
      return <div ref={ref} data-testid="test-element" data-visible={isVisible} />
    }

    const { getByTestId } = render(<TestComponent />)
    const element = getByTestId('test-element')

    await waitFor(() => {
      expect(mockObserver).toBeTruthy()
    })

    // Элемент становится видимым
    const visibleEntry = {
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 1,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: true,
      rootBounds: null,
      target: element,
      time: Date.now(),
    } as IntersectionObserverEntry

    act(() => {
      triggerIntersection([visibleEntry])
    })

    await waitFor(() => {
      expect(element.getAttribute('data-visible')).toBe('true')
    })

    // Элемент скрывается
    const hiddenEntry = {
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 0,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: false,
      rootBounds: null,
      target: element,
      time: Date.now(),
    } as IntersectionObserverEntry

    act(() => {
      triggerIntersection([hiddenEntry])
    })

    // isVisible должен остаться true
    expect(element.getAttribute('data-visible')).toBe('true')
  })

  it('должен передавать правильные опции в IntersectionObserver', async () => {
    const options = {
      threshold: 0.5,
      rootMargin: '-100px',
    }

    const TestComponent = () => {
      const { ref } = useScrollAnimation(options)
      return <div ref={ref} data-testid="test-element" />
    }

    render(<TestComponent />)

    await waitFor(() => {
      expect(mockObserver).toBeTruthy()
    })

    expect(mockObserver?.options?.threshold).toBe(0.5)
    expect(mockObserver?.options?.rootMargin).toBe('-100px')
  })

  it('должен использовать значения по умолчанию, если опции не переданы', async () => {
    const TestComponent = () => {
      const { ref } = useScrollAnimation()
      return <div ref={ref} data-testid="test-element" />
    }

    render(<TestComponent />)

    await waitFor(() => {
      expect(mockObserver).toBeTruthy()
    })

    expect(mockObserver?.options?.threshold).toBe(0.1)
    expect(mockObserver?.options?.rootMargin).toBe('0px')
  })

  it('должен вызывать observe для элемента', async () => {
    const TestComponent = () => {
      const { ref } = useScrollAnimation()
      return <div ref={ref} data-testid="test-element" />
    }

    const { getByTestId } = render(<TestComponent />)
    const element = getByTestId('test-element')

    await waitFor(() => {
      expect(mockObserver?.observe).toHaveBeenCalledWith(element)
    })
  })

  it('должен вызывать disconnect при размонтировании', () => {
    const TestComponent = () => {
      const { ref } = useScrollAnimation()
      return <div ref={ref} data-testid="test-element" />
    }

    const { unmount } = render(<TestComponent />)

    unmount()

    expect(mockObserver?.disconnect).toHaveBeenCalled()
  })

  it('не должен создавать observer, если элемент не существует', () => {
    renderHook(() => useScrollAnimation())

    // Не присваиваем ref.current, поэтому observer не должен быть создан
    expect(mockObserver).toBeNull()
  })
})
