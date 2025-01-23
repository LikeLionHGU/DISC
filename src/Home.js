import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const [name, setName] = useState(""); // 입력값 저장
  //const { setUserName } = useUser(); // UserContext에서 setUserName 가져오기
  const navigate = useNavigate();

  const navigateToPurchase = () => {
   navigate("./edong");
  };

  return (
    <div className={styles.home}>
      <button className={styles.button3} onClick={navigateToPurchase}>START</button>
    </div>
  );
}

  