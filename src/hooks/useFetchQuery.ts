import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";

type RqHeroesType = {
  id: number;
  name: string;
  alterEgo: string;
};

export const useFetchQuery = (queryKey: string[], queryFn: any) => {
  // 데이터 불러오는 함수

  return useQuery(queryKey, queryFn);
};
