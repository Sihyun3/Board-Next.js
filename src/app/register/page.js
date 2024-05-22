import styles from "./Register.module.css";


export default function Register() {
    return (
        <main>
            <h2>회원 가입 페이지</h2>
            <div className={styles.inputBox}>
                <div className={styles.col} > 아이디 : </div><input />
                <button className={styles.check}>중복 확인</button>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.col}>비밀번호 : </div><input type="password" />
            </div>
            <div className={styles.inputBox}>
                <div className={styles.col}>비밀번호 확인: </div><input type="password" />
            </div>
            <div className={styles.inputBox}>
                <div className={styles.col}>생년월일 : </div><input type="password" />
            </div>
            <button>회원 가입</button>
        </main>
    );
}