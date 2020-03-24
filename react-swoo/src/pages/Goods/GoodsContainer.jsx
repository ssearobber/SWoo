import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoodsPresentional from './GoodsPresentional';

const GoodsContainer = () => {
  const initialState = [];
  const [posts, setPosts] = useState(initialState); //posts,setPosts의 역할을 잘 모르겠음.

  //componentdidmount 렌더링 후 한번만, componentwillmount 렌더링 할 때마다 계속불러 옴
  useEffect(() => {
    fetchGoods();
  }, []); //1.[] 안에 값이 변경이 있을 때, 렌더링 해라!! 2.[]만 있을 때는 componentdidmount 같다. 3. 만약 []강 없을 경우 렌더링할 때마다 계속불러옴  4.[]엔어 변수를 지정해서 해당 값만 변할 경우 렌더링 할 수도 있음. 예) [posts]면 posts값이 변할 때마다 레던링 하게됨

  const fetchGoods = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    const results = response.data.results;
    setPosts(results); //setPosts(results);을 하는 이유를 정확히 모르겠음.
  };

  //posts값이 빈배열일 경우 로딩으로 표시.
  if (posts === initialState) {
    return <div>Loading...</div>;
  }

  return <GoodsPresentional posts={posts} />;
};

export default GoodsContainer;
