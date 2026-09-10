'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const SECTIONS = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Skills", href: "/skills" },
  { label: "Certificados", href: "/certificados" },
  { label: "Projetos", href: "/projetos" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>P0R7F0L10-MK1</div>

      {SECTIONS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={
            item.href === pathname
              ? `${styles.link} ${styles.linkActive}`
              : styles.link
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
