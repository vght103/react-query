import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

type RqHerosType = {
  name: string;
  alterEgo: string;
};

const RQSuperHeros = () => {
  const fetchHeros = () => {
    return axios.get(`http://localhost:4000/superheroes`);
  };

  // useQuery 는 필수로 2개 arguments 가 필요
  const { isLoading, data, status } = useQuery("super-heroes", fetchHeros, {
    retry: 0, //실패시 재호출 횟수
    onSuccess: (data) => {
      // 성공했을 때
      console.log("success", data);
    },

    onError: (error: any) => {
      //실패했을 때
      console.log("error", error);
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log("status", status);

  return (
    <div>
      <h2>RQSuperHeros</h2>
      <ul>
        {data?.data.map((item: RqHerosType) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperHeros;
