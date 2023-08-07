import React from 'react';
import CloseIcon from '../../Icons/CloseIcon';

const FilterSideBar = ({ className = '', onClick }) => {
    return (
        <div className={className}>
            <div className="h-full bg-white overflow-y-scroll ">
                <div className="h-11 justify-between flex ps-4 pe-1 items-center w-72">
                    <h1 className="text-gray-500">Filters</h1>
                    <div className="p-1 cursor-pointer" onClick={(e) => onClick && onClick(e)}>
                        <CloseIcon className="h-6 w-6 md:hidden fill-gray-500" />
                    </div>
                </div>
                <div className="mt-3 ms-4 mb-3">
                    <div className="my-2 pb-3 border-b border-dashed">
                        <h1 className="text-start mb-2 text-gray-400 font-normal">Price</h1>
                        <div className="flex gap-3">
                            <div className="text-start ms-3 mb-1 flex">
                                <input type="number" className="border rounded outline-none text-sm py-1 px-2 w-20" />
                            </div>
                            <h4>To</h4>
                            <div>
                                <input type="number" className="border rounded outline-none text-sm py-1 px-2 w-20" />
                            </div>
                        </div>
                        <div className="text-start ms-3 mt-1">
                            <button
                                type="button"
                                className="border text-sm text-neutral py-1 px-2 w-20 rounded bg-gray-200"
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="my-2 pb-3 border-b border-dashed">
                        <h1 className="text-start mb-2 text-gray-400 font-normal">Category</h1>
                        <div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirts" className="cursor-pointer" />
                                <label htmlFor="shirts" className="ms-1.5 text-sm cursor-pointer">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 pb-3 border-b border-dashed">
                        <h1 className="text-start mb-2 text-gray-400 font-normal">Brands</h1>
                        <div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 pb-3 border-b border-dashed">
                        <h1 className="text-start mb-2 text-gray-400 font-normal">Rating</h1>
                        <div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 pb-3 border-b border-dashed">
                        <h1 className="text-start mb-2 text-gray-400 font-normal">Colors</h1>
                        <div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 pb-3 border-b border-dashed">
                        <h1 className="text-start mb-2 text-gray-400 font-normal">Size</h1>
                        <div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                            <div className="text-start ms-3 mb-1">
                                <input type="checkbox" name="shirt" id="shirt" />
                                <label htmlFor="shirt" className="ms-1.5 text-sm">
                                    Shirt & Cloths
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSideBar;
