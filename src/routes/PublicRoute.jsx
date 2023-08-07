import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicRoute = () => {
    // const { user } = useSelector((state) => state.auth);
    const { isLoggedIn, user, loading } = useAuth();

    if (loading) return <div>loading ..........</div>;
    return !isLoggedIn ? children : user?.role === 'admin' ? <Navigate to="/admin/dashboard" /> : <Navigate to="/" />;
};

export default PublicRoute;
