import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BellIcon from '../Icons/BellIcon';
import HelpIcon from '../Icons/HelpIcon';
import ListIcon from '../Icons/ListIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import LoveIcon from '../Icons/LoveIcon';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';
import UserIcon from '../Icons/UserIcon';
import logo from '../assets/Images/joy.png';
import { useLogoutMutation } from '../features/auth/authApi';

const UserSettingDropdown = ({ className = '', ...props }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    const handleChangeTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={className} {...props}>
            <div className="border bg-white rounded-xl divide-y px-6 py-2 js__user-dropdown-ul">
                <ul className="">
                    <li className="py-3 flex justify-start items-center">
                        <img className="rounded-full" height={50} width={50} src={logo} alt="" />
                        <div className="text-start ms-2">
                            <h4 className="text-lg font-semibold text-neutral">Joy Debnath</h4>
                            <p className="text-sm text-neutral">joydebnath@gmail.com</p>
                        </div>
                    </li>
                </ul>
                <ul className="py-2">
                    <li
                        onClick={() => navigate('/user/account')}
                        className="py-2 flex gap-4 justify-start items-center js__user-menu-li"
                    >
                        <UserIcon className="h-[18px] w-[18px] fill-neutral js__user-menu-icon" />
                        <h3 className="text-base text-neutral font-semibold js__user-menu-name">My Profile</h3>
                    </li>

                    <li
                        onClick={() => navigate('/user/account/orders')}
                        className="py-2 flex gap-4 justify-between items-center js__user-menu-li"
                    >
                        <span className="flex items-center gap-4">
                            <ListIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                            <h3 className="text-base text-neutral font-semibold js__user-menu-name">My Orders</h3>
                        </span>
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </li>
                    <li
                        onClick={() => navigate('/favourite-items')}
                        className="py-2 flex gap-4 justify-between items-center js__user-menu-li"
                    >
                        <span className="flex items-center gap-4">
                            <LoveIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                            <h3 className="text-base text-neutral font-semibold js__user-menu-name">Wishlist</h3>
                        </span>
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </li>
                    <li
                        onClick={() => navigate('/user/account/notifications/0')}
                        className="py-2 flex gap-4 justify-between items-center js__user-menu-li"
                    >
                        <span className="flex items-center gap-4">
                            <BellIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                            <h3 className="text-base text-neutral font-semibold js__user-menu-name">Notification</h3>
                        </span>
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </li>
                </ul>
                <ul className="py-2">
                    <li className="group py-2 flex gap-4 justify-between items-center js__user-menu-li">
                        <span className="flex items-center gap-4">
                            {theme == 'dark' ? (
                                <MoonIcon className="h-[18px] w-[18px] fill-neutral js__user-menu-icon" />
                            ) : (
                                <SunIcon className="h-[18px] w-[18px] fill-neutral js__user-menu-icon" />
                            )}
                            <h3 className="text-base text-neutral font-semibold js__user-menu-name">Dark Mood</h3>
                        </span>
                        <input
                            type="checkbox"
                            className="toggle toggle-sm group-hover:toggle-error"
                            checked={theme == 'dark' ? true : false}
                            onChange={handleChangeTheme}
                        />
                    </li>
                    <li className="py-2 flex gap-4 justify-start items-center js__user-menu-li">
                        <HelpIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                        <h3 className="text-base text-neutral font-semibold js__user-menu-name">Help</h3>
                    </li>
                    <li className="py-2 flex gap-4 justify-start items-center js__user-menu-li" onClick={handleLogout}>
                        <LogoutIcon className="h-5 w-5 fill-neutral js__user-menu-icon" />
                        <h3 className="text-base text-neutral font-semibold js__user-menu-name">Logout</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserSettingDropdown;
