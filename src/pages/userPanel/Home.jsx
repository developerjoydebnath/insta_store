import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Carousel from '../../components/ui/Carousel';
import FlashSale from '../../components/ui/FlashSale';

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="mx-2">
                <Carousel />
                <div>
                    <div>
                        <h1>category</h1>
                    </div>
                    <div className="xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                        <FlashSale />
                    </div>
                    <div>
                        <FlashSale />
                    </div>
                    <div>
                        <h1>ladis fashion</h1>
                    </div>
                    <div>
                        <h1>babies fashion</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
