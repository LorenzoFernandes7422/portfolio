import styles from "./page.module.css";
import { skills, levels } from "../content/skills";
import Gauge from "./Gauge";
import LevelScale from "./LevelScale";

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

        <LevelScale levels={levels} />
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
