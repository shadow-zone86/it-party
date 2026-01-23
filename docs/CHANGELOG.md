# Changelog

Все значимые изменения в проекте будут документироваться в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
и этот проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [Unreleased]

### Added
- **Error pages without header/footer**: Добавлены глобальные страницы ошибок без header и footer
  - `global-not-found.tsx` - глобальная страница 404 без header/footer (использует experimental.globalNotFound)
  - `global-error.tsx` - глобальная страница ошибок без header/footer
  - Включена экспериментальная опция `globalNotFound: true` в `next.config.ts`
  - Создан отдельный layout для `projects/[slug]` без header/footer для страниц проектов и их ошибок
  - Обновлена страница `not-found.tsx` для проектов - использует те же стили, что и глобальная страница 404
  - Единый стиль для всех страниц ошибок: темный фон, градиентный заголовок 404, адаптивный дизайн

- **Mobile hamburger menu**: Реализовано полнофункциональное гамбургер-меню для мобильной версии
  - Гамбургер-кнопка с анимацией в крестик при открытии
  - Мобильное меню выезжает справа с плавной анимацией
  - Логотип располагается слева, меню справа на мобильных устройствах
  - Все пункты меню из header (КЕЙСЫ, УСЛУГИ, БАЗА РЕШЕНИЙ, КОНТАКТЫ) доступны в мобильном меню
  - Overlay для затемнения фона при открытом меню
  - Блокировка скролла страницы при открытом меню
  - Автоматическое закрытие меню при клике на ссылку или overlay
  - Hover-эффекты для пунктов меню
  - Адаптивный дизайн: десктопное горизонтальное меню, мобильное гамбургер-меню
- **Scroll animations system**: Добавлена кастомная система анимаций при скролле
  - Компонент `ScrollAnimation` в `shared/ui/scroll-animation`
  - Хук `useScrollAnimation` в `shared/lib/hooks/` с Intersection Observer API
  - Поддержка различных типов анимаций: fade-up, fade-down, fade-left, fade-right, fade-in, zoom-in, zoom-in-up, slide-up, slide-down
  - Настройки: delay, duration, threshold, rootMargin, once
  - Плавные анимации с cubic-bezier easing
  - Применено к виджетам: HomeHero, Projects, Clients, Analytics
  - Добавлены unit-тесты для хука `useScrollAnimation` с полным покрытием функциональности

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

- **SEO optimization**: Добавлена комплексная система SEO оптимизации
  - Централизованная конфигурация SEO в `shared/config/seo.ts` с настройками сайта, контактов, социальных сетей
  - Функция `generateMetadata()` для генерации метаданных страниц с поддержкой Open Graph и Twitter Cards
  - Улучшены метаданные в `app/layout.tsx` и `app/page.tsx` с использованием централизованной конфигурации
  - Structured Data (JSON-LD) компоненты в `shared/lib/structured-data.tsx`:
    - Organization Schema для информации о компании
    - WebSite Schema для информации о сайте
    - Breadcrumb Schema для навигации (готов к использованию)
    - Service Schema для страниц услуг (готов к использованию)
  - Автоматическая генерация sitemap.xml через `app/sitemap.ts` с поддержкой всех основных страниц
  - Robots.txt в `public/robots.txt` для управления индексацией поисковыми системами
  - Метаданные с canonical URLs, keywords, robots настройками для каждой страницы
  - Поддержка Google и Yandex верификации через переменные окружения
  - Полная документация по SEO в `docs/06-seo.md` с примерами использования и best practices

### Changed
- **Layout and page metadata**: Обновлены метаданные в `app/layout.tsx` и `app/page.tsx`
  - Использование централизованной SEO конфигурации через `generateMetadata()`
  - Добавлены Structured Data компоненты (Organization, WebSite) в layout
  - Улучшены метаданные главной страницы с уникальным title и description
  - Добавлен `generateViewport()` для корректной работы с Next.js 16

- **Scroll animations refactoring**: Рефакторинг системы анимаций при скролле для соответствия FSD архитектуре
  - Хук `useScrollAnimation` перемещен из `shared/lib/scroll-animation/` в `shared/lib/hooks/`
  - Компонент `ScrollAnimation` перемещен из `shared/lib/scroll-animation/` в `shared/ui/scroll-animation/`
  - Добавлена модель с типами (`model/types.ts`) для типизации анимаций
  - Обновлены импорты во всех виджетах (HomeHero, Projects, Clients, Analytics)
  - Улучшена структура экспортов через `index.ts`

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
  - Удален неиспользуемый импорт `Link` из `webcraft-footer.tsx`

### Removed
- **Old scroll-animation structure**: Удалена старая структура scroll-animation из `shared/lib/scroll-animation/`
  - `src/shared/lib/scroll-animation/ScrollAnimation.tsx`
  - `src/shared/lib/scroll-animation/useScrollAnimation.ts`
  - `src/shared/lib/scroll-animation/scroll-animation.module.scss`
  - `src/shared/lib/scroll-animation/index.ts`
  - Компоненты и хуки перемещены в правильные слои согласно FSD архитектуре

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
