import React from 'react'
import { useLocation } from 'react-router-dom'; // useLocation 임포트
import styles from "./ResultType2.module.css";

const ResultType2=() =>{
    const location = useLocation();
    const { userName } = location.state || { userName: "익명" }; // 기본값 설정
    return(
        <div>
        <div className={styles.yellowbox}>
            <div className={styles.text}>
            <div>{userName}님의 결과입니다.</div><br/>
                    i는 사교형(Influence)으로 이 유형은 속해 있는 사회로부터 #인정을 받기 원하며, 다양한 활동 및 관계에서 동기부여를 받습니다. <br/>
                    그들은 #행동력이 빠른 편이고, #긍정적인 에너지로 열정을 다해 #협력에 임하는 편이죠. <br/>
                    주변에서 #따뜻하며 #신뢰할 수 있는 사람이며, #자기주도적이라는 말을 자주 들을 거에요. 
            </div>
        </div>
        
        </div>
    )
}

export default ResultType2