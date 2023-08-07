import React, { useState } from 'react';

const SecondDiv = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    return (
        <div className="lg:col-span-5 col-span-8 text-start sm:px-3">
            <div className="border-b  border-dashed">
                <p className="text-xs text-neutral">Men's Fashion</p>
                <h1 className="text-3xl font-semibold">Shirt 1 men's fetions Shirt 1 men's fetions </h1>
                <div className="divide-x text-xs flex gap-3 mt-3 text-neutral">
                    <span>4.9 Stars</span>
                    <span className="ps-3">20 Stock</span>
                </div>
                <h3 className="mt-4">
                    <span className="line-through text-neutral font-semibold me-2">$250</span>
                    <span className="text-red-500">(20% off)</span>
                </h3>
                <h2 className="text-2xl font-bold mt-2">$150</h2>
                <p className="text-xs text-neutral mt-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quidem veritatis dignissimos
                    debitis eveniet possimus tenetur delectus vel sapiente ullam iusto illum consectetur voluptates
                    necessitatibus molestiae, reiciendis vitae corporis mollitia?
                </p>
                <div className="mt-5 flex items-center gap-4">
                    <span>
                        <h3 className="text-sm font-semibold text-neutral">Colors</h3>
                    </span>
                    <span
                        onClick={() => setSelectedColor('red')}
                        className={`h-5 w-5 rounded-full bg-red-500 cursor-pointer ${
                            selectedColor === 'red' ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                        }`}
                    ></span>
                    <span
                        onClick={() => setSelectedColor('green')}
                        className={`h-5 w-5 rounded-full bg-green-500 cursor-pointer ${
                            selectedColor === 'green' ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                        }`}
                    ></span>
                    <span
                        onClick={() => setSelectedColor('blue')}
                        className={`h-5 w-5 rounded-full bg-blue-500 cursor-pointer ${
                            selectedColor === 'blue' ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                        }`}
                    ></span>
                </div>
                <div className="mt-5">
                    <h4 className="text-sm font-semibold text-neutral">Sizes</h4>
                    <div className="flex items-center gap-8 mt-3 ">
                        <span
                            onClick={() => setSelectedSize('S')}
                            className={`border h-10 w-10 flex justify-center items-center rounded-full cursor-pointer ${
                                selectedSize === 'S' ? 'bg-gray-200' : ''
                            }`}
                        >
                            S
                        </span>
                        <span
                            onClick={() => setSelectedSize('M')}
                            className={`border h-10 w-10 flex justify-center items-center rounded-full cursor-pointer ${
                                selectedSize === 'M' ? 'bg-gray-200' : ''
                            }`}
                        >
                            M
                        </span>
                        <span
                            onClick={() => setSelectedSize('L')}
                            className={`border h-10 w-10 flex justify-center items-center rounded-full cursor-pointer ${
                                selectedSize === 'L' ? 'bg-gray-200' : ''
                            }`}
                        >
                            L
                        </span>
                    </div>
                </div>

                <div className="mt-5 flex gap-5 items-center">
                    <h4 className="text-sm font-semibold text-neutral">Quantity</h4>
                    <div>
                        <span className="border border-e-0 px-3 py-1.5 cursor-pointer">-</span>
                        <span className="border px-4 py-1.5">5</span>
                        <span className="border border-s-0 px-3 py-1.5 cursor-pointer">+</span>
                    </div>
                </div>
                <div className="mt-10">
                    <button className="btn btn-md bg-blue-500 outline-none border-none hover:bg-blue-600 text-base-100">
                        Add to Cart
                    </button>
                    <button className="btn bg-green-500 outline-none border-none hover:bg-green-600 text-base-100 ms-3 mb-5">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="mt-4 lg:mb-0 mb-5 lg:border-none pb-4 lg:pb-0 border-b border-dashed text-sm">
                <h4 className="my-1">
                    SKU : <span className="text-neutral">DJI32342</span>
                </h4>
                <h4 className="my-1">
                    Availability: <span className="text-blue-500">In Stock</span>
                </h4>
                <h4 className="my-1">
                    Categories: <span className="text-neutral">Men</span>
                </h4>
                <h4 className="my-1">
                    Tags: <span className="text-neutral">Men, Fashion, New Trend</span>
                </h4>
            </div>
        </div>
    );
};

export default SecondDiv;
