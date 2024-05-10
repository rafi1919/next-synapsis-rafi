import React, { useState, useEffect } from "react";
import UserDetailView from "./view";
import { useRouter } from "next/router";
import { useGetUserDetail } from "@/hooks";

export default function Index() {
  const router = useRouter();
  const userId = router.query.userId as string;
  const [userData, setUserData] = useState<any>({});
  const { data, loading, getUserDetail } = useGetUserDetail();

  useEffect(() => {
    if (userId) {
      getUserDetail(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setUserData(data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserDetailView
      name={userData.name}
      email={userData.email}
      gender={userData.gender}
      status={userData.status}
      userId={userId}
    />
  );
}
