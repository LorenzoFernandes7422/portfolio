import Image from "next/image";
import styles from "./page.module.css";
import { certificates, type Certificate } from "../content/certificates";

function CertificateCard({
  id,
  title,
  issuer,
  date,
  hours,
  image,
  file,
  verifyUrl,
  verifyCode,
  status,
  en,
  pt,
}: Certificate) {
  const isPending = status === "in-progress";

  return (
    <li
      className={
        isPending
          ? `${styles.record} ${styles.recordPending}`
          : `${styles.record} corner-frame`
      }
    >
      <div className={styles.thumb}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.thumbImg}
        />
      </div>

      <div className={styles.body}>
        <span className={styles.recordId}>{id.toUpperCase()}</span>

        <h2 className={styles.title}>{title}</h2>

        {isPending ? (
          <span className={styles.status}>In progress</span>
        ) : (
          <div className={styles.meta}>
            {issuer && <span>{issuer}</span>}
            {date && <span>{date}</span>}
            {hours && <span>{hours}H</span>}
          </div>
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
            {file && (
              <a
                className={styles.btn}
                href={file}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            )}
            {verifyUrl && (
              <a
                className={styles.btn}
                href={verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify
              </a>
            )}
            {/* código impresso no documento, feito pra ser compartilhado —
                quem clicar em Verify pode precisar dele no formulário */}
            {verifyCode && (
              <span className={styles.code}>Code: {verifyCode}</span>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function CertificatesPage() {
  const doneCount = certificates.filter((c) => c.status === "done").length;

  return (
    <section className={styles.section}>
      <header className={styles.head}>
        <span className={styles.tag}>SEC-03</span>
        <h1>Certificates</h1>
        <span className={styles.stat}>
          {String(doneCount).padStart(2, "0")} RECORDS
        </span>
      </header>

      <ul className={styles.list}>
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} {...cert} />
        ))}
      </ul>
    </section>
  );
}
