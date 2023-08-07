import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useAuthCheck = () => {
    const { user, loading } = useSelector((state) => state.auth);
    const [authChecked, setAuthChecked] = useState(false);
    useEffect(() => {
        if (loading && !user) {
            setAuthChecked(false);
        }
        setAuthChecked(true);
    }, [setAuthChecked, loading]);
    return authChecked;
};
