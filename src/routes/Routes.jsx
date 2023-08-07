import { createBrowserRouter } from 'react-router-dom';
import Account from '../layout/Account';
import Admin from '../layout/Admin';
import Authentication from '../layout/Authentication';
import Main from '../layout/Main';
import User from '../layout/User';
import AdminLogin from '../pages/adminPanel/AdminLogin';
import Dashboard from '../pages/adminPanel/Dashboard';
import AllNotification from '../pages/userPanel/AllNotification';
import Cart from '../pages/userPanel/Cart';
import CategoryPage from '../pages/userPanel/CategoryPage';
import FavouriteItems from '../pages/userPanel/FavouriteItems';
import ForgotPassword from '../pages/userPanel/ForgotPassword';
import Home from '../pages/userPanel/Home';
import Login from '../pages/userPanel/Login';
import NewPassword from '../pages/userPanel/NewPassword';
import OrderSuccess from '../pages/userPanel/OrderSuccess';
import Orders from '../pages/userPanel/Orders';
import Payment from '../pages/userPanel/Payment';
import ProductDetail from '../pages/userPanel/ProductDetail';
import Signup from '../pages/userPanel/Signup';
import TermsAndCondition from '../pages/userPanel/Terms&Condition';
import UserAccount from '../pages/userPanel/UserAccount';
import AdminRoute from './AdminRoute';
import UserRoute from './userRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'terms-and-conditions',
                element: (
                    <UserRoute>
                        <TermsAndCondition />
                    </UserRoute>
                ),
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'favourite-items',
                element: <FavouriteItems />,
            },
            {
                path: 'product-details/:productId',
                element: <ProductDetail />,
            },
            {
                path: 'category/:categoryId',
                element: <CategoryPage />,
            },
        ],
    },
    {
        path: '/auth',
        element: <Authentication />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <Signup />,
            },
            {
                path: 'reset-password',
                element: <ForgotPassword />,
            },
            {
                path: 'new-password/:id',
                element: <NewPassword />,
            },
            {
                path: 'admin/login',
                element: <AdminLogin />,
            },
        ],
    },
    {
        path: '/admin',
        element: (
            <AdminRoute>
                <Admin />
            </AdminRoute>
        ),
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
        ],
    },
    {
        path: '/user',
        element: <User />,
        children: [
            {
                path: 'account',
                element: <Account />,
                children: [
                    {
                        path: '',
                        element: <UserAccount />,
                    },
                    {
                        path: 'notifications/:notificationId',
                        element: <AllNotification />,
                    },
                    {
                        path: 'orders',
                        element: <Orders />,
                    },
                ],
            },
            {
                path: 'checkout-success',
                element: <OrderSuccess />,
            },
            {
                path: 'checkout',
                element: <Payment />,
            },
        ],
    },
]);
