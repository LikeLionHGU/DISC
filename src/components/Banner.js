import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
`;

const Question = styled.h1`
  text-align: center;
  font-family: "Jua", serif;
  margin-top: ${props => props.marginTop};
  font-size: 50px;
  color: black;
  font-weight: 100;
`;

const ArrowBotton = styled.button`
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
`;

const Option = [
  ["단호한", "공격적인", "직접적인", "거친", "대담한", "경쟁심 강한", "위험을 감수하는"],
  ["적극적인", "감성적인", "활발한", "관계 지향적인", "충동적인", "표현하는", "말하기 좋아하는"],
  ["얌전한", "협조적인", "동의하는", "부드러운", "친절한", "지원하는", "온화하고 완만한"],
  ["눈치 있는", "한결같은", "정밀한", "완벽을 선호하는", "신중한", "엄밀한", "사실에 기반을 둔"]
];

const Background = styled.div`
  
`;

function Banner() {
  const [check, setCheck] = useState(0);
  const [count, setCount] = useState([100, 100, 100, 100]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [maxIndex, setMaxIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || { userName: "익명" };

  function checkMax(array) {
    let maxIndex = 0;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
        maxIndex = i;
      }
    }
    setMaxIndex(maxIndex);
  }

  const onOptionClick = (option_element, num) => {
    setLoading(false);
    setIndex(currentIndex => currentIndex + 1);
    setCheck(num);
    switch (num) {
      case 1:
        setCount(current => [current[0], current[1] - 10, current[2] - 10, current[3] - 10]);
        break;
      case 2:
        setCount(current => [current[0] - 10, current[1], current[2] - 10, current[3] - 10]);
        break;
      case 3:
        setCount(current => [current[0] - 10, current[1] - 10, current[2], current[3] - 10]);
        break;
      case 4:
        setCount(current => [current[0], current[1] - 10, current[2] - 10, current[3]]);
        break;
      default:
        break;
    }

    setTimeout(() => {
      checkMax(count);
    }, 0);
  };

  const onBackClick = () => {
    setIndex(currentIndex => currentIndex - 1);
    switch (check) {
      case 1:
        setCount(current => [current[0], current[1] + 10, current[2] + 10, current[3] + 10]);
        break;
      case 2:
        setCount(current => [current[0] + 10, current[1], current[2] + 10, current[3] + 10]);
        break;
      case 3:
        setCount(current => [current[0] + 10, current[1] + 10, current[2], current[3] + 10]);
        break;
      case 4:
        setCount(current => [current[0], current[1] + 10, current[2] + 10, current[3]]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
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
          console.log(count)
          break;
        default:
          break;
      }
    }
  }, [maxIndex, index, navigate, userName]);

  return (
    <div>
      <Background>
        <Question marginTop="70px">자신과 가장 잘 맞는 키워드를 골라주세요!</Question>
        <Button
          marginTop="50px"
          marginBottom="30px"
          backColor="rgb(157, 230, 118)"
          onClick={() => onOptionClick(Option[0], 1)}
        >
          {Option[0][index]}
        </Button>
        <Button
          marginBottom="30px"
          backColor="rgb(243, 247, 147)"
          onClick={() => onOptionClick(Option[1], 2)}
        >
          {Option[1][index]}
        </Button>
        <Button
          marginBottom="30px"
          backColor="rgb(89, 121, 247)"
          onClick={() => onOptionClick(Option[2], 3)}
        >
          {Option[2][index]}
        </Button>
        <Button
          marginBottom="30px"
          backColor="rgb(243, 118, 239)"
          onClick={() => onOptionClick(Option[3], 4)}
        >
          {Option[3][index]}
        </Button>
        {loading ? null : (
          <ArrowBotton
            onClick={onBackClick}
            marginTop="10px"
            marginLeft="50px"
            backcolor="gray"
          >
            Back
          </ArrowBotton>
        )}
      </Background>
    </div>
  );
}

export default Banner;
