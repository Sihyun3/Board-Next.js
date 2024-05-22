import styles from "./BoardEdit.module.css";

export default function BoardEdit() {
  return (
    <main>
        <h2>게시판 작성 페이지</h2>
        <div>
            <span>제목 : </span><input/>
        </div>
        <div>
            <span>본문 : </span><textarea></textarea>
        </div>
        <button>등록</button>
    </main>
  );
}
