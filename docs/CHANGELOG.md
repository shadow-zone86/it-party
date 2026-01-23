# Changelog

Все значимые изменения в проекте будут документироваться в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
и этот проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [Unreleased]

### Added
- **Project detail widgets decomposition**: Полная декомпозиция виджетов детализации проектов с соблюдением FSD архитектуры
  - **NextPageDetail widget** (`widgets/nextpage-detail`): Декомпозирован на отдельные entity UI компоненты (Header, Hero, Services, About, Contact, Footer)
  - **PixelForgeDetail widget** (`widgets/pixelforge-detail`): Декомпозирован на отдельные entity UI компоненты (Header, Hero, Services, About, Contact, Footer)
  - **WebCraftDetail widget** (`widgets/webcraft-detail`): Декомпозирован на отдельные entity UI компоненты (Header, Hero, Services, Process, Portfolio, Stats, Contact, Footer)
  - Все константы вынесены в `config/constants.ts` на уровне виджетов и entities
  - Все типы вынесены в `model/types.ts` на уровне виджетов и entities
  - Использован паттерн "slot" для передачи features в entities через props (menu, form)
  - Удалены монолитные файлы стилей виджетов, стили распределены по entity компонентам

- **Mobile menu feature**: Создана переиспользуемая feature для мобильного меню
  - **MobileMenu feature** (`features/mobile-menu`): UI компонент и хук `useMobileMenu` для управления состоянием меню
  - Хук покрыт unit-тестами с полным покрытием функциональности
  - Используется в виджетах через паттерн "slot" для соблюдения FSD правил

- **Contact form features**: Созданы переиспользуемые features для форм контактов
  - **ContactForm feature** (`features/contact-form`): Универсальная форма контактов с хуком `useContactForm`
  - **WebCraftContactForm feature** (`features/webcraft-contact-form`): Специализированная форма для WebCraft с поддержкой select и messageType
  - Хуки покрыты unit-тестами с полным покрытием функциональности
  - Используются в виджетах через паттерн "slot" для соблюдения FSD правил

- **Project entity UI components**: Созданы переиспользуемые UI компоненты для проектов
  - **NextPage entity components** (`entities/project/ui/nextpage-*`): Header, Hero, Services, About, Contact, Footer
  - **PixelForge entity components** (`entities/project/ui/pixelforge-*`): Header, Hero, Services, About, Contact, Footer
  - **WebCraft entity components** (`entities/project/ui/webcraft-*`): Header, Hero, Services, Process, Portfolio, Stats, Contact, Footer
  - Все компоненты используют локальные константы из `config/constants.ts`
  - Все компоненты используют общие типы из `entities/project/model/types.ts`

- **Shared UI components for error pages**: Добавлены переиспользуемые компоненты для страниц ошибок
  - **ErrorContent component** (`shared/ui/error-content`): Компонент для отображения ошибок 500 с кнопкой повтора
  - **NotFoundContent component** (`shared/ui/not-found-content`): Компонент для отображения 404 с настраиваемыми title, subtitle, description
  - Используются в `app/error.tsx`, `app/global-error.tsx`, `app/not-found.tsx`, `app/global-not-found.tsx`, `app/projects/[slug]/not-found.tsx`

- **Common types in project entity**: Вынесены общие интерфейсы в `entities/project/model/types.ts`
  - **Service interface**: Общий интерфейс для услуг (icon: ReactNode, title: string, description: string)
  - **Stat interface**: Общий интерфейс для статистики (number: string, label: string)
  - Используются во всех entity компонентах services и stats
- **Project detail page widgets**: Рефакторинг страницы детализации проекта с соблюдением FSD архитектуры
  - **ProjectDetailHeader widget** (`widgets/project-detail-header`): Виджет навигации с кнопкой "Назад к проектам"
  - **ProjectDetailBlocks widget** (`widgets/project-detail-blocks`): Виджет для рендеринга блоков проекта через функцию-рендерер
  - **ProjectDetailLayout widget** (`widgets/project-detail-layout`): Виджет-обертка для layout и smooth scroll
  - Блок-регистрация на уровне страницы (`app/projects/[slug]/config/block-registry.tsx`) для соблюдения FSD правил
  - Убраны все нарушения FSD (widgets → widgets импорты)

