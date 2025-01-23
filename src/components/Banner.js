import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// 색상을 어둡게 만드는 함수
const darkenColor = (color, percent) => {
  const num = color.match(/\d+/g).map(Number);
  const r = Math.max(0, num[0] - (num[0] * percent) / 100);
  const g = Math.max(0, num[1] - (num[1] * percent) / 100);
  const b = Math.max(0, num[2] - (num[2] * percent) / 100);
  return `rgb(${r}, ${g}, ${b})`;
};

// 스타일링된 버튼
const Button = styled.button`
  background-color: ${props => props.backColor};
  display: block;
  margin: 0 auto;
  font-family: "Jua", serif;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  height: 100px;
  width: 550px;
  font-size: 30px;
  text-shadow: 1px 1px 2px white;
  color: black;
  border-width: 3px;
  border-radius: 10px; 
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${props => darkenColor(props.backColor, 20)};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${props => darkenColor(props.backColor, 40)};
    transform: scale(0.95);
  }
`;

const Question = styled.h1`
  text-align: center;
  font-family: "Jua", serif;
  margin-top: ${props => props.marginTop};
  font-size: 50px;
  color: black;
  font-weight: 100;
`;

const ArrowButton = styled.button`
  display: block;
  margin: 0 auto;
  font-family: "Jua", serif;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  height: 70px;
  width: 100px;
  font-size: 30px;
  text-shadow: 1px 1px 2px white;
  color: black;
  border-width: 3px;
  border-radius: 10px; 
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: gray;
    transform: scale(1.1);
  }

  &:active {
    background-color: darkgray;
    transform: scale(0.95);
  }
`;

const Option = [
  ["단호한", "공격적인", "직접적인", "거친", "대담한", "경쟁심 강한", "위험을 감수하는"],
  ["적극적인", "감성적인", "활발한", "관계 지향적인", "충동적인", "표현하는", "말하기 좋아하는"],
  ["얌전한", "협조적인", "동의하는", "부드러운", "친절한", "지원하는", "온화하고 완만한"],
  ["눈치 있는", "한결같은", "정밀한", "완벽을 선호하는", "신중한", "엄밀한", "사실에 기반을 둔"]
];

const Background = styled.div``;

function Banner() {
  const [count, setCount] = useState([100, 100, 100, 100]); // 점수
  const [index, setIndex] = useState(0); // 현재 질문 index
  const [maxIndex, setMaxIndex] = useState(0); // 최댓값 인덱스
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || { userName: "익명" };

  // 최대값을 가진 인덱스 찾기
  function checkMax(array) {
    let maxIdx = 0;
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxValue) {
        maxValue = array[i];
        maxIdx = i;
      }
    }
    setMaxIndex(maxIdx);
  }


  // count가 변경될 때마다 checkMax 실행
  useEffect(() => {
    checkMax(count);
  }, [count]);

  // 옵션 클릭 시 count 변경
  const onOptionClick = (option_element, num) => {
    setIndex(currentIndex => currentIndex + 1);
    setCount(prev => {
      const newCount = [...prev];
      switch (num) {
        case 1:
          newCount[1] -= 10;
          newCount[2] -= 10;
          newCount[3] -= 10;
          break;
        case 2:
          newCount[0] -= 10;
          newCount[2] -= 10;
          newCount[3] -= 10;
          break;
        case 3:
          newCount[0] -= 10;
          newCount[1] -= 10;
          newCount[3] -= 10;
          break;
        case 4:
          newCount[0] -= 10;
          newCount[1] -= 10;
          newCount[2] -= 10;
          break;
        default:
          break;
      }
      return newCount;
    });

  };

  // 이전 질문으로 돌아가기
  const onBackClick = () => {
    setIndex(currentIndex => currentIndex - 1);
  };

  // 마지막 질문을 다 선택하면 결과 페이지로 이동
  useEffect(() => {
        console.log("count" + count);

    if (index === Option[0].length) {
      switch (maxIndex) {
        case 0:
          navigate("/result1", { state: { userName } });
          break;
        case 1:
          navigate("/result2", { state: { userName } });
          break;
        case 2:
          navigate("/result3", { state: { userName } });
          break;
        case 3:
          navigate("/result4", { state: { userName } });
          console.log(count);
          break;
        default:
          break;
      }
    }
  }, [index, maxIndex, navigate, userName]);

  return (
    <div>
      <Background>
        <Question marginTop="70px">자신과 가장 잘 맞는 키워드를 골라주세요!</Question>

        {Option.map((opt, i) => (
          <Button
            key={i}
            marginBottom="30px"
            backColor={
              i === 0 ? "rgb(157, 230, 118)"
              : i === 1 ? "rgb(243, 247, 147)"
              : i === 2 ? "rgb(89, 121, 247)"
              : "rgb(243, 118, 239)"
            }
            onClick={() => onOptionClick(opt, i + 1)}
          >
            {opt[index]}
          </Button>
        ))}
        {index > 0 && (
          <ArrowButton

            onClick={onBackClick}
            marginTop="10px"
            marginLeft="50px"
            backcolor="gray"
          >
            Back
          </ArrowButton>
        )}
      </Background>
    </div>
  );
}

export default Banner;
