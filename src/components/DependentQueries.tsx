import React from "react";
import { useQuery } from "react-query";
import { fetchCoursesByChannelId, fetchUserByEmail } from "../api/HeroesApi";

type Props = {
  email: string;
};

// DependentQueries

// 동기적 실행
// 어느 순간이든 코드가 동기적으로 수행되어야 하는 일이 발생한다. 그럴 때는 react-query의 어떤 방식을 이용해야 할까? 위에서 봤던 enabled 속성을 이용하면 된다.
// useQuery는 enabled 속성의 값이 true일때 실행된다.

const DependentQueries = ({ email }: Props) => {
  const { data: user } = useQuery(["user", email], () => fetchUserByEmail(email));

  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCoursesByChannelId(String(channelId)), {
    enabled: !!channelId,
  });

  return (
    <div>
      <h4>DependentQueries</h4>
      <p>{channelId}</p>
    </div>
  );
};

export default DependentQueries;
