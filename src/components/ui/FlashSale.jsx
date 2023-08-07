import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '../../Icons/ArrowRightAltIcon';
import { products } from '../../utils/products';
import Product from './Product';

const FlashSale = () => {
    return (
        <div className="my-5">
            <div>
                <div className="flex justify-between mb-5">
                    <h1 className="text-xl font-semibold">Flash Sale</h1>
                    <h1>
                        <Link
                            to={`/category/mens-fashion`}
                            className="text-info flex justify-center items-center gap-1"
                        >
                            <h1>See More</h1> <ArrowRightAltIcon className="h-4 w-4 mt-1 fill-info" />
                        </Link>
                    </h1>
                </div>
                <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-2 sm:gap-3 md:gap-2 lg:gap-5">
                    {products && products.slice(0, 12).map((product) => <Product key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
