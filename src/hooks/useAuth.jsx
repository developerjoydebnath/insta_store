import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useAuth = () => {
    const { user, accessToken } = useSelector((state) => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
        if (user && accessToken) {
            setIsLoggedIn(true);
            setLoading(false);
        } else {
            setIsLoggedIn(false);
        }
    }, [user, accessToken, user]);
    return { isLoggedIn, user, loading };
};
