import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Edong.module.css";

const Edong = ({ setUserName }) => { // ✅ 부모에서 전달받는 setUserName
    const [userName, setUserNameLocal] = useState("");
    const [values, setValues] = useState({ password: "" });
    const selectList = ["Planner", "Designer", "Front-end", "Back-end"];
    const [Selected, setSelected] = useState("");
    const navigate = useNavigate();

    const navigatePurchase = () => {
        if (typeof setUserName === "function") { // ✅ setUserName이 함수인지 확인
            setUserName(userName); 
        } else {
            console.error("setUserName is not a function");
        }
        navigate("/result1", { state: { userName, job: Selected } });
    };

    return (
        
        <div className={styles.box}>
            <div className={styles.container}>
                <h2>회원 정보 입력</h2>
                <div className={styles.font}>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserNameLocal(e.target.value)}
                    placeholder="이름 입력"
                />
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                    placeholder="비밀번호 입력"
                />
                <select onChange={(e) => setSelected(e.target.value)} value={Selected}>
                    <option value="">트랙을 선택하세요</option>
                    {selectList.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
                </div>
                <div className={styles.cbox}>
                    <button onClick={navigatePurchase}>확인</button>
                </div>
            </div>
        </div>
    );
};

export default Edong;
