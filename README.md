# IT Party

> 📚 **Документация проекта** — Next.js проект с архитектурой Feature-Sliced Design

**Версия**: 1.0.0

---

## 📖 Оглавление документации

Документация организована как **книга с главами** для удобного последовательного чтения:

### Часть I: Начало работы

- **[Глава 1: Быстрый старт](./docs/01-quick-start.md)** 🚀
  Установка, запуск, конфигурация проекта

### Часть II: Архитектура

- **[Глава 2: Архитектурные решения](./docs/02-architecture.md)** 🏗️
  Обзор архитектуры, SOLID, паттерны проектирования

- **[Глава 3: FSD Принципы](./docs/03-fsd-principles.md)** 🎯
  Feature-Sliced Design методология, слои, правила зависимостей

- **[Глава 4: DI и Паттерны](./docs/04-di-and-patterns.md)** 🧩
  Dependency Injection, Strategy, Factory, Мапперы

### Часть III: Разработка

- **[Глава 5: Работа с API](./docs/05-api-guide.md)** 🌐
  BaseApiService, нормализация, типизация

- **[Глава 6: SEO Настройка](./docs/06-seo.md)** 🔍
  Метаданные, Open Graph, Structured Data, sitemap, robots.txt

---

## 🎯 Что это за проект?

IT Party — **эталонный проект** на Next.js с современной архитектурой Feature-Sliced Design. Этот проект демонстрирует лучшие практики разработки масштабируемых приложений.

### Ключевые особенности

✅ **Feature-Sliced Design** — чёткая архитектура с правилами зависимостей
✅ **Next.js App Router** — использование встроенного роутинга Next.js вместо слоя pages
✅ **SOLID принципы** — полное соответствие принципам ООП
✅ **Dependency Injection** — управление зависимостями через DI контейнер
✅ **Типизация TypeScript** — строгая типизация всего кода
✅ **DTO и Мапперы** — разделение слоёв данных
✅ **SSR (Server-Side Rendering)** — предзагрузка данных на сервере
✅ **SCSS** — стилизация через SCSS модули и глобальные стили
✅ **TypeScript Compiler** — проверка типов через `tsc`
✅ **Scroll Animations** — кастомная система анимаций при скролле без внешних библиотек
✅ **SEO Optimization** — комплексная SEO оптимизация с метаданными, Open Graph, Structured Data, sitemap
✅ **Mobile Navigation** — адаптивное гамбургер-меню для мобильных устройств
✅ **Error Pages** — глобальные страницы ошибок (404, 500) без header/footer для чистого UX
✅ **FSD Compliance** — 100% соответствие правилам Feature-Sliced Design архитектуры
✅ **Three.js Demo** — интерактивная 3D-сцена с WebGL, загрузка GLB-моделей (ToyCar), управление вращением мышью

---

## 📦 Технологии

### Frontend

- **Next.js 16** (App Router) — React фреймворк с SSR
- **TypeScript 5** — строгая типизация
- **React 19** — UI библиотека
- **SCSS** — стилизация с модулями

### Инструменты разработки

- **ESLint** — линтер для проверки кода
- **TypeScript Compiler (tsc)** — проверка типов
- **Husky** — Git hooks для pre-commit проверок

### Библиотеки

- **clsx** — работа с классами CSS
- **dayjs** — работа с датами
- **lodash-es** — утилиты
- **three** — 3D графика (WebGL), загрузка GLB/GLTF моделей

---

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка окружения

Создайте файл `.env.local` в корне проекта:

```bash
# Основной URL сайта (обязательно для production)
NEXT_PUBLIC_SITE_URL=https://it-party.ru

# Опционально: API URL
NEXT_PUBLIC_API_URL=https://api.example.com/api

# Опционально: SEO верификация
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code
```

### 3. Запуск dev-сервера

```bash
npm run dev
```

Проект будет доступен по адресу: `http://localhost:3000`

