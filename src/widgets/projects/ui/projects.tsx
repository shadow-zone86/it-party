import { ProjectCard } from '@/shared/ui/project-card'
import { PROJECTS } from '../config/constants'
import type { Project } from '../model/types'
import styles from './projects.module.scss'

export function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projects__title}>Наши проекты</h2>
      <p className={styles.projects__description}>
        Обеспечиваем компании лучшими техническими и дизайн-решениями,
        создавая digital-проекты.
      </p>
      <div className={styles.projects__grid}>
        {PROJECTS.map((project: Project) => (
          <ProjectCard
            key={project.id}
            companyName={project.companyName}
            projectName={project.projectName}
            description={project.description}
            tags={project.tags}
            imageSrc={project.imageSrc}
            imageAlt={project.projectName}
          />
        ))}
      </div>
    </section>
  )
}
