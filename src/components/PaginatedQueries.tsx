import React from "react";
import { useQuery } from "react-query";
import { fetchColors, RqColors } from "../api/HeroesApi";

const PaginatedQueries = () => {
  const { data: colors, isLoading, isError, error } = useQuery("colors", fetchColors);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul>
        {colors?.data.map((color: RqColors) => (
          <li key={color.id}>{color.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaginatedQueries;
