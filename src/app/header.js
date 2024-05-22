'use client'
import { useEffect } from "react"
import styles from "./Layout.module.css";
export default function Header() {
    useEffect(()=>{
        console.log(">>>>>");
    },[])
    return (
        <div>
            {/* <div className={styles.login}>
                <button className={styles.loginBtn}>로그인</button>
                <button>회원가입</button>
            </div> */}
            
            <div className={styles.login}>
                <span>
                이시현님 안녕하세요.
                </span>
                
                <button className={styles.logoutBtn}>로그아웃</button>
            </div> 
            <div>
            <h1 className={styles.main}>게시판 프로젝트</h1>
            
            </div>

        </div>
    );
}