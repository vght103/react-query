import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDetail } from "../hooks/useFetchDetail";

const RQSuperHero = () => {
  const param = useParams();

  console.log(typeof param.id);

  const onSuccess = (data: any) => {
    console.log("data", data);
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  const { data } = useFetchDetail(String(param.id));

  return (
    <div>
      <h2>Hero Detail</h2>
      <div>
        <button></button>
      </div>
    </div>
  );
};

export default RQSuperHero;
