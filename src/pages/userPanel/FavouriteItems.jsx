import React from 'react';
import FavouriteItem from '../../components/ui/FavouriteItem';
import Pagination from '../../components/ui/Pagination';

const FavouriteItems = () => {
    return (
        <div>
            <div className="max-w-screen-md mx-auto px-2">
                <div className="flex justify-between items-center border-b py-2">
                    <h3 className="font-bold text-neutral text-lg">Favourite Items</h3>
                    <h4 className="font-bold text-neutral text-lg">5 Items</h4>
                </div>
                <div className="divide-y divide-dashed divide-blue-200">
                    <FavouriteItem />
                    <FavouriteItem />
                    <FavouriteItem />
                    <FavouriteItem />
                    <FavouriteItem />
                </div>
                <div className="border-t">
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default FavouriteItems;
