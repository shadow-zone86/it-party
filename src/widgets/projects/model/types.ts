export interface Project {
  id: string
  slug: string
  companyName: string
  projectName: string
  description: string
  tags: string[]
  imageSrc: string
}

/** Блок контента для детализации проекта */
export interface ProjectDetailBlock {
  /** Тип блока (hero, text, image, gallery, features, etc.) */
  type: string
  /** Данные блока (структура зависит от типа) */
  data: Record<string, unknown>
}

/** Детализация проекта */
export interface ProjectDetail {
  /** ID проекта */
  projectId: string
  /** Slug проекта */
  slug: string
  /** Метаданные для SEO */
  meta: {
    title: string
    description: string
  }
  /** Блоки контента (уникальные для каждого проекта) */
  blocks: ProjectDetailBlock[]
}