> 📚 **Подробнее**: [Глава 1: Быстрый старт](./docs/01-quick-start.md)

---

## 🏗️ Структура проекта

```
src/
├── app/                    # ⚙️ Next.js App Router (роутинг и SSR)
│   ├── three-demo/         # Страница демо Three.js (3D-сцена с моделью)
│   ├── layout.tsx         # Корневой layout с провайдерами
│   ├── page.tsx           # Главная страница
│   ├── sitemap.ts          # Автоматическая генерация sitemap.xml
│   └── styles/            # Глобальные стили
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── main.scss
│
├── widgets/               # 🧩 Виджеты (композиция features и entities)
│   ├── header/           # Header с навигацией и мобильным гамбургер-меню
│   ├── home-hero/        # Hero-секция главной страницы
│   ├── projects/         # Блок проектов
│   ├── project-detail-header/    # Навигация для страницы детализации проекта
│   ├── project-detail-blocks/    # Рендеринг блоков проекта
│   ├── project-detail-layout/   # Layout для страницы детализации проекта
│   ├── nextpage-detail/  # Виджет детализации проекта NextPage
│   ├── pixelforge-detail/ # Виджет детализации проекта PixelForge
│   ├── webcraft-detail/  # Виджет детализации проекта WebCraft
│   ├── clients/          # Блок клиентов (логотипы ведут на /three-demo)
│   ├── three-demo/       # Виджет 3D-сцены (Three.js, GLTFLoader, ToyCar.glb)
│   ├── analytics/        # Блок аналитики
│   ├── footer/           # Футер сайта
│   └── cookie-banner/    # Баннер cookies
│
├── features/              # ⚡ Функциональность (бизнес-логика)
│   ├── smooth-scroll/    # Плавная прокрутка для якорных ссылок
│   ├── mobile-menu/      # Мобильное меню с хуком useMobileMenu
│   ├── contact-form/     # Универсальная форма контактов с хуком useContactForm
│   └── webcraft-contact-form/ # Специализированная форма контактов для WebCraft
│
├── entities/               # 📊 Бизнес-сущности (данные + API)
│   └── project/          # Сущность проекта
│       ├── model/        # Типы Project, ProjectDetail, ProjectDetailBlock, Service, Stat
│       └── ui/           # UI компоненты для проектов
│           ├── nextpage-*/ # Компоненты для NextPage (header, hero, services, about, contact, footer)
│           ├── pixelforge-*/ # Компоненты для PixelForge (header, hero, services, about, contact, footer)
│           └── webcraft-*/ # Компоненты для WebCraft (header, hero, services, process, portfolio, stats, contact, footer)
│
└── shared/                 # 🔧 Переиспользуемый код
    ├── api/               # HTTP клиент, BaseApiService
    ├── config/            # Конфигурация
    │   └── seo.ts         # SEO конфигурация и генерация метаданных
    ├── lib/               # Утилиты, DI контейнер, хуки
    │   ├── dayjs.ts
    │   ├── lodash.ts
    │   ├── hooks/         # React хуки
    │   │   └── useScrollAnimation.ts  # Хук для анимаций при скролле
    │   └── structured-data.tsx  # JSON-LD схемы для SEO (Organization, WebSite, Breadcrumb, Service)
    └── ui/                # UI компоненты
        ├── page-loader/   # Компонент загрузки страницы
        ├── hero-block/    # Компонент hero-блока с изображением и заголовком
        ├── text-block/    # Компонент текстового блока
        ├── project-card/  # Компонент карточки проекта
        ├── error-content/ # Компонент для отображения ошибок 500
        ├── not-found-content/ # Компонент для отображения 404
        └── scroll-animation/  # Компонент анимаций при скролле
            ├── ui/        # UI компонент
            ├── model/     # Модель с типами
            └── index.ts   # Публичный API
```

