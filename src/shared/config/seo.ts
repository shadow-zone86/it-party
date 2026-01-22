/**
 * SEO конфигурация для приложения
 * Централизованное место для всех SEO настроек
 */

import type { Metadata } from 'next'

export const siteConfig = {
  /** Основной URL сайта */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://it-party.ru',
  
  /** Название сайта */
  name: 'IT Party',
  
  /** Короткое название для мобильных устройств */
  shortName: 'IT Party',
  
  /** Описание сайта */
  description:
    'Создаем digital-продукт на базе стратегии, креатива и технологий. Разработка, UX/UI-дизайн и развитие айдентики для HR-платформ, веб-приложений и мобильных решений.',
  
  /** Ключевые слова */
  keywords: [
    'IT Party',
    'разработка',
    'дизайн',
    'UX/UI',
    'веб-разработка',
    'мобильная разработка',
    'digital-продукт',
    'HR-платформы',
    'веб-приложения',
    'креативное агентство',
  ],
  
  /** Автор */
  author: 'IT Party',
  
  /** Язык по умолчанию */
  defaultLanguage: 'ru',
  
  /** Локали */
  locale: 'ru_RU',
  
  /** Контакты */
  contact: {
    email: 'hello@design_gnk',
    phone: '+7 (495) 999 99 99',
  },
  
  /** Социальные сети */
  social: {
    twitter: '@itparty',
    facebook: 'itparty',
    instagram: 'itparty',
    linkedin: 'company/it-party',
  },
  
  /** Open Graph изображение по умолчанию */
  ogImage: '/og-image.jpg',
  
  /** Размеры OG изображения */
  ogImageWidth: 1200,
  ogImageHeight: 630,
  
  /** Twitter карточка тип */
  twitterCard: 'summary_large_image' as const,
  
  /** Twitter handle */
  twitterHandle: '@itparty',
  
  /** Google Site Verification (если есть) */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  
  /** Yandex Verification (если есть) */
  yandexVerification: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
}

/**
 * Генерация полного URL
 */
export function getAbsoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`
}

/**
 * Генерация метаданных для страницы
 */
export function generateMetadata({
  title,
  description,
  image,
  path = '/',
  noindex = false,
  nofollow = false,
}: {
  title?: string
  description?: string
  image?: string
  path?: string
  noindex?: boolean
  nofollow?: boolean
}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name
  const pageDescription = description || siteConfig.description
  const pageImage = image || getAbsoluteUrl(siteConfig.ogImage)
  const pageUrl = getAbsoluteUrl(path)

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords.join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: pageUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: siteConfig.twitterCard,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: pageUrl,
    },
    verification: {
      google: siteConfig.googleSiteVerification,
      yandex: siteConfig.yandexVerification,
    },
  } as Metadata
}
