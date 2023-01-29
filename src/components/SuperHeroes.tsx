import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

type HeroesType = {
  name: string;
  alterEgo: string;
};

const SuperHeroes = () => {
  const [data, setData] = useState<Array<HeroesType>>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log("커밋테스트 2 수정");

  // 기존 api 호출 방법 (axios)
  const getSuperHeroes = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4000/superheroes`);
      if (response.status >= 200 && response.status <= 299) {
        const result = response.data;
        setData(result);
        setIsLoading(false);
      }
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  }, [setData]);

  useEffect(() => {
    getSuperHeroes();
  }, [getSuperHeroes]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div className="ma20">{error}</div>;
  }

  return (
    <div className="ma20">
      <h2 className="mb10">Super Hero</h2>
      <h3 className="mb10">Axios Way</h3>
      {data?.map((item) => (
        <p key={item.name} className="mb5">
          {item.name}{" "}
        </p>
      ))}
    </div>
  );
};

export default SuperHeroes;
