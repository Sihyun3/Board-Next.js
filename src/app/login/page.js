import styles from "./Login.module.css";

export default function Login(){
    return(
        <main>
            <h2>로그인 페이지</h2>
            <div className={styles.inputBox}>
                <div className={styles.col}>아이디 : </div><input className={styles.input}/>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.col}>비밀번호 : </div><input className={styles.input} type="password"/>
            </div>
            <button>로그인</button>
        </main>
    );
}