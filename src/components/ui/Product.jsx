import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartIcon2 from '../../Icons/CartIcon2';
import LoveIcon from '../../Icons/LoveIcon';
import StarFillIcon from '../../Icons/StarFillIcon';
import StarIcon from '../../Icons/StarIcon';
import img from '../../assets/Images/sweater-4.webp';

const Product = ({ product }) => {
    const { title, id } = product;
    const navigate = useNavigate();
    return (
        <div className="relative">
            <div
                onClick={() => navigate(`/product-details/${id}`)}
                className="border border-dashed border-red-100 hover:border-red-300 hover:bg-slate-100 rounded-md cursor-pointer"
            >
                <div className="m-3">
                    <div className="lg:h-44 md:h-40 sm:h-44 h-28 w-full overflow-hidden md:px-0 px-3">
                        <img className="object-cover" src={img} alt="" />
                    </div>
                    <div className="text-start mt-3">
                        <h3 className="text-sm sm:text-[16px]">{title}</h3>
                        <div className="flex justify-start items-center my-1">
                            <StarFillIcon className="h-4 w-4 md:h-5 md:w-5 fill-amber-500" />
                            <StarFillIcon className="h-4 w-4 md:h-5 md:w-5 fill-amber-500" />
                            <StarFillIcon className="h-4 w-4 md:h-5 md:w-5 fill-amber-500" />
                            <StarIcon className="h-4 w-4 md:h-5 md:w-5 fill-amber-500" />
                            <StarIcon className="h-4 w-4 md:h-5 md:w-5 fill-amber-500" />
                        </div>
                        <div className="text-start flex gap-1">
                            <span className="sm:text-xl text-lg font-bold">$200</span>
                            <span className="sm:text-sm text-xs line-through text-red-400">$250</span>
                        </div>
                    </div>
                </div>
            </div>
            <span
                onClick={() => console.log('added to cart successfully')}
                className="sm:p-2 z-10 p-1.5 sm:rounded-xl rounded-md bg-red-50 hover:bg-red-100 fill-primary cursor-pointer absolute sm:right-2 sm:bottom-2 bottom-2.5 right-2"
            >
                <CartIcon2 className="sm:h-5 sm:w-5 h-[18px] w-[18px]" />
            </span>
            <span
                onClick={() => console.log('added to cart successfully')}
                className="z-10 p-1.5 rounded-full bg-red-100 fill-primary cursor-pointer absolute top-2 right-2"
            >
                <LoveIcon className="sm:h-4 sm:w-4 h-3.5 w-3.5" />
            </span>
        </div>
    );
};

export default Product;
