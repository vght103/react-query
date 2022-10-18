import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDetail } from "../hooks/useFetchDetail";

const RQSuperHeroDetail = () => {
  const param = useParams();

  const onSuccess = (data: any) => {
    console.log("data", data);
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  const { data, isLoading } = useFetchDetail(String(param.id));

  console.log("data", data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Hero Detail</h2>
      <div>
        <p>{data?.data.name}</p>
        <p>{data?.data.alterEgo}</p>
        <p></p>
      </div>
    </div>
  );
};

export default RQSuperHeroDetail;
