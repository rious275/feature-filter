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

  // 체크값 true/false 구분
  const checkFilter = (e) => {
    const value = e.target.value;
    const text = e.target.nextElementSibling.innerText;
    const checked = e.target.checked;

    if (checked) {
      filtering(value, text);
    } else {
      remove(value, text);
    }
  }

  // 필터 메뉴 선택
  const filtering = (value, text) => {
    const list = [];

    if (value === "kinds") {
      const filterData = dataList.filter((data) => data[value] === text);
      list.push(...filterDataList, ...filterData);
      overlap(list);
    }
    else if (value === "material") {
      const filterData = dataList.filter((data) => data[value].includes(text));
      list.push(...filterDataList, ...filterData);
      overlap(list);
    }
  }

  // 필터 리스트 중복 요소 삭제
  const overlap = (list) => {
    const overlap = list.filter((data, idx, call) => idx === call.findIndex(t => t.id === data.id));
    setFilterDataList(overlap)
  }

  // 필터 리스트 요소 삭제
  const remove = (value, text) => {
    if (value === "kinds") {
      const filterData = filterDataList.filter((data) => data[value] !== text);
      setFilterDataList(filterData);
    }
    else if (value === "material") {
      const filterData = filterDataList.filter((data) => !data[value].includes(text));
      setFilterDataList(filterData);
    }
  }
  
  return (
    <Container>
      <FilterContainer>
        <Filter1>
          <InputDiv>
            <input onChange={checkFilter} value="kinds" type="checkbox" />
            <span>과일</span>
          </InputDiv>
          <InputDiv>
            <input onChange={checkFilter} value="kinds" type="checkbox" />
            <span>동물</span>
          </InputDiv>
          <InputDiv>
            <input onChange={checkFilter} value="kinds" type="checkbox" />
            <span>견과류</span>
          </InputDiv>
        </Filter1>
        <Filter2>
          <InputDiv>
            <input onChange={checkFilter} value="material" type="checkbox" />
            <span>예쁘다</span>
          </InputDiv>
          <InputDiv>
            <input onChange={checkFilter} value="material" type="checkbox" />
            <span>가볍다</span>
          </InputDiv>
          <InputDiv>
            <input onChange={checkFilter} value="material" type="checkbox" />
            <span>동그랗다</span>
          </InputDiv>
          <InputDiv>
            <input onChange={checkFilter} value="material" type="checkbox" />
            <span>단단함</span>
          </InputDiv>
        </Filter2>
      </FilterContainer>
      <CardList>
        {filterDataList.map((data) => 
          <Card key={data.id}>{data.name}</Card>
        )}
      </CardList>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  margin-top: 80px;
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
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 100px;
  height: 80px;
  margin: 0 10px 20px;

  border-radius: 16px;
  
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 4.2;

  background-color: green;
  color: #fff;
`;