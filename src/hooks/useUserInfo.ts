import { useEffect, useState } from "react";


const useUserInfo = () => {
    const [userData, setUserData] = useState<{
        email: string;
        fullname: string;
        profileImageURL: string;
    }>();

    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:8000/user/data', {
                credentials: 'include' // Important for sending/receiving cookies from the server
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const userData = await response.json();
            return userData;
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            throw error;
        }
    };

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchUserData();
            setUserData(data);
        };

        loadData();
    }, []);
    
    return {userData};
};

export default useUserInfo;
