import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Edong.module.css";
import axios from "axios";

const Edong = () => { // ✅ 부모에서 전달받는 setUserName
   
//    console.log("부모한테 전달받음: "+setUserName);
    const [userName, setUserNameLocal] = useState("");
    const [pwd, setPwd] = useState("");
    const selectList = ["Planner", "Designer", "Front-end", "Back-end"];
    const [Selected, setSelected] = useState("");
    const navigate = useNavigate();


    async function postData(){

        console.log("name: "+userName);
        console.log("track: "+Selected);
        console.log("Password: "+pwd);
        try{
            const response = await axios.post('https://one3th-front-api.onrender.com/typeTest/signUp',{
               name: userName,
               track: Selected,
               password:pwd,

            });
            console.log(response);
        } catch (error){
            console.log(error);
        }
    }

    const navigatePurchase = () => {
             setUserNameLocal(userName);  
            postData();

    console.log("username: "+userName);
        navigate("/login", {state: {userName, job: Selected}});
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
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
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
