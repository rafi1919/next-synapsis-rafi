import React, { useEffect, useState } from 'react';
import UserView from "./view";
import { useGetUserData } from "@/hooks";

const Index = () => {
    const [stateData, setStateData] = useState<any[]>([]);
    const { data, loading } = useGetUserData();
  
    useEffect(() => {
        if (data && data.length > 0) {
            setStateData((prev) => [...prev, ...data]);
        }
    }, [data, loading]);

    return (
        <UserView postData={stateData} />
    );
};

export default Index;
