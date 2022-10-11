import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

type HerosType = {
  name: string;
  alterEgo: string;
};

const SuperHeros = () => {
  const [data, setData] = useState<Array<HerosType>>([]);

  // 기존 api 호출 방법 (axios)
  const getSuperHeros = useCallback(async () => {
    const response = await axios.get(`http://localhost:4000/superheroes`);
    if (response.status >= 200 && response.status <= 299) {
      const result = response.data;
      setData(result);
    }
  }, [setData]);

  useEffect(() => {
    getSuperHeros();
  }, [getSuperHeros]);

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

export default SuperHeros;
