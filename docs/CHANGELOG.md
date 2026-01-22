# Changelog

Все значимые изменения в проекте будут документироваться в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
и этот проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [Unreleased]

### Added
- **Scroll animations system**: Добавлена кастомная система анимаций при скролле
  - Компонент `ScrollAnimation` в `shared/lib/scroll-animation`
  - Хук `useScrollAnimation` с Intersection Observer API
  - Поддержка различных типов анимаций: fade-up, fade-down, fade-left, fade-right, fade-in, zoom-in, zoom-in-up, slide-up, slide-down
  - Настройки: delay, duration, threshold, rootMargin, once
  - Плавные анимации с cubic-bezier easing
  - Применено к виджетам: HomeHero, Projects, Clients, Analytics

- **Homepage widgets**: Добавлены основные виджеты для главной страницы
  - **Cookie Banner widget** (`widgets/cookie-banner`): Баннер согласия на использование cookies
    - Расположен в левом нижнем углу экрана
    - Иконка печеньки из `/public/cookie.svg`
    - Кнопка "Окей" для закрытия баннера
    - Ссылка на политику конфиденциальности
    - Интегрирован в `app/layout.tsx` для отображения на всех страницах

  - **Clients widget** (`widgets/clients`): Блок с логотипами клиентов
    - Сетка 3x5 (15 логотипов компаний)
    - Логотипы черно-белые по умолчанию, раскрашиваются при наведении
    - Фиолетовый неоновый эффект при hover (цвет логотипа #9B59B6)
    - Адаптивная сетка: 5 колонок на десктопе, 3 на планшете, 2 на мобильном
    - Использует изображения `company-1.jpeg` до `company-15.jpeg`

  - **Analytics widget** (`widgets/analytics`): Блок с карточками аналитики
    - 4 карточки в сетке 2x2 (адаптивная: 1 колонка на мобильном)
    - Карточки с номерами (01-04), заголовками и описаниями
    - Кастомный курсор при наведении на карточки
    - Эффект подъема карточки при hover
    - Данные карточек в `config/constants.ts`

  - **Footer widget** (`widgets/footer`): Футер сайта
    - Двухколоночная структура (адаптивная: 1 колонка на мобильном)
    - Левая колонка: кнопка CTA "Начать проект", социальные кнопки (be, dp, tg, vk), копирайт, политика конфиденциальности
    - Правая колонка: логотип компании, слоган, контактная информация (email, телефон)
    - Большой слоган "creative digital production" на всю ширину экрана
    - Интегрирован в `app/layout.tsx` для отображения на всех страницах

- **PageLoader component**: Добавлен компонент загрузки страницы с анимацией прогресса
  - Компонент `PageLoader` в `shared/ui/page-loader`
  - Анимация закрашивания логотипа слева направо (0% → 75% → 100%)
  - Автоматическое скрытие после полной загрузки страницы
  - Использует логотип из `/public/logo.svg`
  - Интегрирован в `app/layout.tsx` для отображения при загрузке приложения

- **Migration to Next.js**: Проект переведен с Nuxt 3 на Next.js 16
  - Обновлена структура проекта под Next.js App Router
  - Все Vue компоненты удалены
  - Добавлена поддержка React 19
  - Настроен TypeScript Compiler (tsc) для проверки типов

- **SCSS styling**: Проект использует SCSS вместо Tailwind CSS
  - Глобальные стили в `src/app/globals.scss`
  - SCSS модули для компонентов
  - Использование переменных и миксинов из `src/app/styles/`

- **Documentation**: Добавлена полная документация проекта
  - 5 глав документации в папке `docs/`
  - Обновлен корневой README.md

### Changed
- **Homepage structure**: Обновлена структура главной страницы
  - Добавлены новые блоки: Projects, Clients, Analytics
  - Последовательность блоков: HomeHero → Projects → Clients → Analytics
  - Все блоки вынесены в отдельные виджеты по FSD архитектуре
  - Добавлены анимации появления элементов при скролле

- **Header improvements**: Улучшения в header компоненте
  - Логотип теперь является ссылкой на главную страницу
  - Добавлен hover эффект для логотипа

- **HomeHero responsive typography**: Адаптивная типографика в hero секции
  - Использование `clamp()` для автоматического масштабирования текста
  - Заголовки: от 2rem до 4.5rem в зависимости от ширины экрана
  - Описание: от 1rem до 1.5rem
  - Адаптивные отступы для разных размеров экрана

- **Project structure**: Обновлена структура проекта под Next.js
  - Удалены Nuxt-специфичные файлы
  - Обновлена структура под Next.js App Router
  - Удалены все Vue компоненты

- **Styling**: Переход с Tailwind CSS на SCSS
  - Удалены зависимости tailwindcss, tailwind-merge, autoprefixer, postcss
  - Все стили переведены на SCSS модули
  - Использование SCSS переменных и миксинов

- **Type checking**: Использование TypeScript Compiler вместо Nuxt typecheck
  - Добавлен скрипт `type-check: "tsc --noEmit"`
  - Настроен tsconfig.json для Next.js

### Fixed
- **Linter warnings**: Исправлены предупреждения ESLint
  - Исправлена проблема с ref в cleanup функции `home-hero` компонента
  - Сохранение значения ref в переменную для корректной работы cleanup

### Removed
- **Vue components**: Удалены все Vue компоненты
  - `src/shared/ui/PageLoader/PageLoader.vue`
  - `src/pages/index.vue`
  - `src/shared/ui/Button/Button.vue`
  - `src/app/layouts/default.vue`
  - `src/shared/ui/Button/Button.stories.ts`

- **Nuxt dependencies**: Удалены все Nuxt-специфичные зависимости
  - nuxt
  - vue
  - vue-router
  - pinia
  - @pinia/nuxt

- **Tailwind CSS**: Удалены все зависимости и конфигурация Tailwind
  - tailwindcss
  - tailwind-merge
  - autoprefixer
  - postcss
  - tailwind.config.ts
  - postcss.config.mjs

## [1.0.0] - 2026-01-22

### Added
- Базовая структура проекта на Next.js 16
- Feature-Sliced Design архитектура
- TypeScript 5 с строгой типизацией
- SCSS стилизация с модулями
- PageLoader компонент с анимацией прогресса
- TypeScript Compiler для проверки типов
- Документация проекта (5 глав)
- Git hooks через Husky
