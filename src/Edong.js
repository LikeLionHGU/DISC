import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Edong.module.css";

const Edong = ({ setUserName: externalSetUserName }) => {
    const [userName, setUserName] = useState("");  // 내부에서 사용하는 setUserName
    const [values,setValues] = useState({password:""});
    const selectList=["Planner","Designer","Front-end","Back-end"];
    const [Selected,setSelected] = useState("");
    const navigate = useNavigate();  // navigate 추가

    const navigatePurchase = () => {
        setUserName(userName);  // 부모에서 전달받은 setUserName 사용
        navigate("/result1", { state: { userName } }); // 결과 페이지로 이동, result1말고 결과에 해당 페이지를 넣어야됨
    };


    return (
        <div>
            <div className={styles.box}>
            
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="이름 입력"
            /><br/>
            <input type="password"
                    name="password"
                    value={values.password}
                    onChange={(e) => setValues({...values, password: e.target.value})}
                    placeholder="비밀번호 입력"
             />
             <select onChange={(e)=> setSelected(e.target.value)} value={Selected}>
                {selectList.map((item) => (
                <option value={item} key={item}>
                {item}
            </option>
          ))}
        </select>
            <div className={styles.cbox}>
                <button onClick={navigatePurchase}>확인</button>
            </div>
            </div>
        </div>
    );
};

export default Edong;
