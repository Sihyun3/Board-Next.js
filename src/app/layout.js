import { Inter } from "next/font/google";
import styles from "./Layout.module.css"
import Header from './header'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Board Project",
  description: "게시판 프로젝트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={styles.body}>
        <header className={styles.header}>
          <Header></Header>
        </header>
        {children}
      </body>
    </html>
  );
}
