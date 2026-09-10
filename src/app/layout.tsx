import type { Metadata } from "next";
import { Rajdhani, JetBrains_Mono } from "next/font/google";
import "../styles/tokens.css";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import StatusBar from "./components/StatusBar";
import styles from "./layout.module.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P0R7F0L10-MK1",
  description: "Arquivo pessoal de Lorenzo Ribeiro Fernandes — desenvolvedor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${rajdhani.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className={styles.shell}>
          <Sidebar />
          <main className={styles.content}>{children}</main>
          <StatusBar />
        </div>
      </body>
    </html>
  );
}
