import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from "./ResultType4.module.css";

const ResultType4=() =>{
    const location = useLocation();
    const { userName } = location.state || { userName: "익명" }; // 기본값 설정
    return(
        <div>
        <div className={styles.pinkbox}>
            <div className={styles.text}>
            <div>{userName}님의 결과입니다.</div><br/>
                <br/>C는 신중형(Conscientiousness)으로 이 스타일의 소유자는 #전문적인 지식을 얻고 보여주며, #양질의 작업을 이행할 수 있는 상황에서 동기 부여받습니다.<br/>
                 #새로운 가정을 세워 #입증하는 것을 좋아하며 #정확성을 위해 다른 이들보다 더 #신중하고 #분석적이며 #체계적인 편이죠. 
            </div>
        </div>
        
        </div>
    )
}

export default ResultType4