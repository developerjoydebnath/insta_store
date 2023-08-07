import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummery = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="min-w-[300px] max-w-full px-3 mx-auto">
                <div>
                    <h1 className="text-lg font-bold text-neutral text-start border-b pb-2">Order Summary</h1>
                </div>
                <div>
                    <div className="flex items-center justify-between pt-5">
                        <h3>Sub Total</h3> <h3>$320</h3>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <h3>Shipping Cost</h3> <h3>$20</h3>
                    </div>
                    <div className="flex items-center justify-between border-b mb-2 pb-5 pt-3">
                        <h3>
                            Voucher Discount - <span className="text-primary">(10%)</span>
                        </h3>{' '}
                        <h3 className="text-primary">- $10</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold">Total Cost</h3>
                        <h3 className="font-bold">$520</h3>
                    </div>
                    <div className="mt-8 mb-5">
                        <form className="text-start">
                            <label htmlFor="voucher" className="text-sm text-slate-500">
                                Gift Card/Voucher code
                            </label>{' '}
                            <br />
                            <input
                                className="border h-9 me-3 rounded-md outline-none ps-2 mt-2 focus:border-primary"
                                type="text"
                                id="voucher"
                                name="voucher"
                            />
                            <input
                                className="bg-red-100 text-primary h-9 px-4 rounded-md hover:bg-primary  hover:text-white cursor-pointer transition ease-in-out"
                                type="submit"
                                value="Apply"
                            />
                        </form>
                    </div>
                    <div className="text-start">
                        <button
                            onClick={() => navigate('/user/checkout')}
                            className="px-8 py-2 rounded-md bg-red-100 hover:bg-primary text-primary hover:text-white transition-all"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummery;
