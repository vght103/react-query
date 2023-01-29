import { RqHeroesType } from "./../api/HeroesApi";
import axios, { AxiosResponse } from "axios";
import { useQuery, useQueryClient } from "react-query";
import { fetchHeroeDetail } from "../api/HeroesApi";

// useQuery 를 이용해서 목록 데이터를 캐싱했고, detail로 진입하는데 캐싱된 데이터를 안쓰고 또 fetching을 해야할까?
// 그걸 원하지 않고 캐싱된 정보를 사용하길 원한다면 useQueryClient 를 사용하자

export const useFetchDetail = (heroId: string) => {
  const queryClient = useQueryClient();

  return useQuery(["super-hero", heroId], () => fetchHeroeDetail(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData<any>("super-heroes")
        ?.data?.find((hero: RqHeroesType) => hero.id === Number(heroId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
