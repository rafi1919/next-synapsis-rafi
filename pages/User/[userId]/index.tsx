import React, { useState, useEffect } from 'react';
import UserDetailView from './view';
import { useRouter } from 'next/router';
import { useGetUserData } from '@/hooks';

export default function Index() {
    const router = useRouter();
    const userId = router.query.userId as string;
    const [userData, setUserData] = useState<any>({});
    const { data, loading } = useGetUserData();

    useEffect(() => {
        if (data.length > 0) {
            const user = data.find((user: any) => user.id === parseInt(userId));
            if (user) {
                setUserData(user);
            }
        }
    }, [data, userId]);

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
