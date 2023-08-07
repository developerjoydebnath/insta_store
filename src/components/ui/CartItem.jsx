import React from 'react';
import DeleteIcon from '../../Icons/DeleteIcon';
import LoveIcon from '../../Icons/LoveIcon';
import MinusIcon from '../../Icons/MinusIcon';
import PlusIcon from '../../Icons/PlusIcon';
import img from '../../assets/Images/joy.png';

const CartItem = () => {
    return (
        <div className="flex justify-between items-center py-2">
            <div className="flex gap-5 justify-start items-center">
                <div className="h-20 w-20">
                    <img src={img} alt="" />
                </div>
                <div className="flex flex-col gap-5 text-start">
                    <div>
                        <h1 className="md:text-lg font-semibold text-neutral">Mens Super slim t shirt</h1>
                        <div className="flex gap-4">
                            <span>
                                {/* <label className="text-sm text-neutral" htmlFor="color">
                                                        Color:{' '}
                                                    </label> */}
                                <select
                                    className="bg-base-100 text-sm border px-1 text-neutral rounded outline-none select-none ps-2"
                                    name="color"
                                    id="color"
                                >
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select>
                            </span>
                            <span className="">
                                {/* <label className="text-sm text-neutral" htmlFor="size">
                                                        Size:{' '}
                                                    </label> */}
                                <select
                                    className="bg-base-100 text-sm px-1 border text-neutral rounded outline-none ps-2"
                                    name="size"
                                    id="size"
                                >
                                    <option value="red">S</option>
                                    <option value="green">M</option>
                                    <option value="blue">L</option>
                                    <option value="blue">XL</option>
                                    <option value="blue">XXL</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-start items-center sm:gap-5 gap-1">
                        <div className="border flex items-center gap-1 justify-center px-1 rounded-full">
                            <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
                            <h5 className="text-[12px] text-neutral">In Stock</h5>
                        </div>
                        <div className="flex justify-start items-center">
                            <span className="hover:bg-gray-300 px-1 py-1 text-xl cursor-pointer rounded-full">
                                <MinusIcon className="h-3.5 w-3.5" />
                            </span>

                            <span className="px-2 text-neutral">5</span>

                            <span className="hover:bg-gray-300 px-1 py-1 text-xl cursor-pointer rounded-full">
                                <PlusIcon className="h-3.5 w-3.5" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between">
                <h3 className="px-2 line-through text-sm text-red-500">$125</h3>
                <h3 className="px-2 mb-5 text-lg font-bold text-neutral">$110</h3>
                <div className="text-end">
                    <button className="font-semibold btn-link text-info no-underline hover:no-underline">
                        <span className="flex justify-center items-center gap-1 px-2 py-1 rounded-md bg-[#fdeafd6c] hover:bg-blue-100">
                            <span className="text-sm">Save</span>{' '}
                            <LoveIcon className="h-[14px] w-[14px] fill-blue-500" />
                        </span>
                    </button>
                    <button className="font-semibold btn-link text-info no-underline hover:no-underline">
                        <span className="flex justify-center items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100">
                            <span className="text-sm">Remove</span>{' '}
                            <DeleteIcon className="h-[14px] w-[14px] fill-blue-500" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
