import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (logout) {
            Cookies.remove('token');
            navigate('/user/signin');
            setLogout(false);
        }
    }, [logout, navigate]);
    return {logout, setLogout};
};

export default useLogout;
