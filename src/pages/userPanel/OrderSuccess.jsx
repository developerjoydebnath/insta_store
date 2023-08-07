import React from 'react';
import { Link } from 'react-router-dom';
import ShieldCheckIcon from '../../Icons/ShieldCheckIcon';

const OrderSuccess = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="">
                <div className="flex justify-center">
                    <ShieldCheckIcon className="h-16 w-16 fill-green-600" />
                </div>
                <h1 className="text-2xl font-semibold mt-5">Order Successfully Placed</h1>
                <p className="my-3">Thank you for shopping with us. We will contact you shortly</p>
                <Link to="/" className="text-info hover:underline">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;