- **Smooth scroll feature**: Вынесена функциональность плавной прокрутки в отдельную feature
  - **SmoothScroll feature** (`features/smooth-scroll`): Компонент для инициализации плавной прокрутки якорных ссылок
  - Используется в `widgets/project-detail-layout` для специальных проектов

- **Project entity**: Перенесены типы проекта в слой entities согласно FSD
  - **Project entity** (`entities/project/model/types.ts`): Типы `Project`, `ProjectDetail`, `ProjectDetailBlock`
  - Все импорты обновлены на `@/entities/project/model/types`
  - Удален старый файл `widgets/projects/model/types.ts`

- **Shared UI components**: Добавлены переиспользуемые компоненты для блоков проекта
  - **HeroBlock component** (`shared/ui/hero-block`): Компонент для отображения hero-блоков с изображением, заголовком и подзаголовком
  - **TextBlock component** (`shared/ui/text-block`): Компонент для отображения текстовых блоков
  - Компоненты используются в `app/projects/[slug]/config/block-registry.tsx` для соблюдения FSD правил
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
- **Project detail page simplification**: Упрощена страница детализации проекта `app/projects/[slug]/page.tsx`
  - Удален `generateStaticParams` (не используется в текущей реализации)
  - Упрощена логика рендеринга виджетов через прямое условие в JSX
  - Улучшена читаемость и поддерживаемость кода

- **Error and not-found pages refactoring**: Рефакторинг страниц ошибок для устранения дублирования
  - Все страницы ошибок используют общие компоненты из `shared/ui`
  - Упрощены стили страниц, оставлены только layout стили
  - Контентные стили перенесены в shared компоненты

- **File extensions fix**: Исправлены расширения файлов с JSX контентом
  - Файлы констант с JSX переименованы из `.ts` в `.tsx` для корректной обработки TypeScript
  - Затронуты файлы: `nextpage-services/config/constants.tsx`, `pixelforge-services/config/constants.tsx`, `webcraft-services/config/constants.tsx`
- **Project detail page refactoring**: Полный рефакторинг страницы детализации проекта `app/projects/[slug]/page.tsx`
  - Убран большой switch/case блок (18+ case веток) из страницы
  - Маппинг блоков перенесен на уровень страницы (`app/projects/[slug]/config/block-registry.tsx`)
  - Страница теперь использует только 3 виджета: `ProjectDetailLayout`, `ProjectDetailHeader`, `ProjectDetailBlocks`
  - Улучшена декомпозиция и читаемость кода
  - Соблюдены все принципы FSD архитектуры

- **FSD compliance fix**: Исправлено нарушение FSD в блок-регистрации
  - Удален импорт стилей из `widgets` в `app` слой (`block-registry.tsx`)
  - Блоки `hero` и `text` теперь используют компоненты из `shared/ui` (HeroBlock, TextBlock)
  - Удалены неиспользуемые стили из `widgets/project-detail-blocks`
  - Достигнуто 100% соответствие правилам FSD зависимостей
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
- **Monolithic widget styles**: Удалены монолитные файлы стилей виджетов
  - `widgets/nextpage-detail/ui/nextpage-detail.module.scss`
  - `widgets/pixelforge-detail/ui/pixelforge-detail.module.scss`
  - `widgets/webcraft-detail/ui/webcraft-detail.module.scss`
  - Стили распределены по соответствующим entity компонентам
- **NextPageSmoothScroll widget**: Удален дублирующий виджет `widgets/nextpage-smooth-scroll`
  - Функциональность перенесена в `features/smooth-scroll`
  - Устранено дублирование кода

- **Project types from widgets**: Удален файл `widgets/projects/model/types.ts`
  - Типы перенесены в `entities/project/model/types.ts` согласно FSD
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
