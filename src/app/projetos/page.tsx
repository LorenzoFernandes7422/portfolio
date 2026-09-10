import styles from "../section.module.css";

export default function ProjetosPage() {
  return (
    <section className={styles.section}>
      <header className={styles.head}>
        <span className={styles.tag}>SEC-05</span>
        <h1>Projetos</h1>
      </header>
      <p className={styles.wip}>Em construção.</p>
    </section>
  );
}
