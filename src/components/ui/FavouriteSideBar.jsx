import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartIcon2 from '../../Icons/CartIcon2';
import CloseIcon from '../../Icons/CloseIcon';
import img from '../../assets/Images/joy.png';
import Button from './Button';

const FavouriteSideBar = ({ className = '', onClick, setFavouriteItemsOpen }) => {
    const navigate = useNavigate();
    return (
        <div className={className}>
            <div className="bg-base-100 w-full">
                <div className="bg-primary h-12 fixed w-full top-0 flex justify-between items-center ">
                    <div className=" cursor-pointer ms-2" onClick={(e) => onClick && onClick(e)}>
                        <CloseIcon className="h-7 w-7" />
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-semibold">My Orders</h1>
                    </div>
                    <div></div>
                </div>
                <div className="mt-12 mx-2 js__favourite-div">
                    <ul className="divide-y">
                        <li className="py-2.5 px-4 mt-1">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-center gap-5">
                                    <div className=" ">
                                        <img src={img} alt="" height={60} width={60} />
                                    </div>
                                    <div>
                                        <div className="text-start">
                                            <h1 className="text-lg font-semibold text-neutral">Mens dashing t-shirt</h1>
                                            <h3 className="text-sm divide-x divide-gray-300 text-neutral">
                                                <span className="pe-2">Natural</span>
                                                <span className="ps-2">XL</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        <span className="flex justify-center items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100">
                                            <span>Add to cart</span> <CartIcon2 className="h-4 w-4 fill-blue-500" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 mt-1">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-center gap-5">
                                    <div className=" ">
                                        <img src={img} alt="" height={60} width={60} />
                                    </div>
                                    <div>
                                        <div className="text-start">
                                            <h1 className="text-lg font-semibold text-neutral">Mens dashing t-shirt</h1>
                                            <h3 className="text-sm divide-x divide-gray-300 text-neutral">
                                                <span className="pe-2">Natural</span>
                                                <span className="ps-2">XL</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        <span className="flex justify-center items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100">
                                            <span>Add to cart</span> <CartIcon2 className="h-4 w-4 fill-blue-500" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 mt-1">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-center gap-5">
                                    <div className=" ">
                                        <img src={img} alt="" height={60} width={60} />
                                    </div>
                                    <div>
                                        <div className="text-start">
                                            <h1 className="text-lg font-semibold text-neutral">Mens dashing t-shirt</h1>
                                            <h3 className="text-sm divide-x divide-gray-300 text-neutral">
                                                <span className="pe-2">Natural</span>
                                                <span className="ps-2">XL</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        <span className="flex justify-center items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100">
                                            <span>Add to cart</span> <CartIcon2 className="h-4 w-4 fill-blue-500" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="h-32">
                    <div className="mx-6">
                        <div className="flex justify-between items-center pt-4">
                            <Button
                                type="button"
                                className="w-full bg-slate-800 border-none hover:bg-primary text-white"
                                onClick={() => {
                                    navigate('/favourite-items');
                                    setFavouriteItemsOpen(false);
                                }}
                            >
                                View Favourite Items
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavouriteSideBar;
