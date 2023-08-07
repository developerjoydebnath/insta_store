import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../assets/Images/banner-1.webp';
import banner2 from '../../assets/Images/banner-2.webp';
import banner4 from '../../assets/Images/banner-3.webp';
import banner3 from '../../assets/Images/banner-4.webp';
import banner5 from '../../assets/Images/banner-5.webp';

const Carousel = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', position: 'absolute', right: '10px' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    position: 'absolute',
                    left: '10px',
                    zIndex: '1',
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div className="">
                <ul className="absolute block w-full left-0 bottom-10">
                    <span className="">{dots}</span>
                </ul>
            </div>
        ),
        customPaging: () => <div className="h-4 w-4 border-2 bg-gray-400 rounded-full"></div>,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div className="lg:col-span-2 xl:h-96 md:h-80 sm:h-60 h-40">
                <Slider {...settings}>
                    <div className="w-full">
                        <img className="w-full xl:h-96 md:h-80 sm:h-60 h-40" src={banner1} alt="" />
                    </div>
                    <div className="w-full">
                        <img className="w-full xl:h-96 md:h-80 sm:h-60 h-40" src={banner2} alt="" />
                    </div>
                    <div className="w-full">
                        <img className="w-full xl:h-96 md:h-80 sm:h-60 h-40" src={banner3} alt="" />
                    </div>
                </Slider>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 md:h-48 lg:h-80 xl:h-96">
                <div className="w-full">
                    <img className="w-full h-20 sm:h-40 md:h-48 lg:h-40 xl:h-48" src={banner4} alt="" />
                </div>
                <div className="w-full">
                    <img className="w-full h-20 sm:h-40 md:h-48 lg:h-40 xl:h-48" src={banner5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
