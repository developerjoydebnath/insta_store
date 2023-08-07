import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../Icons/CloseIcon';
import DeleteIcon from '../../Icons/DeleteIcon';
import img from '../../assets/Images/joy.png';
import Button from './Button';

const CartSideBar = ({ className = '', onClick, setCartOpen }) => {
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
                <div className="mt-12 mx-2 js__cart-div">
                    <ul className="">
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="flex justify-start items-center gap-2 mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-info no-underline hover:no-underline">
                                        <span className="flex justify-center items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100">
                                            <span>Remove</span> <DeleteIcon className="h-4 w-4 fill-blue-500" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="py-2.5 px-4 hover:border-dashed hover:border-gray-300 border border-base-100 mt-1 rounded-sm">
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
                                        <div className="text-start mt-6">
                                            <h1 className="text-neutral">Qty 5</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <h3 className="font-semibold border-2 border-primary py-0.5 px-2 rounded-lg text-primary mb-7">
                                        $125
                                    </h3>
                                    <button className="font-semibold btn-link text-blue-500 no-underline hover:no-underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="h-52">
                    <div className="mx-6">
                        <div className="flex items-center justify-between pt-2">
                            <h1 className="text-xl font-bold text-neutral">Subtotal</h1>
                            <h1 className="text-xl font-bold text-neutral">200$</h1>
                        </div>
                        <h1 className="text-start text-sm text-neutral pt-0.5">
                            Shipping charge and taxes calculated at checkout
                        </h1>
                        <div className="flex justify-between items-center pt-4">
                            <Button
                                onClick={() => {
                                    navigate('/cart');
                                    setCartOpen(false);
                                }}
                                type="button"
                                className="w-36 bg-white hover:bg-white text-gray-800 border"
                            >
                                View Cart
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate('/user/checkout');
                                    setCartOpen(false);
                                }}
                                className="w-36 bg-gray-800 hover:bg-gray-800"
                                type="button"
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSideBar;
