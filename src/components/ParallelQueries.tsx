import React from "react";
import { useQuery } from "react-query";
import { fetchFriends, fetchHeroes } from "../api/HeroesApi";

// Parallel: 평행한
const ParallelQueries = () => {
  // useQuery를 다중으로 사용할 때 변수값은 어떻게 중복을 피할까? ->  { data: heroes }와 같이 구분

  const {
    data: heroes,
    isLoading: heroesLoading,
    error: heroesError,
  } = useQuery("super-heroes", fetchHeroes);
  const {
    data: freinds,
    isLoading: freindsLoading,
    error: freindsError,
  } = useQuery("friends", fetchFriends);

  return <div>ParallelQueries</div>;
};

export default ParallelQueries;
