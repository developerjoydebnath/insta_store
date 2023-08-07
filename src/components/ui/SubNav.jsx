import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpandMore from '../../Icons/ExpandMore';
import AllCategory from './AllCategory';

const SubNav = () => {
    return (
        <div className="border-t border-dashed md:block hidden">
            <div className="mx-auto">
                <div className="flex items-center gap-5 justify-center relative md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                    <div className=" cursor-pointer py-2 group flex items-center gap-1">
                        <span>All Catagories</span> <ExpandMore className="h-5 w-5 mt-1" />
                        <AllCategory />
                    </div>

                    <NavLink
                        to=""
                        className={({ isActive }) => `cursor-pointer py-2 ${isActive ? 'text-primary' : ''}`}
                    >
                        Men's Fashion
                    </NavLink>

                    <NavLink
                        to="/user"
                        className={({ isActive }) => `cursor-pointer py-2 ${isActive ? 'text-primary' : ''}`}
                    >
                        Women's Fashion
                    </NavLink>

                    <NavLink
                        to=""
                        className={({ isActive }) => `cursor-pointer py-2 ${isActive ? 'text-primary' : ''}`}
                    >
                        Baby
                    </NavLink>

                    <NavLink
                        to=""
                        className={({ isActive }) => `cursor-pointer py-2 ${isActive ? 'text-primary' : ''}`}
                    >
                        Customer Service
                    </NavLink>

                    <NavLink
                        to=""
                        className={({ isActive }) => `cursor-pointer py-2 ${isActive ? 'text-primary' : ''}`}
                    >
                        Gift Cards
                    </NavLink>

                    <NavLink
                        to=""
                        className={({ isActive }) => `cursor-pointer py-2 ${isActive ? 'text-primary' : ''}`}
                    >
                        Registry
                    </NavLink>

                    <NavLink
                        to=""
                        className={({ isActive }) => `cursor-pointer py-2 ${isActive ? 'text-primary' : ''}`}
                    >
                        Today's Deals
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
