import styles from "../section.module.css";

export default function SobrePage() {
  return (
    <section className={styles.section}>
      <header className={styles.head}>
        <span className={styles.tag}>SEC-02</span>
        <h1>Sobre</h1>
      </header>
      <p className={styles.wip}>Em construção.</p>
    </section>
  );
}
