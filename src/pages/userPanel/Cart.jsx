import React from 'react';
import CartItem from '../../components/ui/CartItem';
import OrderSummery from '../../components/ui/OrderSummery';
import Pagination from '../../components/ui/Pagination';

const Cart = () => {
    return (
        <section className="lg:max-w-screen-xl max-w-screen-md  mx-auto">
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-5 gap-5">
                <div className="lg:border-r lg:col-span-2">
                    <div>
                        <div className="flex justify-between sm:mx-5 items-center md:mx-6 mx-3 border-b pb-2">
                            <h3 className="font-bold text-neutral text-lg">My Cart</h3>
                            <h4 className="font-bold text-neutral text-lg">5 Items</h4>
                        </div>
                        <div className="md:mx-6 sm:mx-5 mx-3 divide-y divide-dashed divide-slate-300">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className="border-t md:mx-6 sm:mx-5 mx-3">
                            <Pagination />
                        </div>
                    </div>
                </div>
                <OrderSummery />
            </div>
        </section>
    );
};

export default Cart;
