import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const UserRoute = ({ children }) => {
    const { isLoggedIn, user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <div>Loading ......</div>;
    return user ? children : <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default UserRoute;
