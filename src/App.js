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

  console.log(`dataList`, dataList)
  
  return (
    <Container>
      <FilterContainer>
        <Filter1>
          <InputDiv>
            <input onChange={checkVal} value="과일" type="checkbox" />
            <span>과일</span>
          </InputDiv>
          <InputDiv>
            <input onChange={checkVal} value="동물" type="checkbox" />
            <span>동물</span>
          </InputDiv>
          <InputDiv>
            <input onChange={checkVal} value="견과류" type="checkbox" />
            <span>견과류</span>
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
            <input onChange={checkVal} value="가볍다" type="checkbox" />
            <span>가볍다</span>
          </InputDiv>
        </Filter2>
      </FilterContainer>
      <CardList>
        {dataList?.map((data) => 
          <Card>{data.name}</Card>
        )}
      </CardList>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const FilterContainer = styled.div`
  display: flex;

  margin-bottom: 40px;
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
  }
`;

const CardList = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 100px;
  height: 80px;

  margin: 0 10px;

  border-radius: 16px;

  text-align: center;

  font-size: 18px;
  font-weight: 600;
  line-height: 4.2;

  background-color: green;

  color: #fff;
`;