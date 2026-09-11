import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SocialLinks from "../components/SocialLinks";
import { about } from "../content/about";

const ID_FIELDS = [
  { label: "Role", value: "Full Stack Web Developer" },
  { label: "Active since", value: "2021" },
];

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        {/* coluna de texto — esquerda */}
        <div className={styles.text}>
          <h1 className={styles.name}>Lorenzo Ribeiro Fernandes</h1>

          {/* EN — língua principal */}
          <div className={styles.lang}>
            <span className={styles.langTag}>EN</span>
            {about.en.bio.map((paragraph, i) => (
              <p key={i} className={styles.blurb}>
                {paragraph}
              </p>
            ))}
            <p className={styles.blurb}>
              Explore my <Link href="/skills">skills</Link>,{" "}
              <Link href="/certificates">certificates</Link> and{" "}
              <Link href="/projects">projects</Link>.
            </p>
          </div>

          {/* PT — secundária, mais apagada */}
          <div className={`${styles.lang} ${styles.langAlt}`}>
            <span className={styles.langTag}>PT</span>
            {about.pt.bio.map((paragraph, i) => (
              <p key={i} className={styles.blurb}>
                {paragraph}
              </p>
            ))}
            <p className={styles.blurb}>
              Confira minhas <Link href="/skills">skills</Link>,{" "}
              <Link href="/certificates">certificados</Link> e{" "}
              <Link href="/projects">projetos</Link>.
            </p>
          </div>

          {/* faixa de metadado — rodapé da coluna */}
          <dl className={styles.metaStrip}>
            {ID_FIELDS.map((item) => (
              <div className={styles.metaItem} key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}

            {/* terceira célula: ícones de contato, na mesma linha */}
            <div className={styles.metaItem}>
              <dt>Links</dt>
              <dd>
                <SocialLinks />
              </dd>
            </div>
          </dl>
        </div>

        {/* bloco da foto — direita. O Image com `fill` preenche ESTE div, não o hero todo. */}
        <div className={styles.photo}>
          <Image
            src="/lorenzo.png"
            alt="Lorenzo Ribeiro Fernandes"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
