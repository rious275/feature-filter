import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import axios from 'axios';


function App() {
  const [ dataList, setDataList ] = useState([]);
  const [ filterDataList, setFilterDataList ] = useState([]);

  useEffect(() => {
    axios.get('data/requests.json')
    .then(res => setDataList(res.data.requests));
  }, [])

  const checkVal = (e) => {
    console.log(`e`, e.target.value);
  }
  
  return (
    <Container>
      <Filter1>
        <InputDiv>
          <input onChange={checkVal} value="사과" type="checkbox" />
          <span>사과</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="바나나" type="checkbox" />
          <span>바나나</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="고양이" type="checkbox" />
          <span>고양이</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="강아지" type="checkbox" />
          <span>강아지</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="원숭이" type="checkbox" />
          <span>원숭이</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="아몬드" type="checkbox" />
          <span>아몬드</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="호두" type="checkbox" />
          <span>호두</span>
        </InputDiv>
      </Filter1>
      <Filter2>
        <InputDiv>
          <input onChange={checkVal} value="예쁘다" type="checkbox" />
          <span>예쁘다</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="빨갛다" type="checkbox" />
          <span>빨갛다</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="작다" type="checkbox" />
          <span>작다</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="부드러움" type="checkbox" />
          <span>부드러움</span>
        </InputDiv>
        <InputDiv>
          <input onChange={checkVal} value="가볍다" type="checkbox" />
          <span>가볍다</span>
        </InputDiv>
      </Filter2>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Filter1 = styled.div`
  display: flex;

  margin: 0 10px;
  padding: 14px;

  border: 1px solid #000;
`;

const Filter2 = styled(Filter1)``;

const InputDiv = styled.div`
  margin-right: 15px;

  span {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    font-weight: 900;
  }
`;