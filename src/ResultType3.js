import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from "./ResultType3.module.css";


const ResultType3=() =>{
    const location = useLocation();
    const { userName } = location.state || { userName: "익명" }; // 기본값 설정
    return(
        <div>
        <div className={styles.bluebox}>
            <div className={styles.text}>
            <div>{userName}님의 결과입니다.</div><br/>
                <br/>S는 안정형(Steadiness)으로 #인내심이 있고 다른 사람을 돕는 것을 즐깁니다.<br/>
                그들은 #협력과 팀 성취에 자신의 협력이 도움이 됐을 때, 그리고 진심 어린 #감사를 받았을 때 시너지를 발휘되죠.<br/>
                #안정성 유지를 우선시하여 대체로 #침착하며, #예측 가능하고 #일관성 있는 동료로 평가받는 편입니다. 
            </div>
        </div>
        
        </div>
    )
}

export default ResultType3