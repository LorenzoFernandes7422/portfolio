"use client";

import { useState, useEffect } from "react";
import styles from "./StatusBar.module.css";

export default function StatusBar() {

  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clock = now ? now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--";
  
  return (
    <footer className={styles.bar}>
      <span className={styles.chip}>[ ARCHIVE ]</span>
      <span className={styles.clock}>{clock}</span>
      <span className={styles.id}>P0R7F0L10-MK1</span>
    </footer>
  );
}
