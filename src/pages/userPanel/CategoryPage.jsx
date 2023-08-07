import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterIcon from '../../Icons/FilterIcon';
import FilterSideBar from '../../components/ui/FilterSideBar';
import Pagination from '../../components/ui/Pagination';
import Product from '../../components/ui/Product';
import { products } from '../../utils/products';

const CategoryPage = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const screenWidth = window.innerWidth;
    const navigate = useNavigate();
    const filterRef = useRef(null);

    useEffect(() => {
        // add event listener to document to detect clicks outside of navbar
        const handleOutsideClick = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setFilterOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [filterRef]);

    const handleFiltering = () => {
        if (screenWidth < 1024) {
            setFilterOpen(!filterOpen);
        } else {
            navigate('/favourite-items');
        }
    };

    return (
        <div className="max-w-screen-xl  mx-auto relative">
            <div className="grid grid-cols-12 mx-2">
                <div className="lg:col-span-3 lg:block hidden lg:me-5 ">
                    <div className="border-b border-dashed">
                        <h1 className="text-start text-lg text-gray-400 font-semibold my-2">Filter</h1>
                    </div>

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

                {/* productDetails  */}

                <div className="lg:col-span-9 col-span-12">
                    <div className="flex justify-between items-center mb-5 lg:border-b lg:border-dashed">
                        <h1 className="text-start text-lg text-gray-400 font-semibold my-2">Products</h1>
                        <div className="lg:hidden">
                            <button
                                onClick={handleFiltering}
                                className="flex items-center bg-gray-200 rounded-sm text-neutral py-0.5 px-1.5 gap-1"
                            >
                                <span className="text-gray-500">Filter</span>{' '}
                                <FilterIcon className="h-4 w-4 mt-0.5 fill-neutral" />
                            </button>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-2 sm:gap-3 md:gap-2 lg:gap-5 xsm:mx-0 mx-10">
                        {products &&
                            products.slice(0, 12).map((product) => <Product key={product.id} product={product} />)}
                    </div>
                    <Pagination />
                </div>
            </div>
            <div
                ref={filterRef}
                className={`w-72 absolute top-0 h-full z-20 transition-all origin-left lg:hidden ${
                    filterOpen ? 'left-0' : 'right-full'
                }`}
            >
                <FilterSideBar setNavIsOpen={filterOpen} onClick={handleFiltering} className="h-full" />
            </div>
            <div
                className={`absolute top-0 h-full w-full bg-[#8f8f8f70] z-10 lg:hidden transition-all origin-left ${
                    filterOpen ? 'right-0' : 'right-full'
                }`}
                onClick={() => setFilterOpen(false)}
            ></div>
        </div>
    );
};

export default CategoryPage;
