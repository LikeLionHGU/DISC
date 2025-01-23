import dImage from "./d.png"; 
import iImage from "./i.png"; 
import sImage from "./s.png"; 
import cImage from "./c.png"; 
import dmImage from "./dm.png"; 
import imImage from "./im.png"; 
import smImage from "./sm.png"; 
import cmImage from "./cm.png"; 
import styles from "./result.module.css";
import { useState } from "react";

function Main() {
  /* 모달 */
  const [select, setSelect] = useState(null);

  const results = [
    {
      id: "d",
      keyword: "#경쟁 #결단력 #직설적",
      description:
        " The Winner, D 타입과 함께 일할 땐\n ✔️ 간단 명료하게 요점만 전하세요.\n✔️ 자율성에 니즈가 있는편! 존중해주세요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 그들이 자발적으로 시작할 수도록 해보세요.",
      img: dmImage,
    },
    {
      id: "i",
      keyword: "#인정 #긍정 #협력",
      description: 
       " The Enthusiast, i 타입과 함께 일한 땐\n✔️ 그들의 생각을 글로 표현할 수 있게 해주세요.\n✔️ 글로 쓰여진 세부정보를 공유해야해요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 성과를 냈을 땐 공개적으로 알려주세요.",
      img: imImage,
    },
    {
      id: "s",
      keyword: "#침착 #인내심 #일관성",
      description: " The Peacekeeper, S 타입과 함께 일할 땐\n✔️ 지속적으로 안정감을 느낄 수 있도록 해야해요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 진실하고 진정한 감사 표현을 잊지마세요.",
      img: smImage,
    },
    {
      id: "c",
      keyword: "#분석적 #체계적 #신중",
      description:  "The Analyst, C 타입과 함께 일할 땐\n ✔️ 탄탄한 논리로 대화해보세요. \n✔️ 위트와 재치로 훈훈한 분위기가 좋을 거에요.\n✔️ 규칙, 기대치, 목표값이 명확해야해요.\n✔️ 일을 시작할 때 착수할 수 있는 충분한 준비 시간을 주세요.",
      img: cmImage,
    },
  ];

  /* Click 함수(모달) */
  const Click = (result) => {
    setSelect(result);
  };

    /* close 함수(모달)*/
    const close = () => {
      setSelect(null); //close함수가 호출될때 setSelect를 null로 변경함. 즉 모달 창이 닫히도록함.
    };

    const imageMap = {
      d: dImage,
      i: iImage,
      s: sImage,
      c: cImage,
    };
  return (
    <div>
      <h1 className={styles.logo}>DISC 업무 타입</h1>
      <div className={styles.container}>
        {results.map((result) => (
           <img
           key={result.id}
           src={imageMap[result.id]}
           alt={result.id}
           className={styles.image}
           onClick={() => Click(result)}
         />
       ))}
      </div>
      {select && (
        <div className={styles.modalbg} onClick={close}>
          <div className={styles.modal}>
            <img
              src={select.img}
              alt={select.id}
              className={styles.modalImage}
            />
              <div className={styles.modaltitle}>
                <div className={styles.modalkey}>{select.keyword}</div>
                </div>

                <div className={styles.modaldescription}>
                  {select.description}
                </div>
                
                <div className={styles.cbox}>
                <button className={styles.close} onClick={close}>
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;