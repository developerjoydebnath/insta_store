import React, { useState } from 'react';
import ApplePay from '../../Icons/ApplePay';
import MasterCard from '../../Icons/MasterCard';
import Paypal from '../../Icons/Paypal';
import Visa from '../../Icons/Visa';
import PaymentSummery from '../../components/ui/PaymentSummery';

const Payment = () => {
    const [method, setMethod] = useState('');
    return (
        <section className="lg:max-w-screen-xl max-w-screen-md  mx-auto">
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-5 gap-5">
                <div className="lg:border-r lg:col-span-2">
                    <div>
                        <div className="flex justify-between sm:mx-5 items-center md:mx-6 mx-3 border-b pb-2">
                            <h3 className="font-bold text-neutral text-lg">Checkout</h3>
                        </div>
                        <div className="md:mx-6 sm:mx-5 mx-3 mb-10">
                            <h1 className="text-start my-5 text-lg">1. Personal Information</h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 text-center">
                                <div>
                                    <label htmlFor="first-name" className="block text-start mb-1.5 text-neutral">
                                        First Name
                                    </label>
                                    <input
                                        className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-start mb-1.5 text-neutral">
                                        Last Name
                                    </label>
                                    <input
                                        className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobile" className="block text-start mb-1.5 text-neutral">
                                        Phone
                                    </label>
                                    <input
                                        className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                        type="number"
                                        name="mobile"
                                        id="mobile"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-start mb-1.5 text-neutral">
                                        Email
                                    </label>
                                    <input
                                        className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                        type="email"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:mx-6 sm:mx-5 mx-3 mb-10">
                            <h1 className="text-start my-5 text-lg">2. Shipping Details</h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 text-center">
                                <div>
                                    <label htmlFor="city" className="block text-start mb-1.5 text-neutral">
                                        City
                                    </label>
                                    <input
                                        className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                        type="text"
                                        name="city"
                                        id="city"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="zip-code" className="block text-start mb-1.5 text-neutral">
                                        Zip Code
                                    </label>
                                    <input
                                        className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                        type="number"
                                        name="zip-code"
                                        id="zip-code"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-start mb-1.5 text-neutral">
                                        Address
                                    </label>
                                    <input
                                        className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                        type="text"
                                        name="address"
                                        id="address"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:mx-6 sm:mx-5 mx-3 mb-10">
                            <h1 className="text-start my-5 text-lg">3. Card Information</h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 text-center">
                                <div className="grid grid-cols-1 gap-5">
                                    <div className="flex h-20 justify-between items-center">
                                        <div
                                            onClick={() => setMethod('mastercard')}
                                            className={`sm:py-2 sm:px-5 py-1 px-3 hover:bg-zinc-200 cursor-pointer rounded-lg ${
                                                method === 'mastercard' ? 'bg-zinc-200' : 'bg-transparent'
                                            }`}
                                        >
                                            <MasterCard height="50" width="50" />
                                        </div>
                                        <div
                                            onClick={() => setMethod('paypal')}
                                            className={`sm:py-2 sm:px-5 py-1 px-3 hover:bg-zinc-200 cursor-pointer rounded-lg ${
                                                method === 'paypal' ? 'bg-zinc-200' : 'bg-transparent'
                                            }`}
                                        >
                                            <Paypal height="50" width="50" />
                                        </div>
                                        <div
                                            onClick={() => setMethod('visa')}
                                            className={`sm:py-2 sm:px-5 py-1 px-3 hover:bg-zinc-200 cursor-pointer rounded-lg ${
                                                method === 'visa' ? 'bg-zinc-200' : 'bg-transparent'
                                            }`}
                                        >
                                            <Visa height="50" width="50" />
                                        </div>
                                        <div
                                            onClick={() => setMethod('applePay')}
                                            className={`sm:py-2 sm:px-5 py-1 px-3 hover:bg-zinc-200 cursor-pointer rounded-lg ${
                                                method === 'applePay' ? 'bg-zinc-200' : 'bg-transparent'
                                            }`}
                                        >
                                            <ApplePay height="50" width="50" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="card-holder" className="block text-start mb-1.5 text-neutral">
                                            Card Holder
                                        </label>
                                        <input
                                            className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                            type="text"
                                            name="card-holder"
                                            id="card-holder"
                                            placeholder="Jhon Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="card-number" className="block text-start mb-1.5 text-neutral">
                                            Card Number
                                        </label>
                                        <input
                                            className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4"
                                            type="text"
                                            name="card-number"
                                            id="card-number"
                                            placeholder="1234-1234-12345"
                                        />
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-full">
                                            <label htmlFor="cvv" className="block text-start mb-1.5 text-neutral">
                                                CVV
                                            </label>
                                            <input
                                                className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4 "
                                                type="number"
                                                name="cvv"
                                                id="cvv"
                                                placeholder="123"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label
                                                htmlFor="expiry-date"
                                                className="block text-start mb-1.5 text-neutral"
                                            >
                                                Expiry Date
                                            </label>
                                            <input
                                                className="border h-10 w-full rounded-md outline-none focus:ring-2 ring-red-400 border-zinc-200 ps-4 pe-1"
                                                type="date"
                                                name="expiry-date"
                                                id="expiry-date"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <PaymentSummery />
            </div>
        </section>
    );
};

export default Payment;
