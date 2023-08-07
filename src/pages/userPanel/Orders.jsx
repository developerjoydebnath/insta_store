import React from 'react';
import OrdersTable from '../../components/ui/OrdersTable';
import Pagination from '../../components/ui/Pagination';
import ProfileHeading from '../../components/ui/ProfileHeading';

const Orders = () => {
    return (
        <div>
            <div className="md:ms-5">
                <ProfileHeading heading="Orders" />

                <OrdersTable />

                <div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Orders;
