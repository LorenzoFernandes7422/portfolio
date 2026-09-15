import styles from "./page.module.css";
import { skills, levels } from "../content/skills";

// Medidor de 4 segmentos. Usado na linha da skill E no painel da escala.
function Gauge({ level }: { level: number }) {
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

type SkillRowProps = {
  name: string;
  level: number;
};

function SkillRow({ name, level }: SkillRowProps) {
  return (
    <li className={styles.row}>
      <div className={styles.rowTop}>
        <span className={styles.skillName}>{name}</span>
        {/* níveis começam em 1, arrays em 0 -> level - 1 */}
        <span className={styles.levelLabel}>{levels[level - 1].label}</span>
      </div>

      <Gauge level={level} />
    </li>
  );
}

export default function SkillsPage() {
  return (
    <section className={styles.section}>
      <header className={styles.head}>
        <span className={styles.tag}>SEC-02</span>
        <h1>Skills</h1>

        {/* botão (!) + painel da escala. <details> cuida do abre/fecha, sem JS. */}
        <details className={styles.scale}>
          <summary className={styles.infoBtn} aria-label="Level scale">
            !
          </summary>

          <div className={`${styles.scalePanel} corner-frame`}>
            {levels.map((lv) => (
              <div key={lv.value} className={styles.scaleItem}>
                <div className={styles.scaleTop}>
                  <Gauge level={lv.value} />
                  <span className={styles.scaleLabel}>{lv.label}</span>
                </div>
                <p className={styles.scaleLine}>
                  <span className={styles.scaleTag}>EN</span>
                  {lv.en}
                </p>
                <p className={`${styles.scaleLine} ${styles.scaleLineAlt}`}>
                  <span className={styles.scaleTag}>PT</span>
                  {lv.pt}
                </p>
              </div>
            ))}
          </div>
        </details>
      </header>

      <div className={styles.grid}>
        {/* map de fora: uma categoria -> um painel */}
        {skills.map((group) => (
          <div key={group.category} className={`${styles.panel} corner-frame`}>
            <div className={styles.panelHead}>
              <h2 className={styles.panelTitle}>{group.category}</h2>
              <span className={styles.count}>{group.items.length} items</span>
            </div>

            {/* map de dentro: um item -> uma linha */}
            <ul className={styles.list}>
              {group.items.map((skill) => (
                <SkillRow key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
