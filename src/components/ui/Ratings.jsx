import React from 'react';
import StarFillIcon from '../../Icons/StarFillIcon';
import StarIcon from '../../Icons/StarIcon';

const Ratings = () => {
    return (
        <div className="border-b border-dashed pb-5">
            <h1 className="border-t border-dashed mt-5 text-start text-xl font-bold mb-5 pt-5">Reviews & Ratings</h1>
            <div className="sm:flex gap-5">
                <div className="text-start mb-5 sm:mb-0">
                    <div>
                        <span className="text-5xl">4.5</span>
                        <span className="text-2xl">/5</span>
                    </div>
                    <div className="flex my-2">
                        <StarFillIcon className="h-5 w-5 fill-amber-500" />
                        <StarFillIcon className="h-5 w-5 fill-amber-500" />
                        <StarFillIcon className="h-5 w-5 fill-amber-500" />
                        <StarFillIcon className="h-5 w-5 fill-amber-500" />
                        <StarIcon className="h-5 w-5 fill-amber-500" />
                    </div>
                    <div>
                        <p className="text-sm">77 Ratings</p>
                    </div>
                </div>
                <div>
                    <div className="">
                        <div className="flex gap-2 items-center">
                            <div>5 Stars</div>
                            <div className="w-44 h-2 bg-red-400 rounded-full">
                                <div className={`h-full w-[50%] bg-green-400 rounded-full`}></div>
                            </div>
                            <div>50%</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div>4 Stars</div>
                            <div className="w-44 h-2 bg-red-400 rounded-full">
                                <div className={`h-full w-[50%] bg-green-400 rounded-full`}></div>
                            </div>
                            <div>50%</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div>3 Stars</div>
                            <div className="w-44 h-2 bg-red-400 rounded-full">
                                <div className={`h-full w-[50%] bg-green-400 rounded-full`}></div>
                            </div>
                            <div>50%</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div>2 Stars</div>
                            <div className="w-44 h-2 bg-red-400 rounded-full">
                                <div className={`h-full w-[50%] bg-green-400 rounded-full`}></div>
                            </div>
                            <div>50%</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div>1 Stars</div>
                            <div className="w-44 h-2 bg-red-400 rounded-full">
                                <div className={`h-full w-[50%] bg-green-400 rounded-full`}></div>
                            </div>
                            <div>50%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ratings;
