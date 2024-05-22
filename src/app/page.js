import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.board}>
        <div className={styles.idx}>인덱스</div>
        <div className={styles.title}>제목</div>
        <div className={styles.writer}>작성자</div>
        <div className={styles.date}>작성일자</div>
      </div>
      <div className={styles.board}>
        <div className={styles.idx}>1</div>
        <div className={styles.title}>테스트 제목</div>
        <div className={styles.writer}>이시현</div>
        <div className={styles.date}>2023.04.01</div>
      </div>
    </main>
  );
}
