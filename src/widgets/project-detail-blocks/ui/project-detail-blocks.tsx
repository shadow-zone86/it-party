import type { ReactNode } from 'react'
import type { ProjectDetail } from '@/entities/project/model/types'
import styles from './project-detail-blocks.module.scss'

interface ProjectDetailBlocksProps {
  /** Детали проекта с блоками */
  blocks: ProjectDetail['blocks']
  /** Функция для рендеринга блока (передается с уровня страницы) */
  renderBlock: (block: ProjectDetail['blocks'][0], index: number) => ReactNode
}

export function ProjectDetailBlocks({
  blocks,
  renderBlock,
}: ProjectDetailBlocksProps) {
  return (
    <article className={styles.blocks}>
      {blocks.map((block, index) => (
        <div key={`${block.type}-${index}`}>{renderBlock(block, index)}</div>
      ))}
    </article>
  )
}
