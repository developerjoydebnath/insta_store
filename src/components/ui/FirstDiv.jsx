import React, { useState } from 'react';
import img4 from '../../assets/Images/joy-1.png';
import img2 from '../../assets/Images/joy.png';
import img from '../../assets/Images/sweater-4.webp';
import img3 from '../../assets/Images/sweater-5.webp';

const FirstDiv = () => {
    const [image, setImage] = useState(img);
    return (
        <div className="lg:col-span-4 md:col-span-5">
            <div className="flex justify-center items-center">
                <img className="lg:h-96 md:h-80 sm:h-72 h-60 w-max mt-5" src={image} alt="" />
            </div>
            <div className="flex lg:gap-2 gap-1 justify-center items-center mt-5">
                <img
                    className={`lg:h-20 lg:w-20 md:h-16 md:w-16 h-16 w-16 lg:p-2 md:p-2 sm:p-1.5 p-1 cursor-pointer bg-gray-100 rounded hover:bg-gray-200 ${
                        image === img2 ? 'bg-gray-200' : ''
                    }`}
                    src={img2}
                    alt=""
                    onClick={() => setImage(img2)}
                />
                <img
                    className={`lg:h-20 lg:w-20 md:h-16 md:w-16 h-16 w-16 lg:p-2 md:p-2 sm:p-1.5 p-1 cursor-pointer bg-gray-100 rounded hover:bg-gray-200 ${
                        image === img ? 'bg-gray-200' : ''
                    }`}
                    src={img}
                    alt=""
                    onClick={() => setImage(img)}
                />
                <img
                    className={`lg:h-20 lg:w-20 md:h-16 md:w-16 h-16 w-16 lg:p-2 md:p-2 sm:p-1.5 p-1 cursor-pointer bg-gray-100 rounded hover:bg-gray-200 ${
                        image === img3 ? 'bg-gray-200' : ''
                    }`}
                    src={img3}
                    alt=""
                    onClick={() => setImage(img3)}
                />
                <img
                    className={`lg:h-20 lg:w-20 md:h-16 md:w-16 h-16 w-16 lg:p-2 md:p-2 sm:p-1.5 p-1 cursor-pointer bg-gray-100 rounded hover:bg-gray-200 ${
                        image === img4 ? 'bg-gray-200' : ''
                    }`}
                    src={img4}
                    alt=""
                    onClick={() => setImage(img4)}
                />
            </div>
        </div>
    );
};

export default FirstDiv;
