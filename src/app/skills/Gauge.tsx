import styles from "./page.module.css";

// Medidor de 4 segmentos. Usado na linha da skill E no painel da escala (LevelScale)
// — por isso vive no próprio arquivo, em vez de dentro de um dos dois.
export default function Gauge({ level }: { level: number }) {
  return (
    <div className={styles.gauge}>
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className={n <= level ? `${styles.seg} ${styles.segOn}` : styles.seg}
        />
      ))}
    </div>
  );
}
