import React from 'react';
import CartIcon2 from '../../Icons/CartIcon2';
import DeleteIcon from '../../Icons/DeleteIcon';
import img from '../../assets/Images/joy.png';

const FavouriteItem = () => {
    return (
        <div className="flex justify-between items-center py-2">
            <div className="flex gap-5 justify-start items-center">
                <div className="h-20 w-20">
                    <img src={img} alt="" />
                </div>
                <div className="flex flex-col gap-5 text-start">
                    <div>
                        <h1 className="md:text-lg  font-semibold text-neutral">Mens Super slim t shirt</h1>
                    </div>
                    <div className="flex justify-start items-center sm:gap-5 gap-1">
                        <div className="border flex items-center gap-1 justify-center px-1 rounded-full">
                            <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
                            <h5 className="text-[12px] text-neutral">In Stock</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between">
                <h3 className="px-2 line-through text-sm text-red-500">$125</h3>
                <h3 className="px-2 mb-5 text-lg font-bold text-neutral">$110</h3>
                <div className="text-end">
                    <button className="font-semibold btn-link text-info no-underline hover:no-underline">
                        <span className="flex justify-center items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100">
                            <span className="text-sm">Add to Cart</span>{' '}
                            <CartIcon2 className="h-[14px] w-[14px] fill-blue-500" />
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

export default FavouriteItem;
