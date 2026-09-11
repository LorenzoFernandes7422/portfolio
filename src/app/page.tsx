import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <p className={styles.kicker}>P0R7F0L10-MK1 // PERSONAL ARCHIVE</p>
      <h1 className={styles.name}>Lorenzo Ribeiro Fernandes</h1>
      <p className={styles.role}>Full Stack Web Developer</p>
    </section>
  );
}
