import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSummery = () => {
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

                    <div className="text-start mt-8">
                        <button
                            onClick={() => navigate('/user/checkout-success')}
                            className="px-8 py-2 rounded-md bg-red-100 hover:bg-primary text-primary hover:text-white transition-all"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSummery;
