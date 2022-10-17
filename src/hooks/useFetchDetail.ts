import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroeDetail = (id: string) => {
  return axios.get(`http://localhost:4000/superheroes/:id`.replace(":id", id));
};

export const useFetchDetail = (heroId: string) => {
  return useQuery(["super-heroes", heroId], () => fetchHeroeDetail(heroId));
};
