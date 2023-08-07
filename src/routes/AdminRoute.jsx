import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { isLoggedIn, user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <div>Loading ......</div>;
    else if (!user) return <Navigate to="/auth/login" />;
    return user?.role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminRoute;
