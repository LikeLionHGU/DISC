import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";

function Login () {
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const [currentUserName, setCurrentUserName] = useState(userName);
    async function postLoginData(){

        console.log("name: "+userName);
        console.log("Password: "+pwd);
        try{
            const response = await axios.post('https://one3th-front-api.onrender.com/typeTest/login',{
               name: userName,
               password:pwd,

            });
            console.log( response.data);
            window.localStorage.setItem("memberID", response.data.memberID);
            navigate("/option")
        } catch (error){
            console.log(error);
            alert("아이디 또는 비밀번호가 일치하지 않습니다");
        }
    }

    const navigatePurchase = () => {
            postLoginData(); //POST 보낸 거
            

    console.log("username: "+userName);
    };   

    useEffect(() => {
        /*const getUserName = async () => {
            const memberID = window.localStorage.getItem("memberID");
            console.log("memberID" + memberID);
            try{
                const getName = await axios.get("https://one3th-front-api.onrender.com/typeTest/userInfo/" + memberID);
                console.log(getName);
            } catch(error) {
                console.error(error)
            }
            }
            getUserName();*/
            

            
    })

    return (
        
        <div className={styles.box}>
            <div className={styles.container}>
                <h2>회원 로그인 ฅ՞ ❛‿˂̵ ՞ ✧*｡</h2>
                <div className={styles.font}>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="이름 입력"
                />
                <input
                    type="password"
                    name="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="비밀번호 입력"
                />
                </div>
                <div className={styles.cbox}>
                    <button onClick={navigatePurchase}>확인</button>
                </div>
            </div>
        </div>
    );
}
export default Login;