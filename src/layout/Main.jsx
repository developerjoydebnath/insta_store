import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <h1 className="text-primary xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">this is footer</h1>
        </div>
    );
};

export default Main;
