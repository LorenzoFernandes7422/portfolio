// ProjectsPage — Server Component. A interatividade fica isolada dentro
// de <ProjectGallery>; este arquivo e o ProjectCard nunca precisam de 'use client'.

import styles from "./page.module.css";
import ProjectGallery from "../components/ProjectGallery";
import { projects, type Project } from "../content/projects";

function ProjectCard({
  title,
  stack,
  images,
  liveUrl,
  repoUrl,
  repoNote,
  en,
  pt,
}: Project) {
  const isPending = !images || images.length === 0;

  return (
    <li
      className={
        isPending ? `${styles.card} ${styles.cardPending}` : styles.card
      }
    >
      {isPending ? (
        <div className={styles.placeholder}>
          <span className={styles.status}>Coming soon</span>
        </div>
      ) : (
        <ProjectGallery images={images} alt={title} />
      )}

      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>

        {stack.length > 0 && (
          <ul className={styles.stack}>
            {stack.map((tech) => (
              <li key={tech} className={styles.tech}>
                {tech}
              </li>
            ))}
          </ul>
        )}

        {en && (
          <p className={styles.line}>
            <span className={styles.langTag}>EN</span>
            {en}
          </p>
        )}
        {pt && (
          <p className={`${styles.line} ${styles.lineAlt}`}>
            <span className={styles.langTag}>PT</span>
            {pt}
          </p>
        )}

        {!isPending && (
          <div className={styles.actions}>
            {liveUrl && (
              <a
                className={styles.btn}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
            {repoUrl && (
              <a
                className={styles.btn}
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            )}
            {repoNote && <span className={styles.note}>{repoNote}</span>}
          </div>
        )}
      </div>
    </li>
  );
}

export default function ProjectsPage() {
  const shippedCount = projects.filter(
    (p) => p.images && p.images.length > 0
  ).length;

  return (
    <section className={styles.section}>
      <header className={styles.head}>
        <span className={styles.tag}>SEC-04</span>
        <h1>Projects</h1>
        <span className={styles.stat}>
          {String(shippedCount).padStart(2, "0")} SHIPPED
        </span>
      </header>

      <ul className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}
