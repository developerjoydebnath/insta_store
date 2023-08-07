import React from 'react';
import { Link } from 'react-router-dom';
import CashIcon from '../../Icons/CashIcon';
import Clock3Icon from '../../Icons/Clock3Icon';
import InfoIcon from '../../Icons/InfoIcon';
import MarkIcon from '../../Icons/MarkIcon';
import ShieldCheck from '../../Icons/ShieldCheck';
import ShieldExclamation from '../../Icons/ShieldExclamation';
import TruckIcon from '../../Icons/TruckIcon';

const ThirdDiv = () => {
    return (
        <div className="lg:col-span-3 col-span-8 text-start sm:px-3">
            <div>
                <p className="text-base text-slate-400 mb-2">Delivery Info</p>
                <div className="px-3">
                    <span className="flex justify-between items-center">
                        <span className="flex items-center gap-1">
                            <MarkIcon className="h-3.5 w-3.5 fill-neutral" />
                            <h4 className="text-sm text-neutral">Delivery Location</h4>
                        </span>
                        <Link to="/" className="text-sm text-blue-400 hover:text-blue-500">
                            Change
                        </Link>
                    </span>
                    <h4 className="border border-dashed w-full p-1.5 italic text-slate-500 mt-2 mb-4">
                        123,San Fransisco, USA
                    </h4>
                </div>
                <div className="px-3">
                    <span className="flex justify-between items-center">
                        <span>
                            <span className="flex items-center gap-1">
                                <TruckIcon className="h-3.5 w-3.5 fill-neutral" />
                                <h4 className="text-sm text-neutral">Standard Delivery</h4>
                            </span>
                            <span>
                                <h4 className="text-sm">(3-5 days)</h4>
                            </span>
                        </span>
                        <p className="text-neutral">$5.00</p>
                    </span>
                    <h4 className="border border-dashed w-full text-xs p-2 text-slate-500 mt-2 mb-3">
                        Enjoy free shipping promotion with minimum spend 7 items in certain area from Music Mart.
                    </h4>
                    <h4 className="border border-dashed w-full p-2 text-xs mt-2 mb-3 flex items-center gap-2 fill-blue-400 text-blue-400">
                        <span>
                            <CashIcon className="h-5 w-5" />
                        </span>
                        <span>Cash on delivery is not available in some certain area from Music</span>
                    </h4>
                </div>
            </div>
            <div>
                <p className="text-base text-slate-400 mb-2">Services</p>
                <div className="px-3">
                    <span className="flex justify-between items-center mb-3 fill-neutral text-neutral">
                        <span className="flex items-center gap-1">
                            <ShieldExclamation className="h-3.5 w-3.5" />
                            <p className="text-sm">Warranty not available</p>
                        </span>
                        <span className="cursor-pointer relative group">
                            <InfoIcon className="h-3 w-3" />
                            <div className="absolute bottom-full right-0 w-max px-2 bg-slate-500 text-base-100 hidden group-hover:block mb-1 rounded-full text-sm pb-0.5">
                                <p>See More</p>
                            </div>
                        </span>
                    </span>
                    <span className="flex justify-between items-center mb-3 fill-neutral text-neutral">
                        <span className="flex items-center gap-1">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <p className="text-sm">Warranty available for 3 months</p>
                        </span>
                        <span className="cursor-pointer relative group">
                            <InfoIcon className="h-3 w-3" />
                            <div className="absolute bottom-full right-0 w-max px-2 bg-slate-500 text-base-100 hidden group-hover:block mb-1 rounded-full text-sm pb-0.5">
                                <p>See More</p>
                            </div>
                        </span>
                    </span>
                    <span className="flex justify-between items-center mb-3 fill-neutral text-neutral">
                        <span className="flex items-center gap-1">
                            <Clock3Icon className="h-3.5 w-3.5" />
                            <p className="text-sm">7 days easy return</p>
                        </span>
                        <span className="cursor-pointer relative group">
                            <InfoIcon className="h-3 w-3" />
                            <div className="absolute bottom-full right-0 w-max px-2 bg-slate-500 text-base-100 hidden group-hover:block mb-1 rounded-full text-sm pb-0.5">
                                <p>See More</p>
                            </div>
                        </span>
                    </span>
                    <span className="flex justify-between items-center mb-3 fill-neutral text-neutral">
                        <span className="flex items-center gap-1">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <p className="text-sm">100% Authenticity Guaranteed</p>
                        </span>
                        <span className="cursor-pointer relative group">
                            <InfoIcon className="h-3 w-3" />
                            <div className="absolute bottom-full right-0 w-max px-2 bg-slate-500 text-base-100 hidden group-hover:block mb-1 rounded-full text-sm pb-0.5">
                                <p>See More</p>
                            </div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ThirdDiv;
