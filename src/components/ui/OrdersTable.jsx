import React from 'react';
import CancelIcon from '../../Icons/CancelIcon';
import DeleteIcon from '../../Icons/DeleteIcon';
import EyeIcon from '../../Icons/EyeIcon';
import PrintIcon from '../../Icons/PrintIcon';

const OrdersTable = () => {
    const orders = [
        { id: 1, invoiceId: 254444532, title: 'Mens t shirt', qty: 2, price: 500, status: 'Paid', date: '12/03/2023' },
        {
            id: 2,
            invoiceId: 254444533,
            title: 'Mens t shirt',
            qty: 2,
            price: 500,
            status: 'Pending',
            date: '12/03/2023',
        },
        {
            id: 3,
            invoiceId: 254444534,
            title: 'Mens t shirt',
            qty: 2,
            price: 500,
            status: 'Delivered',
            date: '12/03/2023',
        },
        {
            id: 4,
            invoiceId: 254444535,
            title: 'Mens t shirt',
            qty: 2,
            price: 500,
            status: 'Pending',
            date: '12/03/2023',
        },
        {
            id: 5,
            invoiceId: 254444535,
            title: 'Mens t shirt',
            qty: 2,
            price: 500,
            status: 'Canceled',
            date: '12/03/2023',
        },
    ];

    const statusBgColor = (status) => {
        switch (status) {
            case 'Paid':
                return 'bg-green-100 text-green-600 px-3 text-sm rounded-full';
            case 'Delivered':
                return 'bg-blue-100 text-blue-500 px-3 text-sm rounded-full';
            case 'Pending':
                return 'bg-orange-100 text-yellow-600 px-3 text-sm rounded-full';
            case 'Canceled':
                return 'bg-red-100 text-red-600 px-3 text-sm rounded-full';
            default:
                return 'bg-base-100';
        }
    };

    return (
        <div>
            <div className="hidden sm:grid grid-cols-6 justify-start items-start justify-items-start ">
                <div className="text-lg font-semibold">Invoice Id</div>
                <div className="text-lg font-semibold">Name</div>
                <div className="text-lg font-semibold">Items</div>
                <div className="text-lg font-semibold">Price</div>
                <div className="text-lg font-semibold">Status</div>
                <div className="text-lg font-semibold">Actions</div>
            </div>
            <div className="">
                {orders &&
                    orders.map(({ id, invoiceId, title, qty, price, status, date }) => (
                        <div
                            key={id}
                            className="grid sm:grid-cols-6 grid-cols-3 justify-start items-center justify-items-start my-2 border-b pb-3"
                        >
                            <div className="flex flex-col justify-start items-start">
                                <div>{invoiceId}</div>
                                <div className="text-[12px] text-neutral">{date}</div>
                            </div>
                            <div className="">{title}</div>
                            <div className="">${price}</div>
                            <div className="">
                                <span className="sm:hidden">Qty: </span> {qty}
                            </div>
                            <div className={`${statusBgColor(status)}`}>{status}</div>
                            <div className="flex items-center gap-2">
                                <span className="cursor-pointer relative group">
                                    <EyeIcon className="h-4 w-4" />
                                    <div className="absolute min-w-max bottom-full -left-6 mb-2 bg-slate-500 rounded px-1 py-0.5 group-hover:block hidden">
                                        <p className="text-base-100 text-sm">See more</p>
                                    </div>
                                </span>
                                {status && status !== 'Canceled' ? (
                                    <>
                                        <span className="cursor-pointer relative group">
                                            <PrintIcon className="h-4 w-4" />
                                            <div className="absolute min-w-max bottom-full -left-2.5 mb-2 bg-slate-500 rounded px-1 py-0.5 group-hover:block hidden">
                                                <p className="text-base-100 text-sm">Print</p>
                                            </div>
                                        </span>
                                        <span className="cursor-pointer relative group">
                                            <CancelIcon className="h-4 w-4" />
                                            <div className="absolute min-w-max bottom-full -left-4 mb-2 bg-slate-500 rounded px-1 py-0.5 group-hover:block hidden">
                                                <p className="text-base-100 text-sm">Cancel</p>
                                            </div>
                                        </span>
                                    </>
                                ) : (
                                    <span className="cursor-pointer relative group">
                                        <DeleteIcon className="h-4 w-4" />
                                        <div className="absolute min-w-max bottom-full -left-4 mb-2 bg-slate-500 rounded px-1 py-0.5 group-hover:block hidden">
                                            <p className="text-base-100 text-sm">Remove</p>
                                        </div>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default OrdersTable;
