import React from "react";
import { useQueries } from "react-query";
import { fetchHeroeDetail } from "../api/HeroesApi";

type Props = {
  heroIds: number[];
};

//  DynamicParallel
// useQueries 사용 - 어떨때 사용하는지 잘 모르겠는데, 일단 [1,3] 으로 prop 내려준 것으로 map을 돌려 각 id에 맞게 api 호출

const DynamicParallel = ({ heroIds }: Props) => {
  const result = useQueries(
    heroIds.map((id) => {
      return { queryKey: [`super-hero`, id], queryFn: () => fetchHeroeDetail(String(id)) };
    })
  );

  return <div>DynamicParallel</div>;
};

export default DynamicParallel;
