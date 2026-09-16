"use client";

// LevelScale — o botão (!) + painel da escala de níveis.
// Fica dentro de skills/ (não em components/) porque só faz sentido aqui,
// diferente do ProjectGallery, que é genérico o bastante pra reusar em outro lugar.
//
// Continua sendo o mesmo <details>/<summary> nativo de antes — a única coisa
// nova é fechar sozinho quando clica fora, o que o <details> não faz de fábrica.

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import type { LevelInfo } from "../content/skills";
import Gauge from "./Gauge";

type LevelScaleProps = {
  levels: LevelInfo[];
};

export default function LevelScale({ levels }: LevelScaleProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const details = detailsRef.current;
      if (details && details.open && !details.contains(e.target as Node)) {
        details.open = false;
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <details ref={detailsRef} className={styles.scale}>
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
  );
}
