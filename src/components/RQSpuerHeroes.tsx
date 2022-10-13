import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

type RqHeroesType = {
  name: string;
  alterEgo: string;
};

const RQSuperHeroes = () => {
  // 데이터 불러오는 함수
  const fetchHeroes = () => {
    return axios.get(`http://localhost:4000/superheroes`);
  };

  // useQuery 는 필수로 2개 arguments 가 필요 (key값, 함수)
  const { isLoading, data, isFetching } = useQuery("super-heroes", fetchHeroes, {
    // 응답받은 데이터를 자동으로 캐시에 저장한다
    // 같은 페이지를 이동할 때 캐시에 저장된 데이터를 먼저 보여줘서 속도를 향상시키고 데이터 호출을 줄인다.

    cacheTime: 5000, //캐시에 저장된 데이터를 삭제하는 시간 (5초 뒤 삭제됨 -> 서버 호출)
    retry: 0, //실패시 재호출 횟수
    onSuccess: (data) => {
      // 성공했을 때
      // console.log({ data });
    },

    onError: (error: any) => {
      //실패했을 때
      // console.log("error", error);
    },
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="ma20">
      <h2 className="mb10">RQSuperHeroes</h2>
      <ul>
        {data?.data.map((item: RqHeroesType) => (
          <li key={item.name} className="mb10">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperHeroes;
