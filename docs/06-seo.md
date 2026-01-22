# SEO Настройка 🔍

> Руководство по настройке и использованию SEO в проекте IT Party

---

## 📋 Обзор

Проект использует комплексный подход к SEO:

- ✅ **Метаданные** (title, description, keywords)
- ✅ **Open Graph** (для социальных сетей)
- ✅ **Twitter Cards** (для Twitter)
- ✅ **Structured Data** (JSON-LD для поисковых систем)
- ✅ **Sitemap.xml** (автоматическая генерация)
- ✅ **Robots.txt** (управление индексацией)

---

## ⚙️ Конфигурация

### Основной файл конфигурации

Все SEO настройки находятся в `src/shared/config/seo.ts`:

```typescript
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://it-party.ru',
  name: 'IT Party',
  description: '...',
  // ... другие настройки
}
```

### Переменные окружения

Создайте файл `.env.local` в корне проекта:

```bash
# Основной URL сайта (обязательно для production)
NEXT_PUBLIC_SITE_URL=https://it-party.ru

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code

# Yandex Webmaster Verification
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code
```

---

## 📄 Использование на страницах

### Базовая страница

```typescript
import { generateMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Название страницы',
  description: 'Описание страницы',
  path: '/page-path',
})
```

### Страница с изображением

```typescript
export const metadata: Metadata = generateMetadata({
  title: 'Проекты',
  description: 'Наши проекты',
  image: '/projects-og-image.jpg', // Путь к OG изображению
  path: '/projects',
})
```

### Страница без индексации

```typescript
export const metadata: Metadata = generateMetadata({
  title: 'Админ панель',
  description: 'Внутренняя страница',
  path: '/admin',
  noindex: true, // Не индексировать
  nofollow: true, // Не следовать по ссылкам
})
```

---

## 🏗️ Structured Data (JSON-LD)

### Organization Schema

Автоматически добавляется в `layout.tsx`:

```typescript
<OrganizationStructuredData />
```

Содержит информацию о компании:
- Название
- URL
- Логотип
- Контакты
- Социальные сети

### WebSite Schema

Автоматически добавляется в `layout.tsx`:

```typescript
<WebSiteStructuredData />
```

Содержит информацию о сайте и поиске.

### Breadcrumb Schema

Для страниц с хлебными крошками:

```typescript
import { BreadcrumbStructuredData } from '@/shared/lib/structured-data'

<BreadcrumbStructuredData
  items={[
    { name: 'Главная', url: '/' },
    { name: 'Проекты', url: '/projects' },
  ]}
/>
```

### Service Schema

Для страниц услуг:

```typescript
import { ServiceStructuredData } from '@/shared/lib/structured-data'

<ServiceStructuredData
  name="Веб-разработка"
  description="Разработка современных веб-приложений"
  provider="IT Party"
/>
```

---

## 🗺️ Sitemap

Sitemap автоматически генерируется Next.js из файла `src/app/sitemap.ts`.

Доступен по адресу: `https://it-party.ru/sitemap.xml`

### Добавление новых страниц

