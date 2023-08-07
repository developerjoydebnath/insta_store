import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BellIcon from '../../Icons/BellIcon';
import ListIcon from '../../Icons/ListIcon';
import LogoutIcon from '../../Icons/LogoutIcon';
import UserIcon from '../../Icons/UserIcon';
import { useLogoutMutation } from '../../features/auth/authApi';

const AccountAside = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [logout] = useLogoutMutation();

    return (
        <div className="md:border-r md:border-b-0 border-b mb-5 pb-5 md:pb-0 md:mb-0 flex justify-start md:justify-end">
            <ul className="me-5">
                <li
                    onClick={() => navigate('/user/account')}
                    className={`p-2 flex gap-4 justify-start items-center js__user-menu-li cursor-pointer rounded-md ${
                        pathname === '/user/account' ? 'bg-red-100' : ''
                    }`}
                >
                    <UserIcon className="h-[18px] w-[18px] fill-neutral js__user-menu-icon" />
                    <h3 className="text-base text-neutral font-semibold js__user-menu-name">My Profile</h3>
                </li>

                <li
                    onClick={() => navigate('/user/account/orders')}
                    className={`p-2 flex gap-4 justify-between items-center js__user-menu-li cursor-pointer rounded-md ${
                        pathname === '/user/account/orders' ? 'bg-red-100' : ''
                    }`}
                >
                    <span className="flex items-center gap-4">
                        <ListIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                        <h3 className="text-base text-neutral font-semibold js__user-menu-name">My Orders</h3>
                    </span>
                </li>

                <li
                    onClick={() => navigate('/user/account/notifications/0')}
                    className={`p-2 flex gap-4 justify-between items-center js__user-menu-li cursor-pointer rounded-md ${
                        pathname.includes('/user/account/notifications') ? 'bg-red-100' : ''
                    }`}
                >
                    <span className="flex items-center gap-4">
                        <BellIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                        <h3 className="text-base text-neutral font-semibold js__user-menu-name">Notification</h3>
                    </span>
                </li>
                <li
                    className="p-2 flex gap-4 justify-start items-center js__user-menu-li cursor-pointer"
                    onClick={() => logout()}
                >
                    <LogoutIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                    <h3 className="text-base text-neutral font-semibold js__user-menu-name">Logout</h3>
                </li>
            </ul>
        </div>
    );
};

export default AccountAside;
