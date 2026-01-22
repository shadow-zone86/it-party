import { ProjectCard } from '@/shared/ui/project-card'
import { ScrollAnimation } from '@/shared/ui/scroll-animation'
import { PROJECTS } from '../config/constants'
import type { Project } from '../model/types'
import styles from './projects.module.scss'

export function Projects() {
  return (
    <section className={styles.projects}>
      <ScrollAnimation animation="fade-up" delay={0}>
        <h2 className={styles.projects__title}>Наши проекты</h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={100}>
        <p className={styles.projects__description}>
          Обеспечиваем компании лучшими техническими и дизайн-решениями,
          создавая digital-проекты.
        </p>
      </ScrollAnimation>
      <div className={styles.projects__grid}>
        {PROJECTS.map((project: Project, index) => (
          <ScrollAnimation
            key={project.id}
            animation="zoom-in-up"
            delay={200 + index * 150}
          >
            <ProjectCard
              companyName={project.companyName}
              projectName={project.projectName}
              description={project.description}
              tags={project.tags}
              imageSrc={project.imageSrc}
              imageAlt={project.projectName}
            />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
