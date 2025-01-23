import React from 'react'
import { useLocation } from "react-router-dom";
import styles from "./ResultType1.module.css";

const ResultType1=() =>{
    const location = useLocation();
    const { userName } = location.state || { userName: "익명" }; // 기본값 설정

    return(
        <div>
        <div className={styles.greenbox}>
            <div className={styles.text}>
                <div>{userName}님의 결과입니다.</div><br/>
                D는 주도형(Dominance)으로 자신의 의견에 강하게 주장하는 편이며, #경쟁과 #성공에 동기부여됩니다.<br/>
                새로운 #도전을 받아 들이기 위해 늘 준비되어 있고, 목표한 #결과치를 #달성하는 것을 우선시하여 #의지가 강하고 #추진력과 #결단력이 있죠. <br/>
                하지만 주변으로부터 종종 #직설적이다 보니 까다롭다는 말도 들을 수 있어요.
            </div>
        </div>
        
        </div>
    )
}

export default ResultType1