import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

type RqHeroesType = {
  id: number;
  name: string;
  alterEgo: string;
};

const fetchHeroeDetail = (id: string): Promise<AxiosResponse<RqHeroesType>> => {
  return axios.get(`http://localhost:4000/superheroes/:id`.replace(":id", id));
};

export const useFetchDetail = (heroId: string) => {
  return useQuery(["super-heroes", heroId], () => fetchHeroeDetail(heroId));
};
