import { renderHook, act } from '@testing-library/react'
import { useMobileMenu } from './use-mobile-menu'

describe('useMobileMenu', () => {
  it('должен возвращать начальное состояние с закрытым меню', () => {
    const { result } = renderHook(() => useMobileMenu())

    expect(result.current.isMenuOpen).toBe(false)
    expect(result.current.toggleMenu).toBeDefined()
    expect(result.current.closeMenu).toBeDefined()
  })

  it('должен открывать меню при вызове toggleMenu', () => {
    const { result } = renderHook(() => useMobileMenu())

    expect(result.current.isMenuOpen).toBe(false)

    act(() => {
      result.current.toggleMenu()
    })

    expect(result.current.isMenuOpen).toBe(true)
  })

  it('должен закрывать меню при повторном вызове toggleMenu', () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => {
      result.current.toggleMenu()
    })

    expect(result.current.isMenuOpen).toBe(true)

    act(() => {
      result.current.toggleMenu()
    })

    expect(result.current.isMenuOpen).toBe(false)
  })

  it('должен закрывать меню при вызове closeMenu', () => {
    const { result } = renderHook(() => useMobileMenu())

    // Открываем меню
    act(() => {
      result.current.toggleMenu()
    })

    expect(result.current.isMenuOpen).toBe(true)

    // Закрываем меню
    act(() => {
      result.current.closeMenu()
    })

    expect(result.current.isMenuOpen).toBe(false)
  })

  it('должен закрывать меню при вызове closeMenu, даже если меню уже закрыто', () => {
    const { result } = renderHook(() => useMobileMenu())

    expect(result.current.isMenuOpen).toBe(false)

    act(() => {
      result.current.closeMenu()
    })

    expect(result.current.isMenuOpen).toBe(false)
  })

  it('должен корректно работать при множественных переключениях', () => {
    const { result } = renderHook(() => useMobileMenu())

    // Открываем
    act(() => {
      result.current.toggleMenu()
    })
    expect(result.current.isMenuOpen).toBe(true)

    // Закрываем через toggle
    act(() => {
      result.current.toggleMenu()
    })
    expect(result.current.isMenuOpen).toBe(false)

    // Открываем снова
    act(() => {
      result.current.toggleMenu()
    })
    expect(result.current.isMenuOpen).toBe(true)

    // Закрываем через closeMenu
    act(() => {
      result.current.closeMenu()
    })
    expect(result.current.isMenuOpen).toBe(false)
  })

  it('должен сохранять стабильные ссылки на функции', () => {
    const { result, rerender } = renderHook(() => useMobileMenu())

    const initialToggle = result.current.toggleMenu
    const initialClose = result.current.closeMenu

    rerender()

    expect(result.current.toggleMenu).toBe(initialToggle)
    expect(result.current.closeMenu).toBe(initialClose)
  })
})