> ⚠️ **Важно**: В этом проекте **не используется слой `pages`** из классической FSD архитектуры, так как Next.js 16 использует App Router, который уже предоставляет роутинг через папку `app/`. Страницы располагаются в `app/*/page.tsx`, что соответствует концепции слоя `pages` в FSD, но реализовано через механизм Next.js.

> 📚 **Подробнее**: [Глава 3: FSD Принципы](./docs/03-fsd-principles.md)

---

## 🧩 Архитектурные принципы

### Feature-Sliced Design

Проект следует методологии FSD — слои могут зависеть только от нижележащих:

```
app → widgets → features → entities → shared
```

**Особенности реализации:**
- Слой `app/` используется для Next.js App Router (роутинг, SSR, метаданные)
- Слоя `pages/` нет — его роль выполняет `app/` с файлами `page.tsx`
- Виджеты композируют features и entities
- Features содержат бизнес-логику
- Entities содержат бизнес-сущности и их API

### SOLID принципы

- **S** — Single Responsibility (единственная ответственность)
- **O** — Open/Closed (открыт для расширения, закрыт для модификации)
- **L** — Liskov Substitution (подстановка Барбары Лисков)
- **I** — Interface Segregation (разделение интерфейсов)
- **D** — Dependency Inversion (инверсия зависимостей через DI)

### Dependency Injection

```typescript
// ❌ Прямое создание зависимостей
const service = new MyService()

// ✅ Через DI контейнер
const service = resolveOr(TOKENS.MyService, () => new MyService())
```

> 📚 **Подробнее**: [Глава 2: Архитектурные решения](./docs/02-architecture.md)

---

## 🛠️ Команды для разработки

### Разработка

```bash
npm run dev              # Запуск dev-сервера
npm run build            # Production сборка
npm run start            # Запуск production сервера
```

### Качество кода

```bash
npm run lint             # Проверка кода (ESLint)
npm run type-check       # Проверка типов (tsc --noEmit)
```

---

## 📄 Страницы приложения

- **`/`** (Главная) — Главная страница приложения
  - **HomeHero** — Hero-секция с видео-фоном и заголовком
  - **Projects** — Блок с проектами компании
  - **Clients** — Блок с логотипами клиентов (15 компаний), клик по логотипу ведёт на `/three-demo`
  - **Analytics** — Блок с карточками аналитики (4 карточки)
  - **Footer** — Футер сайта с контактами и социальными сетями
  - **CookieBanner** — Баннер согласия на использование cookies

- **`/three-demo`** (Three.js Demo) — Демонстрация Three.js
  - **ThreeDemo** — интерактивная 3D-сцена с моделью ToyCar (GLB), вращение мышью
  - Динамическая загрузка (ssr: false), BEM-стили, переменные из палитры

- **`/projects/[slug]`** (Детализация проекта) — Страница детализации проекта
  - **ProjectDetailLayout** — Layout с поддержкой smooth scroll для специальных проектов
  - **ProjectDetailHeader** — Навигация с кнопкой "Назад к проектам"
  - **ProjectDetailBlocks** — Динамический рендеринг блоков проекта через блок-регистрацию
  - Поддержка различных типов проектов (NextPage, WebCraft, PixelForge) с уникальными блоками
  - Блок-регистрация на уровне страницы для соблюдения FSD архитектуры

---

## 📚 Дополнительные ресурсы

### Документация проекта

- [Быстрый старт](./docs/01-quick-start.md)
- [Архитектурные решения](./docs/02-architecture.md)
- [FSD Принципы](./docs/03-fsd-principles.md)
- [DI и Паттерны](./docs/04-di-and-patterns.md)
- [Работа с API](./docs/05-api-guide.md)
- [SEO Настройка](./docs/06-seo.md)
- [CHANGELOG](./docs/CHANGELOG.md)

### Внешние ресурсы

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Версия**: 1.0.0 | **License**: Private

---
