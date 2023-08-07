import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '../Icons/LoginIcon';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';
import UserAddIcon from '../Icons/UserAddIcon';

const UserNavigationDropdown = ({ className = '', ...props }) => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const handleChangeTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className={className} {...props}>
            <ul className=" bg-white js__user-dropdown-ul rounded-xl overflow-hidden">
                <li onClick={() => navigate('/auth/login')} className="user-dropdown-li">
                    <LoginIcon className="h-5 w-5 " />
                    <span>Login </span>
                </li>
                <li onClick={() => navigate('/auth/signup')} className="user-dropdown-li">
                    <UserAddIcon className="h-4 w-4" />
                    <span>Signup</span>
                </li>
                <li className="group user-dropdown-li">
                    {theme == 'dark' ? (
                        <MoonIcon className="h-[18px] w-[18px] group-hover:fill-primary fill-neutral js__user-menu-icon" />
                    ) : (
                        <SunIcon className="h-[18px] w-[18px] group-hover:fill-primary fill-neutral js__user-menu-icon" />
                    )}
                    <h3 className="text-base text-neutral font-semibold js__user-menu-name group-hover:text-primary">
                        Dark Mood
                    </h3>
                    <input
                        type="checkbox"
                        className="toggle toggle-sm group-hover:toggle-error"
                        checked={theme == 'dark' ? true : false}
                        onChange={handleChangeTheme}
                    />
                </li>
            </ul>
        </div>
    );
};

export default UserNavigationDropdown;