Отредактируйте `src/app/sitemap.ts`:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ... существующие страницы
    {
      url: `${baseUrl}/new-page`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

---

## 🤖 Robots.txt

Файл `public/robots.txt` управляет индексацией сайта.

### Настройка

```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://it-party.ru/sitemap.xml
```

---

## 🖼️ Open Graph изображения

### Требования к изображениям

- **Размер**: 1200x630px (рекомендуется)
- **Формат**: JPG или PNG
- **Вес**: до 1MB (оптимально 200-500KB)

### Размещение

Поместите OG изображения в `public/`:

```
public/
  ├── og-image.jpg (главная страница)
  ├── projects-og.jpg (страница проектов)
  └── ...
```

### Использование

```typescript
export const metadata: Metadata = generateMetadata({
  title: 'Проекты',
  image: '/projects-og.jpg', // Относительный путь от public/
})
```

---

## 🎯 Best Practices

### 1. Уникальные метаданные для каждой страницы

✅ **Правильно:**
```typescript
// Каждая страница имеет уникальные title и description
export const metadata: Metadata = generateMetadata({
  title: 'Проекты',
  description: 'Портфолио наших проектов...',
  path: '/projects',
})
```

❌ **Неправильно:**
```typescript
// Использование одинаковых метаданных на всех страницах
export const metadata: Metadata = generateMetadata({
  title: 'IT Party',
  description: 'IT Party application',
})
```

### 2. Оптимизация изображений для OG

✅ **Правильно:**
- Размер: 1200x630px
- Формат: JPG (для фото) или PNG (для графики)
- Вес: 200-500KB
- Четкий, читаемый текст на изображении

❌ **Неправильно:**
- Слишком маленькие изображения (< 600px)
- Слишком большие файлы (> 1MB)
- Нечитаемый текст

### 3. Использование Structured Data

✅ **Правильно:**
- Добавляйте только релевантные схемы
- Проверяйте валидность через Google Rich Results Test
- Обновляйте данные при изменении контента

❌ **Неправильно:**
- Добавление всех возможных схем "на всякий случай"
- Неточные или устаревшие данные

### 4. Sitemap и Robots.txt

✅ **Правильно:**
- Регулярно обновляйте sitemap при добавлении новых страниц
- Указывайте правильные приоритеты и частоту обновления
- Тестируйте robots.txt перед production

❌ **Неправильно:**
- Забывать обновлять sitemap
- Блокировать важные страницы в robots.txt

---

## ✅ Чеклист для production

### Перед запуском

- [ ] Установлен `NEXT_PUBLIC_SITE_URL` в `.env.local`
- [ ] Созданы OG изображения для всех основных страниц (1200x630px)
- [ ] Проверены все метаданные на уникальность
- [ ] Настроена Google Search Console
- [ ] Настроен Yandex Webmaster
- [ ] Добавлены коды верификации в `.env.local`

### Проверка технических файлов

- [ ] Проверен sitemap.xml (доступен по `/sitemap.xml`)
- [ ] Проверен robots.txt (доступен по `/robots.txt`)
- [ ] Все страницы имеют canonical URLs
- [ ] Structured Data валидны

### Проверка метаданных

- [ ] Проверены метаданные через [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Проверены Open Graph теги через [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Проверены Twitter Cards через [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Проверены метаданные через [Yandex Webmaster](https://webmaster.yandex.ru/)

### Производительность и SEO

- [ ] Проверена производительность через [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Проверен Lighthouse SEO score (минимум 90+)
- [ ] Все изображения оптимизированы
- [ ] Проверена мобильная версия

---

## 🔍 Проверка SEO

### Инструменты для проверки

1. **Google Search Console** — мониторинг индексации и производительности
   - URL: https://search.google.com/search-console
   - Проверка индексации страниц
   - Мониторинг ошибок
   - Анализ поисковых запросов

2. **Yandex Webmaster** — мониторинг в Яндексе
   - URL: https://webmaster.yandex.ru/
   - Проверка индексации
   - Анализ позиций
   - Проверка метаданных

3. **Google Rich Results Test** — проверка structured data
   - URL: https://search.google.com/test/rich-results
   - Валидация JSON-LD схем
   - Предпросмотр в поиске

4. **Facebook Sharing Debugger** — проверка Open Graph
   - URL: https://developers.facebook.com/tools/debug/
   - Проверка OG тегов
   - Очистка кеша Facebook

5. **Twitter Card Validator** — проверка Twitter Cards
   - URL: https://cards-dev.twitter.com/validator
   - Предпросмотр карточек
   - Проверка метаданных

6. **PageSpeed Insights** — производительность и SEO
   - URL: https://pagespeed.web.dev/
   - Анализ производительности
   - SEO рекомендации

7. **Lighthouse** — комплексная проверка
   - Встроен в Chrome DevTools
   - Проверка SEO, производительности, accessibility

### Команды для проверки

```bash
# Проверка типов
npm run type-check

# Проверка линтера
npm run lint

# Production сборка
npm run build

# Запуск production сервера для тестирования
npm run start
```

### Автоматическая проверка

Для автоматической проверки SEO можно использовать:

```bash
# Установка Lighthouse CLI (опционально)
npm install -g lighthouse

# Проверка SEO через Lighthouse
lighthouse https://it-party.ru --view --only-categories=seo
```

---

## 📊 Мониторинг SEO

### Ключевые метрики

1. **Индексация**
   - Количество проиндексированных страниц
   - Время индексации новых страниц
   - Ошибки индексации

2. **Позиции в поиске**
   - Позиции по ключевым запросам
   - Динамика изменений
   - Конкуренты

3. **Трафик из поиска**
   - Органический трафик
   - Популярные запросы
   - Конверсии

4. **Технические показатели**
   - Core Web Vitals
   - Время загрузки
   - Ошибки на страницах

### Рекомендации по мониторингу

- Проверяйте Google Search Console минимум раз в неделю
- Отслеживайте изменения позиций по ключевым запросам
- Реагируйте на ошибки индексации в течение 24 часов
- Анализируйте трафик из поисковых систем ежемесячно

---

## 🚀 Примеры использования

### Пример 1: Страница проекта

```typescript
// app/projects/[id]/page.tsx
import { generateMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await getProject(params.id)
  
  return generateMetadata({
    title: project.name,
    description: project.description,
    image: project.ogImage || '/projects-default.jpg',
    path: `/projects/${params.id}`,
  })
}
```

### Пример 2: Страница с хлебными крошками

```typescript
// app/services/web-development/page.tsx
import { BreadcrumbStructuredData } from '@/shared/lib/structured-data'

export default function WebDevelopmentPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Главная', url: '/' },
          { name: 'Услуги', url: '/services' },
          { name: 'Веб-разработка', url: '/services/web-development' },
        ]}
      />
      {/* Контент страницы */}
    </>
  )
}
```

### Пример 3: Страница услуги с Service Schema

```typescript
// app/services/[slug]/page.tsx
import { ServiceStructuredData } from '@/shared/lib/structured-data'

export default function ServicePage({ service }) {
  return (
    <>
      <ServiceStructuredData
        name={service.name}
        description={service.description}
        provider="IT Party"
      />
      {/* Контент страницы */}
    </>
  )
}
```

---

## 🔧 Расширенная настройка

### Кастомные метаданные для разных страниц

Если нужно переопределить метаданные для конкретной страницы:

```typescript
import { generateMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata({
    title: 'Специальная страница',
    path: '/special',
  }),
  // Дополнительные метаданные
  other: {
    'custom-meta': 'custom-value',
  },
}
```

### Динамические метаданные

Для динамических страниц используйте `generateMetadata` как async функцию:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await fetchPageData(params.id)
  
  return generateMetadata({
    title: data.title,
    description: data.description,
    image: data.image,
    path: `/page/${params.id}`,
  })
}
```

---

## 📚 Дополнительные ресурсы

### Официальная документация

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### Инструменты и сервисы

- [Google Search Console](https://search.google.com/search-console)
- [Yandex Webmaster](https://webmaster.yandex.ru/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Полезные статьи

- [SEO Best Practices for Next.js](https://nextjs.org/learn/seo/introduction-to-seo)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## ❓ FAQ

### Как добавить новую страницу в sitemap?

Отредактируйте `src/app/sitemap.ts` и добавьте новую запись в массив.

### Как изменить OG изображение для конкретной страницы?

Используйте параметр `image` в `generateMetadata()`:

```typescript
export const metadata: Metadata = generateMetadata({
  title: 'Страница',
  image: '/custom-og-image.jpg',
})
```

### Как отключить индексацию страницы?

Используйте параметры `noindex` и `nofollow`:

```typescript
export const metadata: Metadata = generateMetadata({
  title: 'Страница',
  noindex: true,
  nofollow: true,
})
```

### Где хранятся OG изображения?

В папке `public/`. Используйте относительные пути от корня public.

### Как проверить, что Structured Data работает?

Используйте [Google Rich Results Test](https://search.google.com/test/rich-results) и вставьте URL страницы.

---

**Версия**: 1.0.0 | **Последнее обновление**: 2026-01-22
