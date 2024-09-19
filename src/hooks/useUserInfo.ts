import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface UserData {
    _id: string;
    email: string;
    fullname: string;
    profileImageURL: string;
    role: string;
}

const useUserInfo = () => {
    const [trigger, setTrigger] = useState(false);

    const fetchUserData = async (): Promise<UserData> => {
        try {
            const response = await fetch('http://localhost:8000/user/data', {
                credentials: 'include'
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            throw error;
        }
    };

    const {
        data: userData,
        isLoading,
        isError,
        refetch
    } = useQuery({
        queryKey: ['userInfo'],
        queryFn: fetchUserData,
        initialData: null,
        enabled: true,
        retry: 1,
        staleTime: 1000
    });

    return { userData, trigger, setTrigger, isLoading, isError, refetch };
};

export default useUserInfo;
