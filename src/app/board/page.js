import styles from "./BoardDetail.module.css";

export default function BoardDetail() {
    return (
        <main>
            <h2>게시판 상세 페이지</h2>
            <div className={styles.inputBox}>
                <span>글 번호 : </span><span> 1</span>
            </div>
            <div className={styles.inputBox}>
                <span>작성자 : </span><span> 이시현</span>
            </div>
            <div className={styles.inputBox}>
                <span>제목 : </span><span> 안녕하세요</span>
            </div>
            <div className={styles.inputBox}>
                <span>본문 : </span><span> 안녕하세요 첫 번째 글 게시물 입니다.</span>
            </div>
            <button>목록으로</button>
            <hr />
            <div className={styles.inputBox}>
                <div className={styles.col}>댓글</div><input />
                <button className={styles.btn}> 등록 </button>
            </div>
            <div className={styles.comment}>
                <div>
                    <span> 작성자 : </span><span> 이시현</span>
                </div>
                <div>
                    안녕 첫 댓글이야
                </div>
                <div className={styles.innerComments}>
                <div>
                    <span> 작성자 : </span><span> 이시현</span>
                </div>
                <div>
                    안녕 첫 댓글이야
                </div>
            </div>
            </div>
            <div className={styles.comment}>
                <div>
                    <span> 작성자 : </span><span> 이시현</span>
                </div>
                <div>
                    안녕 두번째 댓글이야
                </div>
            </div>
        </main>
    );
}
