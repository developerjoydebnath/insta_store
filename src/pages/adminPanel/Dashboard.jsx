import React from 'react';
import { useLogoutMutation } from '../../features/auth/authApi';
import Loading from '../../ui/Loading';

const Dashboard = () => {
    const [logout] = useLogoutMutation();
    return (
        <div className="">
            {/* <h1>admin dashboard</h1>
            <button className="btn btn-primary" onClick={() => logout()}>
                logout
            </button> */}

            <Loading
                divClassName="h-screen w-screen flex justify-center items-center bg-white"
                className=""
                height="100"
                width="100"
            />
        </div>
    );
};

export default Dashboard;
